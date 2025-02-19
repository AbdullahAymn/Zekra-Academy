import Contact from "./components/Contact";
import Feauters from "./components/Feauters";
import Main from "./components/Main";
import Packages from "./components/Packages";
import Rates from "./components/Rates";
import Ser from "./components/Ser";
import Who from "./components/Who";

export default function Home() {
  return (
    <div>
      <Main />
      <Who />
      <Ser />
      <Feauters />
      <Packages />
      <Rates />
      <Contact />
    </div>
  );
}
