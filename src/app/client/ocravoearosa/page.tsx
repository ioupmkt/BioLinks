import { BtnLink } from "@/components/BtnLink";
import Logo from "@/components/Logo";
import Title from "@/components/Title";

import styles from "./style.module.css";

export default function Biolink() {
  return (
    <main className={styles.Main}>
      <Logo altura={116} largura={351} img="/ocravoearosa/Logo.png" />

      <Title title="O Cravo e a Rosa Fashion Kids" />

      <BtnLink text="Loja Virtual" href="https://www.lojaocravoearosa.com.br" />
      <BtnLink
        text="Whatsapp"
        href="https://api.whatsapp.com/send?phone=5514997671800"
      />
      <BtnLink
        text="Facebook"
        href="https://www.facebook.com/ocravoearosafashionkids"
      />
    </main>
  );
}
