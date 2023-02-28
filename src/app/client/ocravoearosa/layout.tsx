import Footer from "@/components/Footer";
import style from "./style.module.css";
export default function BioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
      <head />
      <body id={style.bdCravo}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
