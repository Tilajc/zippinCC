import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { MyProvider } from "../lib/myContext";

const Layout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <MyProvider>
        <Main />
      </MyProvider>
      <Footer />
    </div>
  );
};

export default Layout;
