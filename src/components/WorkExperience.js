import { JobForm } from "./forms";

function WorkExperience({ onFormInput, formSubmit, formReset, jobValue }) {
  return (
    <>
      <h2>Work Experience</h2>
      <JobForm
        onFormInput={onFormInput}
        formSubmit={formSubmit}
        formReset={formReset}
        jobValue={jobValue}
      />
    </>
  );
}

export default WorkExperience;
