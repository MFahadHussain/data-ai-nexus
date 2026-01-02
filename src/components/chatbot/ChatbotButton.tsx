import React from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
          <motion.button
            onClick={onClick}
            aria-label={isOpen ? "Close assistant" : "Chat with assistant"}
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full z-50 flex items-center justify-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={false}
            animate={{
              boxShadow: isOpen
                ? "0 10px 40px rgba(0, 0, 0, 0.2)"
                : "0 8px 32px rgba(59, 130, 246, 0.4)",
            }}
          >
            {/* Glassmorphism background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 backdrop-blur-xl border border-white/20 shadow-2xl" />
            
            {/* Animated pulse ring */}
            {!isOpen && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400/50"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
            
            {/* Icon */}
            <motion.div
              className="relative z-10 text-white"
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={false}
              animate={{
                background: [
                  "radial-gradient(circle, transparent 0%, transparent 100%)",
                  "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, transparent 0%, transparent 100%)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.button>
        </TooltipTrigger>
        <TooltipContent 
          side="left" 
          sideOffset={12}
          className="bg-gray-900/95 backdrop-blur-md text-white border-gray-700 shadow-xl"
        >
          <p className="font-medium">{isOpen ? "Close assistant" : "Chat with AI assistant"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
