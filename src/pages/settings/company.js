import React, { useRef, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Editor } from '@tinymce/tinymce-react';
import { leaveTypes } from '../../utils/helpers';

const animatedComponents = makeAnimated();

function Company() {
  const [to, setTo] = useState('');
  const [cc, setCc] = useState('');
  const [bcc, setBcc] = useState('');
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
  const [leaveApplication, setLeaveApplication] = useState('');
  const [ccStatus, setCcStatus] = useState(false);
  const [bccStatus, setBccStatus] = useState(false);

  const toOptions = [
    { value: '1', label: 'hr@gmail.com' },
    { value: '2', label: 'admin@gmail.com' },
    { value: '3', label: 'ie@gmail.com' }
  ];
  const handleCcAndBcc = (name)=>{
    if (name === 'cc') {
      ccStatus(cc ? false : true);
    } else {
      bccStatus(bcc ? false : true);
    }
  }
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
            <h1 className="h3 d-inline align-middle">Company List </h1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div class="pb-3 row">
                    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">From</label>
                    <div class="col-sm-10">
                      <input type="text" className="form-control" placeholder="Input" defaultValue={'mizanur090148@gmail.com'} />
                    </div>
                  </div>
                  <div class="pb-3 row">
                    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">To</label>
                    <div class="col-sm-10">
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        defaultValue={[toOptions[0]]}
                        isMulti
                        options={toOptions}
                        onChange={(e)=>setTo(e.target.value)}
                      />
                      <div style={{ position: "absolute",right: "96px",top: "76px" }}>
                        <span className="cc" style={{ paddingRight: "10px"}} onClick={()=>handleCcAndBcc('cc')}>Cc</span>
                        <span className="bcc" onClick={()=>handleCcAndBcc('Bcc')}>Bcc</span>
                      </div>
                    </div>
                  </div>
                  { cc && 
                    <div class="pb-3 row">
                      <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Cc</label>
                      <div class="col-sm-10">
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue={[toOptions[0]]}
                          isMulti
                          options={toOptions}
                          onChange={(e)=>setCc(e.target.value)}
                        />
                      </div>
                    </div>
                  }
                  { bcc && 
                    <div class="pb-3 row">
                      <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Bcc</label>
                      <div class="col-sm-10">
                        <Select
                          closeMenuOnSelect={false}
                          components={animatedComponents}
                          defaultValue={[toOptions[0]]}
                          isMulti
                          options={toOptions}
                          onChange={(e)=>setBcc(e.target.value)}
                        />
                      </div>
                    </div>
                  }
                  <div class="pb-3 row">
                    <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Leave Type</label>
                    <div class="col-sm-10">
                      <select className="form-control" onChange={(e)=>setLeaveType(e.target.value)}>
                        <option selected>Select leave type</option>
                        {leaveTypes.map((data, key) => {
                          return <option key={key} value={data.id}>{data.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="pb-3 row">
                    <div className="col-sm-12">
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue={initialValue}
                        onChange={(e)=>setLeaveApplication(e.target.value)}
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
            </div>
          </div>
        </div>
    </main>
  )
} export default Company;