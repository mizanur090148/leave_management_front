const AuthLayout = ({ children }) => {
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
