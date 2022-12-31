import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const UttoradhikarSonod = ({
  certificateNo,
  setCertificateNo,
  issueDate,
  setIssueDate,
  description,
  setDescription,
  relatives,
  setRelatives,
  handleRelatives,
}) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleRow = (action, key) => {
    if (action === "add") {
      setRelatives([...relatives, { name: "", relationship: "" }]);
    } else {
      setRelatives(relatives.filter((item, index) => index !== key));
    }
  };

  const relationRows =
    relatives.length &&
    relatives.map((data, key) => {
      return (
        <tr key={key}>
          <td>{++key}</td>
          <td>
            <input
              type="text"
              className="form-control"
              defaultValue={data.name}
              onChange={(e) => handleRelatives("name", key, e.target.value)}
            />
          </td>
          <td>
            <input
              type="text"
              className="form-control"
              defaultValue={data.relationship}
              onChange={(e) =>
                handleRelatives("relationship", key, e.target.value)
              }
            />
          </td>
          <td className="certificate-action">
            <i
              className="fa-solid fa-circle-plus custom-design"
              onClick={() => handleRow("add")}
            ></i>
            {relatives.length > 1 && (
              <i
                className="fa-solid fa-circle-xmark custom-design text-danger"
                style={{ paddingLeft: "6px" }}
                onClick={() => handleRow("delete", key)}
              ></i>
            )}
          </td>
        </tr>
      );
    });

  return (
    <>
      <div className="pb-3 row">
        <label htmlFor="issue-date" className="col-sm-2 col-form-label">
          সনদ নং:
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            defaultValue={certificateNo}
            onChange={(e) => setCertificateNo(e.target.value)}
          />
        </div>
      </div>
      <div className="pb-3 row">
        <label htmlFor="issue-date" className="col-sm-2 col-form-label">
          ইস্যু তারিখ:
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            className="form-control"
            defaultValue={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row pb-3">
        <div className="col-sm-12">
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={description}
            onChange={(e) => setDescription(e.target.value)}
            init={{
              height: 200,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
      </div>
      <table className="table table-hover my-0">
        <thead>
          <tr>
            <th>ক্রমিক নং</th>
            <th>নাম</th>
            <th>সম্পর্ক</th>
            <th className="d-none d-md-table-cell">Action</th>
          </tr>
        </thead>
        <tbody>{relationRows}</tbody>
      </table>
    </>
  );
};

export default UttoradhikarSonod;
