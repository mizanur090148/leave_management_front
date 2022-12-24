
import Header from "../components/partials/header";
import Sidebar from "../components/partials/sidebar";
import Footer from "../components/partials/footer";

const AdminLayout = ({ children }) => {
  return (
      <div className="wrapper">
        <Sidebar/>

        <div className="main">
          <Header />

          {children}

          <Footer />

        </div>
      </div>
  );
};

export default AdminLayout;
