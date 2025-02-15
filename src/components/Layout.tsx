
import Navigation from "./Navigation";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      {children}
      <Chatbot />
      <Footer />
    </div>
  );
};

export default Layout;
