import { PersonnageProvider } from "@/context/personnage";
import Menu from "../menu/menu";

function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}

export default Layout;
