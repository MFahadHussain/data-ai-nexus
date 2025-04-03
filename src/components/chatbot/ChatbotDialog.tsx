
import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ChatMessage, Message } from "./ChatMessage";
import { PackageSelector } from "./PackageSelector";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactEmail: string;
}

const servicePackages = [
  {
    id: "starter",
    name: "Starter Package",
    description: "Essential data solutions for small businesses",
    features: ["Basic data pipeline setup", "Monthly reporting", "Email support"]
  },
  {
    id: "intermediate",
    name: "Intermediate Package",
    description: "Advanced analytics for growing companies",
    features: ["Custom ETL processes", "Interactive dashboards", "Basic ML models", "Priority support"]
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "Enterprise-grade AI and data engineering",
    features: ["End-to-end data architecture", "Custom AI model development", "Real-time analytics", "24/7 support", "Quarterly strategy sessions"]
  }
];

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "👋 Hi there! I'm your AI assistant. I can help you learn about our data and AI services. What would you like to know?"
  }
];

export const ChatbotDialog: React.FC<ChatbotDialogProps> = ({ open, onOpenChange, contactEmail }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [showPackages, setShowPackages] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [askingForEmail, setAskingForEmail] = useState(false);
  const [askingForName, setAskingForName] = useState(false);
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages update
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    
    // Handle name collection
    if (askingForName) {
      setUserName(input.trim());
      setAskingForName(false);
      
      setTimeout(() => {
        const responseMessage: Message = {
          id: Date.now().toString(),
          role: "assistant",
          content: `Thanks, ${input.trim()}! What's your email address so I can send you information about the ${selectedPackage} package?`
        };
        setMessages((prev) => [...prev, responseMessage]);
        setAskingForEmail(true);
      }, 500);
      return;
    }
    
    // Handle email collection
    if (askingForEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(input.trim())) {
        setUserEmail(input.trim());
        setAskingForEmail(false);
        
        // Send email using EmailJS
        const templateParams = {
          to_email: contactEmail,
          from_name: userName,
          from_email: input.trim(),
          selected_package: selectedPackage,
          message: `${userName} (${input.trim()}) is interested in the ${selectedPackage} package.`
        };
        
        emailjs.send(
          "service_njekgw5", // Your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          templateParams
        )
        .then(() => {
          setTimeout(() => {
            const responseMessage: Message = {
              id: Date.now().toString(),
              role: "assistant",
              content: `Thank you! I've sent your interest in the ${selectedPackage} package to our team. Someone will contact you soon at ${input.trim()}.`
            };
            setMessages((prev) => [...prev, responseMessage]);
            toast.success("Package inquiry sent successfully!");
          }, 500);
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          setTimeout(() => {
            const responseMessage: Message = {
              id: Date.now().toString(),
              role: "assistant",
              content: "Sorry, there was an issue sending your inquiry. Please try again later or contact us directly."
            };
            setMessages((prev) => [...prev, responseMessage]);
            toast.error("Failed to send package inquiry.");
          }, 500);
        });
      } else {
        setTimeout(() => {
          const responseMessage: Message = {
            id: Date.now().toString(),
            role: "assistant",
            content: "That doesn't look like a valid email address. Please enter a valid email so we can contact you."
          };
          setMessages((prev) => [...prev, responseMessage]);
        }, 500);
      }
      return;
    }
    
    // Handle regular questions
    setTimeout(() => {
      processUserInput(input.toLowerCase());
    }, 500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const selectPackage = (pkg: any) => {
    setShowPackages(false);
    setSelectedPackage(pkg.name);
    
    const packageMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: `I'm interested in the ${pkg.name}.`
    };
    
    setMessages((prev) => [...prev, packageMessage]);
    
    setTimeout(() => {
      const responseMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: `Great choice! The ${pkg.name} is perfect for your needs. What's your name?`
      };
      setMessages((prev) => [...prev, responseMessage]);
      setAskingForName(true);
    }, 500);
  };
  
  const processUserInput = (input: string) => {
    // Handle different types of user queries
    if (
      input.includes("package") ||
      input.includes("pricing") ||
      input.includes("plan") ||
      input.includes("subscription") ||
      input.includes("cost")
    ) {
      const responseMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "We offer several packages tailored to different needs and budgets. Please select one you're interested in:"
      };
      setMessages((prev) => [...prev, responseMessage]);
      setShowPackages(true);
    } else if (
      input.includes("service") ||
      input.includes("offer") ||
      input.includes("provide") ||
      input.includes("do you do") ||
      input.includes("what can you")
    ) {
      const responseMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "We offer a range of data engineering and AI services including: \n\n" +
          "• Data Engineering: ETL pipelines, data warehousing, and big data processing\n" +
          "• AI & Machine Learning: Custom model development, NLP, and computer vision solutions\n" +
          "• Cloud & DevOps: Infrastructure management on AWS, Azure, and GCP\n" +
          "• Data Visualization: Interactive dashboards and business intelligence\n" +
          "• Consulting: End-to-end project management and technical guidance\n\n" +
          "Would you like to learn about our service packages?"
      };
      setMessages((prev) => [...prev, responseMessage]);
    } else if (
      input.includes("hello") ||
      input.includes("hi") ||
      input.includes("hey") ||
      input.includes("start")
    ) {
      const responseMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Hello! I'm here to help you learn about our data and AI services. You can ask me about what we offer, our packages, or specific services like data engineering or machine learning."
      };
      setMessages((prev) => [...prev, responseMessage]);
    } else {
      const responseMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: "I can help you with information about our services and packages. Would you like to know more about what we offer or see our available packages?"
      };
      setMessages((prev) => [...prev, responseMessage]);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] h-[600px] flex flex-col p-0 gap-0">
        <DialogHeader className="p-4 border-b">
          <DialogTitle>Data AI Nexus Assistant</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-grow p-4">
          <div className="flex flex-col">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {showPackages && (
              <PackageSelector packages={servicePackages} onSelectPackage={selectPackage} />
            )}
            <div ref={endOfMessagesRef} />
          </div>
        </ScrollArea>
        
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-grow"
            />
            <Button 
              type="submit" 
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
