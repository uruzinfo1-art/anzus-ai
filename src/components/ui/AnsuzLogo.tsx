import React from "react";
import logoNavbar from "@/assets/images/logo-ansuz-navbar.png";

export type LogoVariant = "full" | "wordmark" | "icon";

interface AnsuzLogoProps {
  variant?: LogoVariant;
  className?: string;
  iconOnlySize?: number | string;
}

export const AnsuzLogo: React.FC<AnsuzLogoProps> = ({
  variant = "wordmark",
  className = "",
  iconOnlySize,
}) => {
  const height =
    variant === "icon"
      ? iconOnlySize || "2rem"
      : variant === "wordmark"
      ? "8rem"
      : "5rem";

  return (
    <img
      src={logoNavbar}
      alt="ANSUZ"
      className={className}
      style={{
  height,
  width: "auto",
  objectFit: "contain",
  display: "block",
}}
    />
  );
};