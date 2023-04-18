import { PersonnageProvider } from "@/context/personnage";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PersonnageProvider>
      <Component {...pageProps} />
    </PersonnageProvider>
  );
}
