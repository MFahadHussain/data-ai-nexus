
import React, { useState } from "react";
import { ChatbotButton } from "./ChatbotButton";
import { ChatbotDialog } from "./ChatbotDialog";

interface ChatbotProps {
  contactEmail: string;
}

export const Chatbot: React.FC<ChatbotProps> = ({ contactEmail }) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <ChatbotButton onClick={() => setOpen(true)} />
      <ChatbotDialog
        open={open}
        onOpenChange={handleOpenChange}
        contactEmail={contactEmail}
      />
    </>
  );
};
