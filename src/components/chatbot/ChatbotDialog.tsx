  
import React, { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, X } from "lucide-react";
import { ChatMessage, Message } from "./ChatMessage";
import { PackageSelector } from "./PackageSelector";
import { TypingIndicator } from "./TypingIndicator";
import { QuickActions } from "./QuickActions";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const MotionDialogContent = motion(DialogContent);


// Initialize EmailJS
emailjs.init("fcVsbjrz_sxDRW4Qt"); // Replace with your actual EmailJS public key

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contactEmail: string;
}

const servicePackages = [
  {
    id: "basic",
    name: "Basic Package",
    description: "Perfect for small businesses getting started with AI automation - Starting from $500",
    features: [
      "Basic chatbot setup",
      "Simple data dashboard", 
      "Email support",
      "1 revision included",
      "Basic integration",
      "Documentation provided"
    ]
  },
  {
    id: "professional",
    name: "Professional Package", 
    description: "Comprehensive solution for growing businesses - Starting from $1,500",
    features: [
      "Advanced chatbot with NLP",
      "Custom data pipelines",
      "Power BI dashboard",
      "Priority support",
      "3 revisions included",
      "API integrations",
      "Training session included",
      "30-day support"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise Package",
    description: "Tailored solutions for large organizations - Custom Quote",
    features: [
      "Enterprise chatbot solution",
      "Complex data architecture",
      "Multi-dashboard setup",
      "Dedicated support",
      "Unlimited revisions",
      "Full system integration",
      "Team training program",
      "6-month support",
      "Ongoing consultation"
    ]
  }
];

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "👋 Hi! I'm Fahad Hussain's AI assistant. I can help you learn about Fahad's services, experience, packages, and how he can help your business with AI and data solutions. What would you like to know?"
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
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when messages update
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const handleQuickAction = (query: string) => {
    setShowQuickActions(false);
    // Create user message from quick action
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: query
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    // Process the quick action query
    setTimeout(() => {
      setIsTyping(false);
      processUserInput(query.toLowerCase());
    }, 800 + Math.random() * 400);
  };

  const handleSendMessage = () => {
    const messageText = input.trim();
    if (!messageText) return;
    
    // Hide quick actions after first message
    if (showQuickActions) {
      setShowQuickActions(false);
    }
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Handle name collection
    if (askingForName) {
      setUserName(messageText.trim());
      setAskingForName(false);
      setIsTyping(false);
      
      setTimeout(() => {
        const responseMessage: Message = {
          id: Date.now().toString(),
          role: "assistant",
          content: `Thanks, ${messageText.trim()}! What's your email address so I can send you information about the ${selectedPackage} package?`
        };
        setMessages((prev) => [...prev, responseMessage]);
        setAskingForEmail(true);
      }, 500);
      return;
    }
    
    // Handle email collection
    if (askingForEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsTyping(false);
      
      if (emailRegex.test(messageText.trim())) {
        setUserEmail(messageText.trim());
        setAskingForEmail(false);
        
        // Send email using EmailJS
        const templateParams = {
          to_email: contactEmail,
          from_name: userName,
          from_email: messageText.trim(),
          selected_package: selectedPackage,
          message: `${userName} (${messageText.trim()}) is interested in the ${selectedPackage} package.`
        };
        
        emailjs.send(
          "service_njekgw5",
          "template_4objhs6",
          templateParams
        )
        .then(() => {
          setTimeout(() => {
            const responseMessage: Message = {
              id: Date.now().toString(),
              role: "assistant",
              content: `Thank you! I've sent your interest in the ${selectedPackage} package to our team. Someone will contact you soon at ${messageText.trim()}.`
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
      setIsTyping(false);
      processUserInput(messageText.toLowerCase());
    }, 800 + Math.random() * 400); // Simulate typing delay
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
    const lowerInput = input.toLowerCase();
    
    let responseContent = "";
    
    // Contact Information
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      responseContent = "You can reach Fahad through:\n\n📧 Email: bangashfahad98@gmail.com\n📞 Phone: 0334-0072900\n💼 LinkedIn: https://www.linkedin.com/in/fahadbangash\n🐙 GitHub: https://github.com/MFahadHussain\n🌐 Portfolio: https://fahadai.netlify.app\n\nHe's available for freelance and remote work. Feel free to reach out anytime!";
    }
    // Education & Background
    else if (lowerInput.includes('education') || lowerInput.includes('background') || lowerInput.includes('degree')) {
      responseContent = "Fahad holds a Bachelor's degree in Computer Science with specialization in Data Science and AI. He's also completed numerous certifications in:\n\n• Machine Learning (Google, Coursera)\n• Data Engineering (AWS, GCP)\n• Power BI & Business Intelligence\n• Cloud Computing\n\nHe continuously updates his skills through courses and hands-on projects.";
    }
    // Experience
    else if (lowerInput.includes('experience') || lowerInput.includes('work history')) {
      responseContent = "Fahad is a Data & AI Engineer with 3+ years of experience:\n\n• Data pipeline architecture and ETL processes\n• Machine Learning model development and deployment\n• Business intelligence and analytics solutions\n• Full-stack development with AI integration\n• Cloud platforms (AWS, GCP, Azure)\n\nHe's successfully delivered 20+ projects for clients across various industries.";
    }
    // Community Roles
    else if (lowerInput.includes('community') || lowerInput.includes('gdsc') || lowerInput.includes('mlsa') || lowerInput.includes('leverify') || lowerInput.includes('roles')) {
      responseContent = "Fahad is actively involved in the tech community:\n\n🎓 GDSC (Google Developer Student Club) - Lead/Member\n🌟 MLSA (Microsoft Learn Student Ambassador)\n🚀 Leverify - Platform contributor and mentor\n📚 Regular speaker at tech events like DevFest\n✍️ Technical writer on Medium\n\nHe believes in sharing knowledge and helping others grow in tech!";
    }
    // Services Overview
    else if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('help') || lowerInput.includes('offer')) {
      responseContent = "Fahad specializes in AI and data solutions! Here's what he offers:\n\n🤖 Custom Chatbot Development\n📊 Data Engineering Pipelines\n⚡ AI Automation Solutions\n📈 Power BI & Data Visualization\n🧠 AI Consulting & Mentoring\n💬 Technical Consultation\n\nWould you like to know more about any specific service or see our packages?";
    }
    // Chatbot Development
    else if (lowerInput.includes('chatbot') || lowerInput.includes('bot') || lowerInput.includes('conversational ai')) {
      responseContent = "Absolutely! Fahad can build custom chatbots for your business:\n\n💬 24/7 Customer Support Bots\n🎯 Lead Generation & Qualification\n❓ FAQ & Knowledge Base Integration\n🔗 CRM & System Integration\n🧠 Natural Language Processing\n📱 Multi-platform Deployment\n\nChatbots can reduce response times by 80% and improve customer satisfaction. Would you like to discuss your specific needs?";
    }
    // AI Automation
    else if (lowerInput.includes('automation') || lowerInput.includes('workflow') || lowerInput.includes('ai automation')) {
      responseContent = "Yes! Fahad can automate your business workflows with AI:\n\n📄 Document Processing & OCR\n📧 Email Automation & Routing\n📋 Data Entry & Validation\n🔄 Process Optimization\n🤖 Intelligent Task Routing\n📊 Automated Reporting\n\nAutomation can save 60-80% of manual work time. What processes would you like to automate?";
    }
    // Data Pipelines
    else if (lowerInput.includes('data pipeline') || lowerInput.includes('etl') || lowerInput.includes('data engineering')) {
      responseContent = "Absolutely! Fahad builds robust data pipelines:\n\n🔄 ETL/ELT Pipeline Development\n⚡ Real-time Data Processing\n🏗️ Data Warehouse Architecture\n🔌 API Integration & Connectors\n📊 Data Quality & Monitoring\n☁️ Cloud-native Solutions\n\nHe can help you transform raw data into valuable business insights. What's your data challenge?";
    }
    // Power BI & Visualization
    else if (lowerInput.includes('power bi') || lowerInput.includes('dashboard') || lowerInput.includes('visualization') || lowerInput.includes('reporting')) {
      responseContent = "Yes! Fahad creates stunning Power BI dashboards and data visualizations:\n\n📊 Interactive Dashboards\n📈 Custom KPI Reports\n🔍 Self-Service Analytics\n🎨 Beautiful Data Storytelling\n📱 Mobile-Responsive Design\n🔄 Real-time Data Updates\n\nTransform your data into actionable insights! What metrics are important to your business?";
    }
    // Consulting & Mentoring
    else if (lowerInput.includes('consulting') || lowerInput.includes('mentoring') || lowerInput.includes('mentor') || lowerInput.includes('consultation')) {
      responseContent = "Yes! Fahad offers consulting and mentoring services:\n\n🎯 AI Strategy Development\n👨‍🏫 Technical Mentoring\n📚 Team Training Programs\n🏗️ Solution Architecture\n💡 Best Practice Guidance\n🚀 Career Development Support\n\nWhether you need strategic guidance or hands-on mentoring, he's here to help you succeed!";
    }
    // Packages & Pricing
    else if (lowerInput.includes('package') || lowerInput.includes('pricing') || lowerInput.includes('cost') || lowerInput.includes('price')) {
      responseContent = "Great! Fahad offers three main service packages to fit different needs and budgets:\n\n💼 Basic Package - Starting from $500\n🚀 Professional Package - Starting from $1,500\n🏢 Enterprise Package - Custom Quote\n\nPlease take a look at the options below and let me know which one interests you:";
      setShowPackages(true);
    }
    // Custom Quote
    else if (lowerInput.includes('custom quote') || lowerInput.includes('estimate') || lowerInput.includes('custom pricing')) {
      responseContent = "Fahad would be happy to provide a custom quote! For accurate pricing, he'll need to understand:\n\n📋 Project scope and requirements\n⏱️ Timeline and deadlines\n🔧 Technical complexity\n📊 Data volume and sources\n🎯 Specific goals and outcomes\n\nWould you like to schedule a consultation to discuss your project in detail?";
    }
    // Service Requests
    else if (lowerInput.includes('request service') || lowerInput.includes('get started') || lowerInput.includes('hire') || lowerInput.includes('work together')) {
      responseContent = "Excellent! Here's how to get started with Fahad:\n\n1️⃣ Send him an email at bangashfahad98@gmail.com\n2️⃣ Schedule a free consultation call\n3️⃣ Discuss your project requirements\n4️⃣ Receive a detailed proposal\n5️⃣ Start building your solution!\n\nHe typically responds within 24 hours. What type of project do you have in mind?";
    }
    // Availability & Working Hours
    else if (lowerInput.includes('available') || lowerInput.includes('freelance') || lowerInput.includes('remote') || lowerInput.includes('working hours') || lowerInput.includes('schedule')) {
      responseContent = "Yes! Fahad is available for freelance and remote work:\n\n⏰ Working Hours: Monday-Friday, 9 AM - 6 PM PST\n🌍 Fully Remote-Friendly\n📅 Flexible scheduling for different time zones\n⚡ Quick response times (usually within 24 hours)\n🤝 Long-term partnerships welcome\n\nHe's currently accepting new projects. When would you like to start?";
    }
    // Meeting/Consultation Scheduling
    else if (lowerInput.includes('meeting') || lowerInput.includes('consultation') || lowerInput.includes('call') || lowerInput.includes('schedule')) {
      responseContent = "Fahad would love to schedule a consultation with you!\n\n📅 Free 30-minute discovery call\n💬 Project discussion and planning\n📋 Requirements gathering\n💡 Solution recommendations\n📊 Timeline and pricing estimates\n\nEmail him at bangashfahad98@gmail.com with your preferred time, or we can arrange a call. What works best for your schedule?";
    }
    // Social Links
    else if (lowerInput.includes('github') || lowerInput.includes('linkedin') || lowerInput.includes('medium') || lowerInput.includes('social') || lowerInput.includes('portfolio')) {
      responseContent = "Here are Fahad's professional profiles:\n\n🐙 GitHub: https://github.com/MFahadHussain\n💼 LinkedIn: https://www.linkedin.com/in/fahadbangash\n🌐 Portfolio: https://fahadai.netlify.app\n📧 Email: bangashfahad98@gmail.com\n📞 Phone: 0334-0072900\n\nFeel free to connect with him on any platform. He regularly shares insights and updates about his projects!";
    }
    // Projects
    else if (lowerInput.includes('project') || lowerInput.includes('portfolio') || lowerInput.includes('work samples')) {
      responseContent = "Fahad has worked on diverse projects including:\n\n🤖 E-commerce chatbots with 90% accuracy\n📊 Real-time analytics dashboards\n⚡ Automated data processing pipelines\n🧠 AI-powered recommendation systems\n📈 Business intelligence solutions\n🔧 Custom CRM integrations\n\nYou can view detailed case studies in his portfolio section. Which type of project interests you most?";
    }
    // Default Response
    else {
      responseContent = "Hi! I'm Fahad Hussain's AI assistant. Fahad is a Data & AI Engineer passionate about helping businesses leverage AI and data for growth. 🚀\n\nI can help you with:\n• Custom chatbot development\n• AI automation solutions\n• Data engineering & pipelines\n• Power BI dashboards\n• Technical consulting\n\nFeel free to ask me about his services, experience, packages, or how you can work together!";
    }

    setIsTyping(false);
    const responseMessage: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: responseContent
    };
    setMessages((prev) => [...prev, responseMessage]);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <MotionDialogContent
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="sm:max-w-[440px] h-[640px] sm:h-[680px] flex flex-col p-0 gap-0
                   bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
                   border border-gray-200/50 dark:border-gray-700/50
                   shadow-2xl rounded-2xl overflow-hidden
                   fixed bottom-6 right-6 left-auto top-auto translate-x-0 translate-y-0
                   data-[state=open]:animate-in data-[state=closed]:animate-out
                   data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                   data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
                   data-[state=closed]:slide-out-to-bottom-1/2 data-[state=open]:slide-in-from-bottom-1/2
                   sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0"
      >
        {/* Header with glassmorphism */}
        <DialogHeader className="px-5 py-4 border-b border-gray-200/50 dark:border-gray-700/50
                                 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-800/50
                                 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                              flex items-center justify-center shadow-lg border-2 border-white/20">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <DialogTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  AI Assistant
                </DialogTitle>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Fahad Hussain
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        {/* Messages area */}
        <ScrollArea className="flex-grow px-4 py-4 bg-gray-50/30 dark:bg-gray-950/30">
          <div className="flex flex-col min-h-full">
            <AnimatePresence>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </AnimatePresence>
            
            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
            
            {showPackages && (
              <PackageSelector packages={servicePackages} onSelectPackage={selectPackage} />
            )}
            <div ref={endOfMessagesRef} />
          </div>
        </ScrollArea>
        
        {/* Quick Actions */}
        <AnimatePresence>
          {showQuickActions && messages.length <= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="px-4 pt-2 pb-3 border-t border-gray-200/50 dark:border-gray-700/50
                         bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 px-1">
                Quick actions:
              </p>
              <QuickActions onSelect={handleQuickAction} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Input area */}
        <div className="px-4 py-4 border-t border-gray-200/50 dark:border-gray-700/50
                        bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
          <div className="flex gap-2 items-end">
            <div className="flex-1 relative">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowQuickActions(false)}
                className="w-full pr-4 pl-4 py-3 rounded-xl
                           bg-white/80 dark:bg-gray-800/80
                           border border-gray-200 dark:border-gray-700
                           focus:border-blue-400 dark:focus:border-blue-500
                           focus:ring-2 focus:ring-blue-400/20 dark:focus:ring-blue-500/20
                           text-sm placeholder:text-gray-400 dark:placeholder:text-gray-500
                           shadow-sm"
              />
            </div>
            <Button 
              type="submit" 
              size="icon"
              onClick={handleSendMessage}
              disabled={!input.trim() || isTyping}
              className="h-11 w-11 rounded-xl shrink-0
                         bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
                         text-white shadow-lg hover:shadow-xl
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transition-all duration-200"
            >
              <Send className="h-4 w-4" strokeWidth={2.5} />
            </Button>
          </div>
        </div>
      </MotionDialogContent>
    </Dialog>
  );
};
