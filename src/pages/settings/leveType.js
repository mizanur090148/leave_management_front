import React, { useEffect, useState } from 'react';
import Search from '../../components/partials/Search';
import { getRequest } from '../../utils/axiosRequests';

function LeaveType() {
  const [leaveTypes, setLeaveTypes] = useState([]);

  useEffect(() => {
    console.log(999)
    getLeaveTypes();
  }, []);

  const getLeaveTypes = () => {
    getRequest(`leave-types`)
      .then((data) => {
        setLeaveTypes(data);
      })
      .catch(error=>{
        console.log(error);
      }
    );
  }

  return (
    <main className="content">
      <div className="container-fluid p-0">
          <div className="mb-3">
            <h1 className="h3 d-inline align-middle">Leave Types </h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12 col-xxl-12">
              <div className="card flex-fill">
                <div className="card-header custom-flex">
                  <h5 className="card-title mb-0">List</h5>
                  <Search
                  />
                </div>
                <div className="card-body">
                <table className="table table-hover my-0">
                  <thead>
                    <tr>
                      <th>#SL</th>
                      <th>Name</th>
                      <th className="d-none d-md-table-cell">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {leaveTypes.length && leaveTypes.map((leave, index)=>
                    <tr key={index}>
                      <td>{++index}</td>
                      <td>{leave.name}</td>
                      <td className="d-none d-xl-table-cell">01/01/2021</td>
                      <td className="d-none d-xl-table-cell">31/06/2021</td>
                    </tr>
                  )} 
                  </tbody>
                </table>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
} export default LeaveType;