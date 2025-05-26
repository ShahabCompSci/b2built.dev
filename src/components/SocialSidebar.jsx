import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function SocialSidebar() {
  const icon =
    "h-4 w-4 text-white transition hover:text-brand";

  return (
    <aside className="fixed right-4 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center gap-6">
      <a href="https://twitter.com" className={icon} aria-label="Twitter">
        <Twitter />
      </a>
      <a href="https://instagram.com" className={icon} aria-label="Instagram">
        <Instagram />
      </a>
      <a href="https://linkedin.com" className={icon} aria-label="LinkedIn">
        <Linkedin />
      </a>
      <a href="https://youtube.com" className={icon} aria-label="YouTube">
        <Youtube />
      </a>

      {/* thin divider */}
      <span className="block h-16 w-px bg-white/40" />

      {/* optional TikTok, etc. */}
    </aside>
  );
}
