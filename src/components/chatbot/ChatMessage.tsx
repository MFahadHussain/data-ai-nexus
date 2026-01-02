import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";

export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
}

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={cn(
        "flex w-full mb-4 gap-3",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {/* Avatar for assistant */}
      {!isUser && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg border-2 border-white/20 dark:border-gray-800/20"
        >
          <Bot className="w-4 h-4 text-white" strokeWidth={2.5} />
        </motion.div>
      )}

      <motion.div
        className={cn(
          "max-w-[75%] sm:max-w-[80%] rounded-2xl px-4 py-3 shadow-sm",
          "backdrop-blur-sm border",
          isUser
            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md border-blue-400/30 shadow-blue-500/20"
            : "bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-100 rounded-bl-md border-gray-200/50 dark:border-gray-700/50 shadow-gray-500/10"
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-[450]">
          {message.content}
        </p>
      </motion.div>

      {/* Avatar for user */}
      {isUser && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center shadow-lg border-2 border-white/20 dark:border-gray-800/20"
        >
          <User className="w-4 h-4 text-white" strokeWidth={2.5} />
        </motion.div>
      )}
    </motion.div>
  );
};


