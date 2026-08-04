"use client";

import Link from "next/link";
import { WhatsAppIcon } from "@/components/Icons";

export default function WhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "";
  const text = encodeURIComponent("Hello Truefox AI, I would like to discuss an AI project.");
  if (!number) {
    return <Link className="whatsapp-float" href="/contact" aria-label="Contact Truefox AI; add the official WhatsApp number in environment settings"><WhatsAppIcon /><span>WhatsApp</span></Link>;
  }
  return <a className="whatsapp-float" href={`https://wa.me/${number}?text=${text}`} target="_blank" rel="noreferrer" aria-label="Chat with Truefox AI on WhatsApp"><WhatsAppIcon /><span>WhatsApp</span></a>;
}
