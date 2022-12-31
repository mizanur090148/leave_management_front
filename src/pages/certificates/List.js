import { faList12 } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/partials/Search";
import { getRequest } from "../../utils/axiosRequests";

function List() {
  const [searchKey, setSearchKey] = useState("");
  const [leaveTypes, setLeaveTypes] = useState([]);

  // useEffect(() => {
  //   getLeaveTypes();
  // }, []);

  useEffect(() => {
    getLeaveTypes();
  }, [searchKey]);

  const getLeaveTypes = () => {
    getRequest(`leave-types?name=${searchKey}`)
      .then((data) => {
        setLeaveTypes(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="mb-3">
          <h1 className="h3 d-inline align-middle">Certificates </h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12 col-xxl-12">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="custom-flex">
                  <h5 className="card-title mb-0">
                    <Link to="/certificate/create" class="btn btn-primary">
                      Add New
                    </Link>
                  </h5>
                  <Search setSearchKey={setSearchKey} />
                </div>
                <table className="table table-hover my-0">
                  <thead>
                    <tr>
                      <th>#SL</th>
                      <th>Name</th>
                      <th className="d-none d-md-table-cell">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveTypes.length &&
                      leaveTypes.map((leave, index) => (
                        <tr key={index}>
                          <td>{++index}</td>
                          <td>{leave.name}</td>
                          <td className="d-none d-xl-table-cell">
                            <div class="mb-2">
                              <i
                                class="align-middle me-2"
                                data-feather="trash-2"
                              ></i>
                            </div>
                          </td>
                          <td className="d-none d-xl-table-cell">31/06/2021</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default List;
