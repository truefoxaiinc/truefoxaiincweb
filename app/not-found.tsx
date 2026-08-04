import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
export default function NotFound() {
  return <main className="not-found"><div><span>404 / ROUTE NOT FOUND</span><h1>This path moved beyond imagination.</h1><p>Return to the Truefox AI homepage or open the contact page.</p><div><Link href="/" className="button button-primary">Go home<ArrowUpRight /></Link><Link href="/contact" className="button button-ghost">Contact us<ArrowUpRight /></Link></div></div></main>;
}
