import React from 'react';
import { motion } from 'motion/react';
import { CheckCheck } from 'lucide-react';
import amaraLogo from '@/assets/images/apps/amara-logo.png';

type ChatMessage = {
  id: string;
  from: 'user' | 'amara';
  text: string;
  time: string;
};

// Conversación de ejemplo: los montos son ficticios.
const messages: ChatMessage[] = [
  { id: 'm1', from: 'user', text: 'Gasté 45.000 en mercado', time: '9:12' },
  { id: 'm2', from: 'amara', text: 'Listo, registré $45.000 en Mercado.', time: '9:12' },
  { id: 'm3', from: 'user', text: 'Me pagaron 800.000 del proyecto', time: '9:30' },
  { id: 'm4', from: 'amara', text: 'Anotado: ingreso de $800.000.', time: '9:30' },
];

export const HeroChatDemo: React.FC = () => {
  return (
    <figure className="mx-auto w-full max-w-sm">
      <div className="rounded-3xl border border-[#E2E5EA] bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.25)] overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#E2E5EA]">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E2E5EA] bg-[#F7F8FA] shrink-0">
            <img src={amaraLogo} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text-left flex-1">
            <div className="text-sm font-semibold text-[#0F172A]">AMARA</div>
            <div className="text-xs text-[#5B6472]">Asistente de finanzas por WhatsApp</div>
          </div>
          <span className="rounded-full bg-[#35507A]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#35507A]">
            Próximamente
          </span>
        </div>

        {/* Chat Messages */}
        <div className="bg-[#EFEAE2] px-4 py-5 space-y-3">
          {messages.map((message, index) => {
            const isUser = message.from === 'user';
            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.5, ease: 'easeOut' }}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-left shadow-sm ${
                    isUser ? 'bg-[#D9FDD3] rounded-tr-sm' : 'bg-white rounded-tl-sm'
                  }`}
                >
                  <p className="text-sm text-[#0F172A] leading-snug">{message.text}</p>
                  <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#5B6472]">
                    <span>{message.time}</span>
                    {isUser && <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" aria-hidden="true" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <figcaption className="mt-4 text-center text-sm text-[#5B6472]">
        Próximamente, en la versión paga de AMARA: un asistente por WhatsApp para registrar tus cuentas con un mensaje.
      </figcaption>
    </figure>
  );
};
