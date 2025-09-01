import Image from "next/image";
import Pic from "@/assets/kj.jpg"; // ✅ resolves to src/assets/landing.png

export function Kjphoto() {
  return (
    <Image
      src={Pic}
      alt="photo of kj"
      fill
      className="object-cover"
    />
  );
}