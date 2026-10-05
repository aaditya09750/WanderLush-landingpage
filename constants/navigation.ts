export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#journey" },
  { label: "TOUR", href: "#stays" },
  { label: "ABOUT", href: "#blog" },
  { label: "CONTACT", href: "#footer" },
];

export const FOOTER_LINKS = {
  about: [
    { label: "About Us", href: "#home" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "In Press", href: "#" },
    { label: "Gallery", href: "#" },
  ],
  support: [
    { label: "Contact us", href: "#footer" },
    { label: "Online Chat", href: "#" },
    { label: "Whatsapp", href: "https://wa.me/918433509521" },
    { label: "Telegram", href: "#" },
    { label: "Ticketing", href: "#" },
    { label: "Call Center", href: "tel:+918433509521" },
  ],
  faq: [
    { label: "Account", href: "#" },
    { label: "Booking", href: "#" },
    { label: "Payments", href: "#" },
    { label: "Returns", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Condition", href: "#" },
  ],
};
