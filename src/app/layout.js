import { Poppins, Noto_Sans_JP, Crimson_Text} from "next/font/google";
import "./globals.css";
import Haettenschweiler from "next/font/local";

const haetten = Haettenschweiler({
  src: "/font/Haettenschweiler-Regular.ttf",
  display: "swap",
  variable:' --font-Haettenschweiler',
})

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200","300","400","500","600","700","800","900"], 
  variable:' --font-Poppins',
});

const noto = Noto_Sans_JP({ 
  subsets: ["latin"], 
  weight: ["100", "200","300","400","500","600","700","800","900"],
  variable:'--font-Noto_Sans_JP',
});

const crimson = Crimson_Text({ 
  style: ["italic"],
  subsets: ["latin"], 
  weight: ["400","600","700"],
  variable:'--font-Crimson_Text', 
});

export const metadata = {
  title: "Luke Colman • Frontend Developer",
  description: "Developer and Designer in Argentina",
  openGraph: {
    images: 'https://i.pinimg.com/736x/74/0c/ba/740cba360d5925d14acf4e1b2ce5bfa1.jpg',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${noto.variable} ${crimson.variable} ${haetten.variable} bg-lk-grey`}>{children}</body>
    </html>
  );
}
