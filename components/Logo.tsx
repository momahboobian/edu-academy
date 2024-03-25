import Image from "next/image";

interface LogoProps {
  size: number;
  color: string;
  invert?: string;
}

export default function Logo({ size, color, invert = "1" }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="logo"
      width={size}
      height={size}
      color={color}
      style={{
        filter: `brightness(0) invert(${invert}) sepia(1) saturate(5) hue-rotate(175deg)`,
      }}
    />
  );
}
