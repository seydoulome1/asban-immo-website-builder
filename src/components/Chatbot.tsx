
import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Bonjour ! Je suis l'assistant ASBAN IMMO. Comment puis-je vous aider ?", isUser: false },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { text: inputMessage, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Simuler une réponse du chatbot (à remplacer par une véritable IA)
    setTimeout(() => {
      const botResponse = {
        text: "Je vous remercie pour votre message. Un de nos agents va vous contacter rapidement. En attendant, vous pouvez consulter nos annonces ou nous contacter directement sur WhatsApp.",
        isUser: false,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl w-80 max-h-[500px] flex flex-col">
          <div className="bg-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Assistant ASBAN IMMO</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-80">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Écrivez votre message..."
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="bg-primary text-white p-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
