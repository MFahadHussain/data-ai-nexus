import React, { useState } from "react";
import { ChatbotButton } from "./ChatbotButton";
import { ChatbotDialog } from "./ChatbotDialog";

interface ChatbotProps {
  contactEmail: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ contactEmail }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <>
      <ChatbotButton onClick={() => setOpen(true)} isOpen={open} />
      <ChatbotDialog
        open={open}
        onOpenChange={handleOpenChange}
        contactEmail={contactEmail}
      />
    </>
  );
};
