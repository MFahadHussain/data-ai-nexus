
import React from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatbotButtonProps {
  onClick: () => void;
}

export const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white z-50"
      aria-label="Open chat assistant"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};
