import { Inter } from "@next/font/google";

import style from "./style.module.css";
import { BtnProps } from "src/@types";

const inter = Inter({ subsets: ["latin"] });

export function BtnLink({ button, href, text }: BtnProps) {
  return (
    <a
      style={inter.style}
      className={style.BtnLink}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}

// switch (button) {
//   case "whatsapp":
//     return <WhatsappButton href={href} text={text} />;

//   case "facebook":
//     return (
//       <a style={montserrat.style} className={style.Facebook} href={href}>
//         {" "}
//         {text}
//       </a>
//     );

//   default:
//     <a style={montserrat.style} className={style.Instagram} href={href}>
//       {text}
//     </a>;
//     break;
// }
