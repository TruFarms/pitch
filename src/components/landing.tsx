// src/components/landing.tsx
import Image from "next/image";
import logo from "@/assets/landscapepdland.png"; // ✅ resolves to src/assets/landing.png

export function Landing() {
  return (
    <Image
      src={logo}
      alt="Cannabis extraction products"
      fill
      className="object-cover"
    />
  );
}