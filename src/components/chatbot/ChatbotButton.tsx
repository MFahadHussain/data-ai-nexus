import React from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatbotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const ChatbotButton: React.FC<ChatbotButtonProps> = ({ onClick, isOpen }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={onClick}
            variant="outline"
            size="icon"
            aria-label="Toggle chatbot"
            className="fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white z-50 transition-transform duration-200 hover:scale-110"
          >
            {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" sideOffset={8}>
          <p>{isOpen ? "Close assistant" : "Chat with assistant"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
