
import Header from "../components/partials/header";
import Sidebar from "../components/partials/sidebar";
import Footer from "../components/partials/footer";

const AdminLayout = ({ children }) => {
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

export default AdminLayout;
