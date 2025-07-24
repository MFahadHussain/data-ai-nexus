
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

  const sendToGoogleSheets = async (data: any) => {
    // Google Apps Script Web App URL - replace with your own
    const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          timestamp: new Date().toISOString()
        })
      });

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending to Google Sheets:', error);
      toast({
        title: "Error", 
        description: "Failed to send message. Please try again or contact me directly at bangashfahad98@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sendToGoogleSheets(formData);
  };

  return (
    <div className="bg-white dark:bg-gray-900 card-modern">
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
          className="w-full bg-primary hover:bg-primary/90 button-modern"
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
