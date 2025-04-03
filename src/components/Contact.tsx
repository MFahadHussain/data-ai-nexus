
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send,
  ExternalLink,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const contactEmail = "bangashfahad98@gmail.com";

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

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin
    },
    {
      name: "Fiverr",
      url: "https://fiverr.com",
      icon: ExternalLink
    },
    {
      name: "Upwork",
      url: "https://upwork.com",
      icon: ExternalLink
    }
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Mail className="mr-2 text-primary" /> Contact Information
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm currently available for freelance work and full-time positions. 
                  If you have a project that needs data expertise, let's talk about how I can help you.
                </p>
                
                <div className="pt-4">
                  <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
                  <a 
                    href={`mailto:${contactEmail}`}
                    className="text-primary hover:underline"
                  >
                    {contactEmail}
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">New York, USA</p>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">Connect with me</p>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="resize-none"
                />
              </div>
              
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
