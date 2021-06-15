const InputWithLabel = ({
  onInputChange,
  name,
  children,
  inputValue,
  inputType,
  currentSelect,
  checkBox,
}) => {
  // const displaySummary = () => {
  //   if (summary === "name")
  // }
  return (
    <>
      <label>{children}</label>
      <br />
      &nbsp;
      {name === "summary" ? (
        <textarea
          name={name}
          type={inputType}
          onChange={(e) => onInputChange(e)}
          value={inputValue}
        ></textarea>
      ) : (
        <input
          name={name}
          type={inputType}
          onChange={(e) => onInputChange(e)}
          value={inputValue}
        ></input>
      )}
      <br />
      {name === "endDate" && (
        <label>
          Current
          <input
            name={name}
            onChange={currentSelect}
            type="checkbox"
            checked={checkBox}
          ></input>
        </label>
      )}
      <br />
    </>
  );
};

const SaveButton = ({ formSubmit }) => {
  return (
    <button className="submitButton" type="submit" onClick={formSubmit}>
      Submit
    </button>
  );
};

const SelectAvatar = ({ imgHandler }) => {
  return (
    <>
      <strong>Profile Picture </strong>
      <input
        classname="avatarSelect"
        type="file"
        onChange={(e) => imgHandler(e)}
      />
    </>
  );
};

const GeneralForm = ({ onFormInput, formSubmit, genValue, imgHandler }) => {
  return (
    <>
      <form>
        <SelectAvatar imgHandler={imgHandler} />
        <br />
        <InputWithLabel
          name="name"
          onInputChange={onFormInput}
          inputValue={genValue.name}
          inputType="text"
        >
          <strong>Name</strong>
        </InputWithLabel>
        <InputWithLabel
          name="email"
          onInputChange={onFormInput}
          inputValue={genValue.email}
          inputType="email"
        >
          <strong>Email</strong>
        </InputWithLabel>
        <InputWithLabel
          name="mobile"
          onInputChange={onFormInput}
          inputValue={genValue.mobile}
          inputType="text"
        >
          <strong>Mobile</strong>
        </InputWithLabel>
        <InputWithLabel
          name="city"
          onInputChange={onFormInput}
          inputValue={genValue.city}
          inputType="text"
        >
          <strong>City</strong>
        </InputWithLabel>
        <InputWithLabel
          name="summary"
          onInputChange={onFormInput}
          inputValue={genValue.summary}
          inputType=""
        >
          <strong>Summary</strong>
        </InputWithLabel>
        <SaveButton formSubmit={formSubmit} />
      </form>
    </>
  );
};

const JobForm = ({
  onFormInput,
  formSubmit,
  jobValue,
  currentSelect,
  checkBox,
}) => {
  return (
    <>
      <form>
        <InputWithLabel
          name="company"
          onInputChange={onFormInput}
          inputValue={jobValue.company}
          inputType="text"
        >
          <strong>Company</strong>
        </InputWithLabel>
        <InputWithLabel
          name="position"
          onInputChange={onFormInput}
          inputValue={jobValue.position}
          inputType="text"
        >
          <strong>Position</strong>
        </InputWithLabel>
        <InputWithLabel
          name="startDate"
          onInputChange={onFormInput}
          inputValue={jobValue.startDate}
          inputType="date"
        >
          <strong>Start Date</strong>
        </InputWithLabel>
        <InputWithLabel
          name="endDate"
          onInputChange={onFormInput}
          inputValue={jobValue.endDate}
          inputType="date"
          currentSelect={currentSelect}
          checkBox={checkBox}
        >
          <strong>End Date</strong>
        </InputWithLabel>
        <SaveButton formSubmit={formSubmit} />
      </form>
    </>
  );
};

const EducationForm = ({
  onFormInput,
  formSubmit,
  educationValue,
  currentSelect,
  checkBox,
}) => {
  return (
    <>
      <InputWithLabel
        name="instName"
        onInputChange={onFormInput}
        inputValue={educationValue.instName}
        inputType="text"
      >
        <strong>Institution Name</strong>
      </InputWithLabel>
      <InputWithLabel
        name="grades"
        onInputChange={onFormInput}
        inputValue={educationValue.grades}
        inputType="text"
      >
        <strong>Grades</strong>
      </InputWithLabel>
      <InputWithLabel
        name="startDate"
        onInputChange={onFormInput}
        inputValue={educationValue.startDate}
        inputType="date"
      >
        <strong>Start Date</strong>
      </InputWithLabel>
      <InputWithLabel
        name="endDate"
        onInputChange={onFormInput}
        inputValue={educationValue.endDate}
        inputType="date"
        currentSelect={currentSelect}
        checkBox={checkBox}
      >
        <strong>End Date</strong>
      </InputWithLabel>
      <SaveButton formSubmit={formSubmit} />
    </>
  );
};

export { SelectAvatar, JobForm, GeneralForm, EducationForm };
