// src/components/logo.tsx
import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="TruFarms Logo"
      width={192}
      height={192}
      priority
      className="h-40 w-auto"
    />
  );
}
