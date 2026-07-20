"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLinks = [
  { name: "Login", href: "/login", label: "Login" },
  { name: "Register", href: "/register", label: "Register" },
  {
    name: "Forgot Password",
    href: "/forgot-password",
    label: "Forgot Password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input , setInput] = useState("");
  const pathname = usePathname();

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type something..." />
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href + "/") && link.href !== "/");

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? "font-bold mr-4" : "text-gray-500 mr-4"}
          >
            {link.label}
          </Link>
        );
      })}

      {children}
    </div>
  );
}