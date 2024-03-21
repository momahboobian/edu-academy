import Image from "next/image";

interface LogoProps {
  size: number;
  color: string;
  invert: string;
}

export default function Logo({ size, invert }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={size}
      height={size}
      style={{
        filter: `brightness(0) invert(${invert}) sepia(1) saturate(5) hue-rotate(175deg)`,
      }}
    />
  );
}
