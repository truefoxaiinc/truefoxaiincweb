"use client";

import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "919074897768";
  const text = encodeURIComponent("Hi Truefox AI, I have a general enquiry and would like to connect.");
  return <a className="whatsapp-float" href={`https://wa.me/${number}?text=${text}`} target="_blank" rel="noreferrer" aria-label="Chat with Truefox AI on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>;
}
