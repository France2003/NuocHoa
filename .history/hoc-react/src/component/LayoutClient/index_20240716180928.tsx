import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutClient = () => {
  return (

    <div className="mx-auto">
      <div className="">
        <Header />
      </div>
      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default LayoutClient;
