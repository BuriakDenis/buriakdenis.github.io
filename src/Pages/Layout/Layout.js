import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
