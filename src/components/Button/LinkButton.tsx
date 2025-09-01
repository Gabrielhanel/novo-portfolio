import React from "react";
import styles from "./linkButton.module.css";

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self"; // abre em nova aba ou na mesma
  styleButton: "Github" | "Figma";
  rel: "noopener noreferrer";
};

export const LinkButton = ({ children, href, target = "_blank", styleButton }: LinkButtonProps) => {
  return (
    <a href={href} target={target} rel="noopener noreferrer" className={styles[styleButton]} >
      {children}
    </a>
  );
};