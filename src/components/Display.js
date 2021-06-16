import defaultAvatar from "../assets/default.jpg";
import city from "../assets/thumbnails/city.svg";
import mobile from "../assets/thumbnails/mobile.svg";
import email from "../assets/thumbnails/email.svg";

// Display symbols for general info e.g. email symbol, mobile symbol
const displaySymbol = (symbol, altName) => (
  <img src={symbol} alt={altName} style={{ width: "20px", height: "20px" }} />
);

/* Display 'current' checkbox for jobs and education that the user is still in.
If the endDate is equal to current, ensure that the current checkbox is 
already checked when the user edits the entry */
const DisplayChecked = ({ name, item, handleCurrentUpdate, id }) => {
  if (name === "endDate" && item === "Present") {
    return (
      <label>
        Current
        <input
          name={name}
          onChange={(e) => handleCurrentUpdate(e, name)}
          type="checkbox"
          defaultChecked="true"
          id={id}
        ></input>
      </label>
    );
  }
  if (name === "endDate" && item !== "Present") {
    return (
      <label>
        Current
        <input
          name={name}
          onChange={(e) => handleCurrentUpdate(e, name)}
          type="checkbox"
          defautChecked="false"
          id={id}
        ></input>
      </label>
    );
  } else {
    return null;
  }
};

/*Component containing the edit and delete option buttons for the form */
const OptionButtons = ({
  item,
  handleEdit,
  onRemoveItem,
  saveArg,
  editArg,
  delArg,
}) => {
  return (
    <>
      {item.isEdit ? (
        <button
          className="submitButton"
          onClick={(e) => handleEdit(e, item, saveArg)}
        >
          Save
        </button>
      ) : (
        <button
          className="editButton"
          onClick={(e) => handleEdit(e, item, editArg)}
        >
          Edit
        </button>
      )}
      <button className="delButton" onClick={() => onRemoveItem(item, delArg)}>
        Delete
      </button>
    </>
  );
};

/* Component that takes each general info, job or education experience and displays them */
const Item = ({
  item,
  name,
  isEdit,
  handleTextUpdate,
  category,
  titleName,
  inputType,
  styleName,
  id,
  displaySymbol,
  handleCurrentUpdate,
}) => {
  if (isEdit === true) {
    return (
      <>
        <label>
          <strong>{titleName}</strong>
        </label>
        &nbsp;
        {name === "summary" ? (
          <textarea
            value={item}
            autoFocus
            name={name}
            type={inputType}
            category={category}
            onChange={(e) => handleTextUpdate(e, name, category)}
            id={id}
          ></textarea>
        ) : (
          <input
            value={item}
            autoFocus
            name={name}
            type={inputType}
            category={category}
            onChange={(e) => handleTextUpdate(e, name, category)}
            id={id}
            placeholder={!titleName ? name : null}
          ></input>
        )}
        <DisplayChecked
          name={name}
          item={item}
          handleCurrentUpdate={handleCurrentUpdate}
          id={id}
        />
        <br />
      </>
    );
  }
  if (name === "endDate" && item === "Present") {
    return (
      <div className={styleName} style={{ display: "inline-block" }}>
        <>- {item}</>
        <br />
      </div>
    );
  }
  return (
    <div className={styleName}>
      <strong>
        {titleName}
        {titleName && <>:</>}
        {displaySymbol}{" "}
      </strong>
      <>{name === "name" ? <strong>{item}</strong> : <>{item}</>}</>
      <br />
    </div>
  );
};

/* This component displays the whatever avatar has been inputted and takes avatar as an argument. 
If the user has not inputted an avatar, it uses a default avatar*/
const DisplayAvatar = ({ avatar }) => {
  return (
    <>
      <img
        className="avatar"
        src={avatar ? avatar : defaultAvatar}
        alt="User's avatar"
        crossOrigin="anonymous"
      />
    </>
  );
};

/* This component displays all submitted general info by using .map to generate Item components for each 
field submitted on the form */

const DisplayGenInfo = ({
  data,
  onRemoveItem,
  handleEdit,
  handleTextUpdate,
  avatar,
}) => {
  if (!data.length) {
    return null;
  } else {
    return (
      <>
        <DisplayAvatar avatar={avatar} />
        <div className="genInfo">
          {data.map((item, index) => (
            <form key={item.id}>
              <Item
                item={item.name.toUpperCase()}
                name="name"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="GENINFO"
                inputType="text"
                styleName="cvName"
                id={item.id}
              />
              <Item
                item={item.email}
                name="email"
                // titleName="Email"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="GENINFO"
                inputType="email"
                id={item.id}
                displaySymbol={displaySymbol(email, "email")}
              />
              <Item
                item={item.mobile}
                name="mobile"
                // titleName="Mobile"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="GENINFO"
                inputType="text"
                id={item.id}
                displaySymbol={displaySymbol(mobile, "mobile")}
              />
              <Item
                item={item.city}
                name="city"
                // titleName="City"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="GENINFO"
                inputType="text"
                id={item.id}
                displaySymbol={displaySymbol(city, "email")}
              />
              <Item
                item={item.summary}
                name="summary"
                titleName="Summary"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="GENINFO"
                inputType="text"
                id={item.id}
              />
              <br />
              <OptionButtons
                item={item}
                handleEdit={handleEdit}
                onRemoveItem={onRemoveItem}
                saveArg="GENINFO_SAVE"
                editArg="GENINFO"
                delArg="GENINFO"
              />
            </form>
          ))}
        </div>
      </>
    );
  }
};

/* This component displays all submitted jobs by using .map to generate Item components for each 
field submitted on the form */

const DisplayJobs = ({
  data,
  onRemoveItem,
  handleEdit,
  handleTextUpdate,
  checkBox,
  handleCurrentUpdate,
}) => {
  if (!data.length) {
    return null;
  } else {
    return (
      <>
        {" "}
        <div className="jobs">
          {" "}
          <h2>Work Experience</h2>
          {data.map((item, index) => (
            <form key={item.id}>
              <Item
                item={item.company}
                name="company"
                titleName="Company"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="JOBS"
                inputType="text"
                id={item.id}
              />
              <Item
                item={item.position}
                name="position"
                titleName="Position"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="JOBS"
                inputType="text"
                id={item.id}
              />
              <Item
                item={item.startDate}
                name="startDate"
                titleName="Start Date"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="JOBS"
                inputType="date"
                id={item.id}
              />
              <Item
                item={item.endDate}
                name="endDate"
                titleName="End Date"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="JOBS"
                inputType="date"
                id={item.id}
                handleCurrentUpdate={handleCurrentUpdate}
                checkBox={checkBox}
              />
              <br />
              {/* saveArg, editArg, delArg  */}
              <OptionButtons
                item={item}
                handleEdit={handleEdit}
                onRemoveItem={onRemoveItem}
                saveArg="JOBS_SAVE"
                editArg="JOBS"
                delArg="JOBS"
              />
            </form>
          ))}
        </div>
      </>
    );
  }
};

/* This component displays all submitted education info by using .map to generate Item components for each 
field submitted on the form */


const DisplayEducation = ({
  data,
  onRemoveItem,
  handleEdit,
  handleTextUpdate,
  checkBox,
  handleCurrentUpdate,
}) => {
  if (!data.length) {
    return null;
  } else {
    return (
      <>
        <div className="education">
          <h2>Education</h2>
          {data.map((item, index) => (
            <form key={item.id}>
              <Item
                item={item.instName}
                name="instName"
                titleName="Institution Name"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="EDUCATION"
                inputType="text"
                id={item.id}
              />
              <Item
                item={item.grades}
                name="grades"
                titleName="Grades"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="EDUCATION"
                inputType="text"
                id={item.id}
              />
              <Item
                item={item.startDate}
                name="startDate"
                titleName="Start Date"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="EDUCATION"
                inputType="date"
                id={item.id}
              />
              <Item
                item={item.endDate}
                name="endDate"
                titleName="End Date"
                handleTextUpdate={handleTextUpdate}
                isEdit={item.isEdit}
                category="EDUCATION"
                inputType="date"
                id={item.id}
                handleCurrentUpdate={handleCurrentUpdate}
                checkBox={checkBox}
              />
              <br />
              <OptionButtons
                item={item}
                handleEdit={handleEdit}
                onRemoveItem={onRemoveItem}
                saveArg="EDUCATION_SAVE"
                editArg="EDUCATION"
                delArg="EDUCATION"
              />
            </form>
          ))}
        </div>
      </>
    );
  }
};

export { DisplayGenInfo, DisplayJobs, DisplayEducation };
