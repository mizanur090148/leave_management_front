import React, { useRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Editor } from '@tinymce/tinymce-react';

const animatedComponents = makeAnimated();

function LeaveApplication() {
  const [leaveTypes, setLeaveTypes] = useState([
    {id:1, name: 'Casual'},
    {id:2, name: 'Sick'},
    {id:3, name: 'Annual'},
    {id:4, name: 'Maternity'},
    {id:5, name: 'Paternity'},
    {id:6, name: 'Religious'},
    {id:7, name: 'Unpaid'},
  ]);
  const [leaveType, setLeaveType] = useState('');

  const toOptions = [
    { value: '1', label: 'hr@gmail.com' },
    { value: '2', label: 'admin@gmail.com' },
    { value: '3', label: 'ie@gmail.com' }
  ];
  let initialValue = '';
  if (leaveType === '2') {
    initialValue = `<p>Date:&nbsp; ../../....</p>
    <p>To<br>HR Manager,<br>iHealthScreen</p>
    <p><strong>Subject: Application for sick leave due to fever</strong></p>
    <p>Sir,</p>
    <p>It is stated with the respect that my presence in office for tomorrow won&rsquo;t be possible. The reason is, I am feeling sick for many days and tomorrow I have to visit a friend of mine which is a doctor. I need to collect some reports as well about the tests which I&rsquo;ve conducted last week. I hope my absence will not affect the tasks. I request you to please grant me leave for a day.</p>
    <p>I shall be obliged for your approval.</p>
    <p>Sincerely,<br>Name<br>Designation<br>Date</p>
    <p>&nbsp;</p>`;
  } else {
    initialValue = '';
  }

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
                      <select className="form-control" onChange={(e)=>setLeaveType(e.target.value)}>
                        <option selected>Select leave type</option>
                        {leaveTypes.map((data, key) => {
                          return <option key={key} value={data.id}>{data.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      initialValue={initialValue}
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
                    <button onClick={log}>Log editor content</button>
                  </div>
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