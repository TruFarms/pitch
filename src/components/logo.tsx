// src/components/logo.tsx
import Image from "next/image";
import logo from "@/assets/logo.png"
export function Logo() {
  return (
    <Image
      src={logo}
      alt="TruFarms Logo"
      width={250}
      height={250}
      priority
      className=""
    />
  );
}
