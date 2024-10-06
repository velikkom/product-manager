import { Roboto, Montserrat } from "next/font/google";

//const roboto = Roboto(); diyede font eklenebilir
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto", //css lerde kullanmak için tanımlayaçağım
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});
