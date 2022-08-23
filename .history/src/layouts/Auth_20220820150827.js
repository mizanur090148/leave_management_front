
import Header from "../components/partials/header";
import Sidebar from "../components/partials/sidebar";
import Footer from "../components/partials/footer";

const AuthLayout = ({ children }) => {
  return (
      <div className="wrapper">
        <Sidebar/>

        <div className="main">
          <Header></Header>

          {children}

          <Footer></Footer>

        </div>
      </div>
  );
};

export default AuthLayout;
