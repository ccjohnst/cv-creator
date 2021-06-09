import React, { useRef, useState } from "react";
import EducationalExperience from "./components/EducationalExperience";
import GeneralInfo from "./components/GeneralInfo";
import WorkExperience from "./components/WorkExperience";
import {
  DisplayGenInfo,
  DisplayJobs,
  DisplayEducation,
} from "./components/Display";
import uniqid from "uniqid";
import { useReactToPrint } from "react-to-print";
import {
  generalInfoReducer,
  jobsReducer,
  educationReducer,
} from "./components/reducers";
import {
  initialGenInfo,
  initialJobs,
  initialEducation,
  initialAvatar
} from "./components/initialStates";

/*TODO:
- CSS styling
- Sort out autofocus by using useEffect
- Add form validation
- Add avatar functionality
- add header 
- add footer (include flat icons credit)
*/

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleGeneralTextChange = (e) => {
    dispatchGenInfo({
      type: "HANDLE_GENINFO_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleJobTextChange = (e) => {
    dispatchJobs({
      type: "HANDLE_JOBS_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleEducationChange = (e) => {
    dispatchEducation({
      type: "HANDLE_EDUCATION_TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleImgUpload = (e) => {


    setAvatarImg({ file: URL.createObjectURL(e.target.files[0]) });
  };

  const handleTextUpdate = (e, name, category) => {
    if (category === "GENINFO") {
      dispatchGenInfo({
        type: "GENINFO_UPDATE",
        field: e.target.name,
        payload: e.target.value,
        id: e.target.id,
      });
    }
    if (category === "JOBS") {
      dispatchJobs({
        type: "JOBS_UPDATE",
        field: e.target.name,
        payload: e.target.value,
        id: e.target.id,
      });
    }
    if (category === "EDUCATION")
      dispatchEducation({
        type: "EDUCATION_UPDATE",
        field: e.target.name,
        payload: e.target.value,
        id: e.target.id,
      });
  };
  // submit handlers

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    let { name, email, mobile, city, isEdit, isSubmit, summary } = genInfo;
    let id = uniqid();
    let obj = { name, email, mobile, city, id, isEdit, isSubmit, summary };

    dispatchGenInfo({
      type: "GENINFO_SUBMIT",
      payload: obj,
    });
  };

  const handleJobSubmit = (e) => {
    console.log(e);

    e.preventDefault();
    let { company, position, startDate, endDate, isEdit, isSubmit } = jobs;
    let id = uniqid();
    let obj = { company, position, startDate, endDate, id, isEdit, isSubmit };

    dispatchJobs({
      type: "JOBS_SUBMIT",
      payload: obj,
    });
  };

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    let { instName, grades, startDate, endDate, isEdit, isSubmit } = education;
    let id = uniqid();
    let obj = { instName, grades, startDate, endDate, id, isEdit, isSubmit };

    dispatchEducation({
      type: "EDUCATION_SUBMIT",
      payload: obj,
    });
  };



  // delete handler

  const deleteDisplay = (item, description) => {
    if (description === "JOBS") {
      dispatchJobs({
        type: "JOBS_DELETE",
        payload: item,
      });
    }
    if (description === "GENINFO") {
      dispatchGenInfo({
        type: "GENINFO_DELETE",
        payload: item,
      });
    }
    if (description === "EDUCATION") {
      dispatchEducation({
        type: "EDUCATION_DELETE",
        payload: item,
      });
    }
  };

  // edit handler

  const handleEdit = (e, item, category) => {
    e.preventDefault();
    if (category === "JOBS") {
      dispatchJobs({
        type: "JOBS_EDIT",
        payload: item,
      });
    }
    if (category === "JOBS_SAVE") {
      dispatchJobs({
        type: "JOBS_UPDATE_SAVE",
        payload: item,
      });
    }
    if (category === "GENINFO") {
      dispatchGenInfo({
        type: "GENINFO_EDIT",
        payload: item,
      });
    }
    if (category === "GENINFO_SAVE") {
      dispatchGenInfo({
        type: "GENINFO_UPDATE_SAVE",
        payload: item,
      });
    }
    if (category === "EDUCATION") {
      dispatchEducation({
        type: "EDUCATION_EDIT",
        payload: item,
      });
    }
    if (category === "EDUCATION_SAVE") {
      dispatchEducation({
        type: "EDUCATION_UPDATE_SAVE",
        payload: item,
      });
    }
  };

  // state useReducer hooks
  const [genInfo, dispatchGenInfo] = React.useReducer(
    generalInfoReducer,
    JSON.parse(localStorage.getItem("myLocalGenInfo")) || initialGenInfo
  );

  const [jobs, dispatchJobs] = React.useReducer(
    jobsReducer,
    JSON.parse(localStorage.getItem("myLocalJobs")) || initialJobs
  );

  const [education, dispatchEducation] = React.useReducer(
    educationReducer,
    JSON.parse(localStorage.getItem("myLocalEducation")) || initialEducation
  );

    // Img state 

  const [avatarImg, setAvatarImg] = useState({file: null});


  // useEffect hooks to set localStorage 
  React.useEffect(() => {
    localStorage.setItem("myLocalGenInfo", JSON.stringify(genInfo));
  }, [genInfo]);

  React.useEffect(() => {
    localStorage.setItem("myLocalJobs", JSON.stringify(jobs));
  }, [jobs]);

  React.useEffect(() => {
    localStorage.setItem("myLocalEducation", JSON.stringify(education));
  }, [education]);


  // React.useEffect(() => {
  //   localStorage.setItem("myLocalAvatar", JSON.stringify(avatarImg))
  // }, [avatarImg])

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">CV Builder</h1>
        <div class="row">
          <div className="column">
            <div className="column-form">
              {/* <input type="file" onChange={handleImgUpload} /> */}
              {/* <img src={avatarImg.file} className="avatar" alt="avatar"/> */}
              <GeneralInfo
                onFormInput={handleGeneralTextChange}
                formSubmit={handleGeneralSubmit}
                genValue={genInfo}
                imgHandler={handleImgUpload}

              />
              <WorkExperience
                onFormInput={handleJobTextChange}
                formSubmit={handleJobSubmit}
                jobValue={jobs}
              />

              <EducationalExperience
                onFormInput={handleEducationChange}
                formSubmit={handleEducationSubmit}
                educationValue={education}
              />
            </div>
            <br />
            <button onClick={handlePrint}>Save</button>
          </div>
          <div className="column">
            <div className="column-display" ref={componentRef}>
              <DisplayGenInfo
                data={genInfo.data}
                onRemoveItem={deleteDisplay}
                handleEdit={handleEdit}
                isEdit={genInfo.data}
                handleTextUpdate={handleTextUpdate}
                avatar={avatarImg.file}
              />

              <DisplayJobs
                data={jobs.data}
                onRemoveItem={deleteDisplay}
                handleEdit={handleEdit}
                isEdit={jobs.data}
                handleTextUpdate={handleTextUpdate}
              />

              <DisplayEducation
                data={education.data}
                onRemoveItem={deleteDisplay}
                handleEdit={handleEdit}
                isEdit={education.data}
                handleTextUpdate={handleTextUpdate}
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
