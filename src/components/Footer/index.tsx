import { Inter } from "@next/font/google";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"], weight: "600" });
export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <span style={inter.style}>Desenvolvido por Ioup Tecnologia</span>
    </footer>
  );
}
