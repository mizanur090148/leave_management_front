import React, { useRef, useState } from "react";
import Select from "react-select";

import moment from "moment";
import { useForm } from "react-hook-form";
import { postRequest } from "../../utils/axiosRequests";
import UttoradhikarSonod from "../../components/partials/UttoradhikarSonod";
import TradeLicence from "../../components/partials/TradeLicence";

function Form() {
  const [certificateNo, setCertificateNo] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [description, setDescription] = useState("");
  const [relatives, setRelatives] = useState([{ name: "", relationship: "" }]);
  const [type, setType] = useState("");
  const [types, setTypes] = useState([
    { id: 1, name: "উত্তরাধিকার সনদ" },
    { id: 2, name: "ট্রেড লাইসেন্স " },
  ]);

  const handleRelatives = (filedName, key, val) => {
    relatives[key][filedName] = val;
  };

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    postRequest("auth/login", data)
      .then((data) => {
        //navigate("/leave-application");
      })
      .catch((error) => {
        //setAuthError(error.message);
        console.log("from react query error: ", error.message);
      });
  };

  let defaultData = "";
  if (type === "2") {
    defaultData = `<p>Date:&nbsp; ../../....</p>
    <p>To<br>HR Manager,<br>iHealthScreen</p>
    <p><strong>Subject: Application for sick leave due to fever</strong></p>
    <p>Sir,</p>
    <p>It is stated with the respect that my presence in office for tomorrow won&rsquo;t be possible. The reason is, I am feeling sick for many days and tomorrow I have to visit a friend of mine which is a doctor. I need to collect some reports as well about the tests which I&rsquo;ve conducted last week. I hope my absence will not affect the tasks. I request you to please grant me leave for a day.</p>
    <p>I shall be obliged for your approval.</p>
    <p>Sincerely,<br>Name<br>Designation<br>Date</p>
    <p>&nbsp;</p>`;

    //setDescription(defaultData);
  }

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <div className="mb-3">
          <h1 className="h3 d-inline align-middle">Leave Application</h1>
        </div>
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="pb-3 row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    টাইপ: {type}
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-control"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option selected>Select leave type</option>
                      {types.map((data, key) => {
                        return (
                          <option key={key} value={data.id}>
                            {data.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>

                {type === 1 && (
                  <UttoradhikarSonod
                    certificateNo={certificateNo}
                    setCertificateNo={setCertificateNo}
                    issueDate={issueDate}
                    setIssueDate={setIssueDate}
                    description={description}
                    setDescription={setDescription}
                    relatives={relatives}
                    setRelatives={setRelatives}
                    handleRelatives={handleRelatives}
                  />
                )}
                {type === 2 && (
                  <TradeLicence
                    certificateNo={certificateNo}
                    setCertificateNo={setCertificateNo}
                    issueDate={issueDate}
                    setIssueDate={setIssueDate}
                    description={description}
                    setDescription={setDescription}
                    relatives={relatives}
                    setRelatives={setRelatives}
                    handleRelatives={handleRelatives}
                  />
                )}

                <div className="row mt-4">
                  <div className="col-sm-12 text-center">
                    <button
                      className="btn btn-primary"
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit
                    </button>
                    <button
                      style={{ marginLeft: "12px" }}
                      className="btn btn-danger"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Form;
