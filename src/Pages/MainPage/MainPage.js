
import Introduce from "../../components/Section/Introduce/Introduce";
import About from "../../components/Section/About/About";
import Jobs from "../../components/Section/Jobs/Jobs";
import Skills from "../../components/Section/Skills/Skills";
import Contacts from "../../components/Section/Contacts/Contacts";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const MainPage = () => {
  return (
    <div>
      <Introduce />
      <About />
      <Skills />
      <Jobs />
      <Contacts />
      <ModalWindow />
    </div>
  );
};
export default MainPage;
