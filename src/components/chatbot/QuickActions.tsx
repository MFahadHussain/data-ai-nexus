import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, Code, Mail } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  query: string;
}

const quickActions: QuickAction[] = [
  { id: "services", label: "Services", icon: Sparkles, query: "What services do you offer?" },
  { id: "experience", label: "Experience", icon: Briefcase, query: "Tell me about your experience" },
  { id: "projects", label: "Projects", icon: Code, query: "Show me your projects" },
  { id: "contact", label: "Contact", icon: Mail, query: "How can I contact you?" },
];

interface QuickActionsProps {
  onSelect: (query: string) => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 px-1 pb-2">
      {quickActions.map((action, index) => {
        const Icon = action.icon;
        return (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(action.query)}
            className="flex items-center gap-2 px-3 py-2 rounded-full text-xs sm:text-sm font-medium
                       bg-white/60 dark:bg-gray-800/60 backdrop-blur-md
                       border border-gray-200/50 dark:border-gray-700/50
                       text-gray-700 dark:text-gray-300
                       hover:bg-white/80 dark:hover:bg-gray-800/80
                       hover:border-blue-300 dark:hover:border-blue-600
                       hover:text-blue-600 dark:hover:text-blue-400
                       transition-all duration-200
                       shadow-sm hover:shadow-md"
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{action.label}</span>
          </motion.button>
        );
      })}
    </div>
  );
};

