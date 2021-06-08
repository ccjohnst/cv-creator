import { GeneralForm } from "./forms";

function GeneralInfo({ onFormInput, formSubmit, genValue, imgHandler}) {
  return (
    <>
      <h2>General Info</h2>
      <GeneralForm
        onFormInput={onFormInput}
        formSubmit={formSubmit}
        genValue={genValue}
        imgHandler={imgHandler}
      />
    </>
  );
}

export default GeneralInfo;
