import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27603944375?text=Hello%20Dr%20Oduntan%2C%20I%20would%20like%20to%20make%20an%20appointment."
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={25} />
    </a>
  );
}

export default WhatsAppButton;