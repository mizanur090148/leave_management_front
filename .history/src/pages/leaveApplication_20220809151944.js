import React, { useRef } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Editor } from '@tinymce/tinymce-react';

const animatedComponents = makeAnimated();

function LeaveApplication() {
  const toOptions = [
    { value: '1', label: 'hr@gmail.com' },
    { value: '2', label: 'admin@gmail.com' },
    { value: '3', label: 'ie@gmail.com' }
  ];
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

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
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">From</label>
                  <div class="col-sm-10">
                    <input type="text" className="form-control" placeholder="Input" defaultValue={'mizanur090148@gmail.com'} />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">To</label>
                  <div class="col-sm-10">
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[toOptions[0]]}
                        isMulti
                        options={toOptions}
                    />
                    <div style={{ position: "absolute",right: "96px",top: "76px" }}>
                      <span style={{ paddingRight: "10px"}}>Cc</span>
                      <span>Bcc</span>
                    </div>
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Leave Type</label>
                  <div class="col-sm-10">
                    <select className="form-control">
                      <option selected>Select leave type</option>
                      <option>Casual</option>
                      <option>Sick</option>
                      <option>annual</option>
                      <option>maternity</option>
                      <option>paternity</option>
                      <option>unpaid</option>
                      <option>Religious</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 400,
                      menubar: false,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar: 'undo redo | formatselect | ' +
                      'bold italic backcolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                  />
                  {/* <button onClick={log}>Log editor content</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} export default LeaveApplication;