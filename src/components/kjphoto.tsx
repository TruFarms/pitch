import Image from "next/image";
import Pic1 from "@/assets/kj.jpg"; // ✅ resolves to src/assets/landing.png
import Pic2 from "@/assets/alex.jpg"
import Pic3 from "@/assets/tyson.jpg"
export function Kjphoto(num: any) {

  switch (num) {
    case 1:
      return <Image
      src={Pic1}
      alt="photo of kj"
      fill
      className="object-cover"
    />;
    case 2:
      return <Image
      src={Pic2}
      alt="photo of kj"
      fill
      className="object-cover"
    />;
    case 3:
      return <Image
      src={Pic3}
      alt="photo of kj"
      fill
      className="object-cover"
    />;
  }
}
