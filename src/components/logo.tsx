// src/components/logo.tsx
import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="TruFarms Logo"
      width={144}
      height={144}
      priority
      className="h-36 w-auto"
    />
  );
}
