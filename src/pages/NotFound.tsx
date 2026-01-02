
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 errors in development only
    if (import.meta.env.DEV) {
      console.warn(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto my-6"></div>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="bg-primary hover:bg-primary/90" size="lg" asChild>
          <a href="/">
            <Home className="mr-2 h-5 w-5" /> Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
