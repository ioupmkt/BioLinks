import { Inter } from "@next/font/google";
import { TitleProps } from "src/@types";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"], weight: "700" });

export default function Title({ title }: TitleProps) {
  return (
    <h1 style={inter.style} className={styles.Title}>
      {title}
    </h1>
  );
}
