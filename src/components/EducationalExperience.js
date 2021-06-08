import { EducationForm } from "./forms";

function EducationalExperience({ onFormInput, formSubmit, educationValue }) {
  return (
    <>
      <h2>Educational Experience</h2>
      <EducationForm
        onFormInput={onFormInput}
        formSubmit={formSubmit}
        educationValue={educationValue}
      />
    </>
  );
}

export default EducationalExperience;
