import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "default" | "onDark";
  priority?: boolean;
};

export function Logo({
  className,
  variant = "default",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/assets/logo/sedana-logo.png"
      alt="Sedana Trading"
      width={180}
      height={64}
      priority={priority}
      className={cn(
        "h-9 w-auto object-contain object-left md:h-10",
        // Logo asset ships on black; multiply clears the plate on light UI
        variant === "default" && "mix-blend-multiply",
        variant === "onDark" && "brightness-0 invert",
        className,
      )}
    />
  );
}
