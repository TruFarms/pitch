import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="TruFarms Logo"
        width={200}
        height={56}
        priority
      />
    </div>
  );
}
