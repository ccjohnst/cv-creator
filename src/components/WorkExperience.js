import { JobForm } from "./forms";

function WorkExperience({
  onFormInput,
  formSubmit,
  jobValue,
  currentSelect,
  checkBox,
}) {
  return (
    <div className="jobForm">
      <h2>Work Experience</h2>
      <JobForm
        onFormInput={onFormInput}
        formSubmit={formSubmit}
        jobValue={jobValue}
        currentSelect={currentSelect}
        checkBox={checkBox}
      />
    </div>
  );
}

export default WorkExperience;
