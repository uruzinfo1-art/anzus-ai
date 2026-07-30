import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573207283295?text=Hola%20Ansuz%20Studio.%20Vi%20su%20sitio%20web%20y%20quiero%20información."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        group
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          rounded-full
          bg-[#25D366]
          px-5
          py-4
          shadow-2xl
          hover:shadow-[0_0_35px_rgba(37,211,102,.55)]
          transition-all
          duration-300
          animate-bounce
          hover:scale-105
        "
      >
        <FaWhatsapp className="text-white text-3xl shrink-0" />

        <span
          className="
            hidden
            md:block
            max-w-0
            overflow-hidden
            whitespace-nowrap
            text-white
            font-semibold
            group-hover:max-w-xs
            transition-all
            duration-300
          "
        >
          Hablemos por WhatsApp
        </span>
      </div>
    </a>
  );
}