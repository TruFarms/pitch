import Image from "next/image";

export function Kjphoto({ src, alt }: { src: any; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
    />
  );
}
