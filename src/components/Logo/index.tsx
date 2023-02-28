import { LogoProps } from "@/@types";
import Image from "next/image";

export default function Logo({ img, altura, largura }: LogoProps) {
  return (
    <Image
      src={img}
      alt={"Logo"}
      width={largura}
      height={altura}
      loading={"lazy"}
    />
  );
}
