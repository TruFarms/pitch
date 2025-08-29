// src/components/logo.tsx
import Image from "next/image";
import logo from "@/assets/logo.png"; // ✅ resolves to src/assets/logo.png

export function Logo() {
  return (
    <Image
      src={logo}
      alt="TruFarms Logo"
      priority
      className="h-36 w-auto"
    />
  );
}
