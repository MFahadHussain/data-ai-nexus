
import React from "react";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";

const Contact = () => {
  const contactEmail = "bangashfahad98@gmail.com";

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
            <ContactInfo contactEmail={contactEmail} />
          </div>
          
          <div className="md:col-span-3">
            <ContactForm contactEmail={contactEmail} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
