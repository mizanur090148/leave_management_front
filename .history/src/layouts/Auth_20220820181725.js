
import Header from "../components/partials/header";
import Sidebar from "../components/partials/sidebar";
import Footer from "../components/partials/footer";

const AuthLayout = ({ children }) => {
  return (
    <main class="d-flex w-100">
      <div class="container d-flex flex-column">
        <div class="row vh-100">
          <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
