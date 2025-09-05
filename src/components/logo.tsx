// src/components/logo.tsx
import Image from "next/image";
import logo from "@/assets/logo.png"
export function Logo() {
  return (
    <Image
      src={logo}
      alt="TruFarms Logo"
      width={192}
      height={192}
      priority
      className="h-48 w-auto"
    />
  );
}
