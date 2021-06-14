import defaultAvatar from "../assets/default.jpg";
import city from "../assets/thumbnails/city.svg";
import mobile from "../assets/thumbnails/mobile.svg";
import email from "../assets/thumbnails/email.svg";


const displaySymbol = (symbol, altName) => (
  <img src={symbol} alt={altName} style={{ width: "20px", height: "20px" }} />
);

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
  currentSelect,
  checkBox,
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
            placeHolder={!titleName ? name  : null}
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

const DisplayAvatar = ({ avatar }) => {
  console.log(avatar);
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
