import React, { useState } from "react";
import { ChatbotButton } from "./ChatbotButton";
import { ChatbotDialog } from "./ChatbotDialog";
import { AnimatePresence, motion } from "framer-motion";

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
      <ChatbotButton onClick={() => setOpen(true)} />

      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbot"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 z-50 w-[90%] max-w-sm sm:max-w-md"
          >
            <ChatbotDialog
              open={open}
              onOpenChange={handleOpenChange}
              contactEmail={contactEmail}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
