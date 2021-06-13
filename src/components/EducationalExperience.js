import { EducationForm } from "./forms";

function EducationalExperience({
  onFormInput,
  formSubmit,
  educationValue,
  currentSelect,
  checkBox,
}) {
  return (
    <div className="educationForm">
      <h2>Educational Experience</h2>
      <EducationForm
        onFormInput={onFormInput}
        formSubmit={formSubmit}
        educationValue={educationValue}
        currentSelect={currentSelect}
        checkBox={checkBox}
/>
    </div>
  );
}

export default EducationalExperience;
