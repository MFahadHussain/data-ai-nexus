
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import emailjs from '@emailjs/browser';
import { FormField } from "./FormField";

interface ContactFormProps {
  contactEmail: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ contactEmail }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // To make this work, you need to:
      // 1. Create an account at https://www.emailjs.com/
      // 2. Set up a service (e.g., Gmail)
      // 3. Create an email template
      // 4. Replace the service_id, template_id, and public_key with your own
      
      // IMPORTANT: You need to create a .env file with these values
      // and add them to your environment variables in your deployment
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your public key
      
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );
      
      toast({
        title: "Message sent!",
        description: `Your message has been sent to ${contactEmail}. I'll get back to you soon.`,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Email send failed:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            id="name"
            name="name"
            label="Your Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          <FormField
            id="email"
            name="email"
            label="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>
        
        <FormField
          id="subject"
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
        />
        
        <FormField
          id="message"
          name="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={5}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
            </div>
          ) : (
            <div className="flex items-center">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};
