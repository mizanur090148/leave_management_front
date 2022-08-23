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
                    <div class="col-sm-10" style={{ position: "absolute"}}>
                      <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue={[toOptions[0]]}
                          isMulti
                          options={toOptions}
                      />
                      <div style={{ position: "absolute",right: "89px",top: "8px" }}>
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
                        height: 500,
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
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Textarea</h5>
                </div>
                <div className="card-body">
                  <textarea className="form-control" rows="2" placeholder="Textarea"></textarea>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Checkboxes</h5>
                </div>
                <div className="card-body">
                  <div>
                    <label className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                      <span className="form-check-label"> Option one is this and that&mdash;be sure to include why it's great </span>
                    </label>
                    <label className="form-check">
                      <input className="form-check-input" type="checkbox" value="" disabled />
                      <span className="form-check-label"> Option two is disabled </span>
                    </label>
                  </div>
                  <div>
                    <label className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value="option1" />
                      <span className="form-check-label"> 1 </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value="option2" />
                      <span className="form-check-label"> 2 </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" value="option3" disabled />
                      <span className="form-check-label"> 3 </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Read only</h5>
                </div>
                <div className="card-body">
                  <input className="form-control" type="text" placeholder="Readonly input" readOnly />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Radios</h5>
                </div>
                <div className="card-body">
                  <div>
                    <label className="form-check">
                      <input className="form-check-input" type="radio" value="option1" name="radios-example" checked />
                      <span className="form-check-label"> Option one is this and that&mdash;be sure to include why it's great </span>
                    </label>
                    <label className="form-check">
                      <input className="form-check-input" type="radio" value="option2" name="radios-example" />
                      <span className="form-check-label"> Option two can be something else and selecting it will deselect option one </span>
                    </label>
                    <label className="form-check">
                      <input className="form-check-input" type="radio" value="option3" name="radios-example" disabled />
                      <span className="form-check-label"> Option three is disabled </span>
                    </label>
                  </div>
                  <div>
                    <label className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inline-radios-example" value="option1" />
                      <span className="form-check-label"> 1 </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inline-radios-example" value="option2" />
                      <span className="form-check-label"> 2 </span>
                    </label>
                    <label className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inline-radios-example" value="option3" disabled />
                      <span className="form-check-label"> 3 </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Selects</h5>
                </div>
                <div className="card-body">
                  <select className="form-select mb-3">
                    <option selected>Open this select menu</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                  <select multiple className="form-control">
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option>
                  </select>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Disabled</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Disabled input</label>
                    <input type="text" className="form-control" placeholder="Disabled input" disabled />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Disabled select menu</label>
                    <select className="form-control" disabled>
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <label className="form-check">
                    <input className="form-check-input" type="checkbox" value="" disabled />
                    <span className="form-check-label"> Can't check this </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
} export default LeaveApplication;