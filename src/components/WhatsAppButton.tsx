import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918825471551";
    const message = encodeURIComponent("Hi! I'm interested in ordering from IBakers.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        !
      </span>
    </button>
  );
};

export default WhatsAppButton;
