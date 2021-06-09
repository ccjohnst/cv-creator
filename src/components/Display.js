import defaultAvatar from "../assets/default.jpg";
import city from "../assets/thumbnails/city.svg";
import mobile from "../assets/thumbnails/mobile.svg";
import email from "../assets/thumbnails/email.svg";

const displaySymbol = (symbol) => (
  <img src={symbol} style={{ width: "20px", height: "20px" }} />
);

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
          ></input>
        )}
        <br />
      </>
    );
  } else {
    return (
      <div className={styleName}>
        <strong>
          {titleName}
          {titleName && <>:</>}
          {displaySymbol}{" "}
        </strong>
        <>{name === "name" ? <strong>{item}</strong> : <>{ item }</>}</>
        <br />
      </div>
    );
  }
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
        <div className="genInfo">
          <DisplayAvatar avatar={avatar} />
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
                displaySymbol={displaySymbol(email)}
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
                displaySymbol={displaySymbol(mobile)}
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
                displaySymbol={displaySymbol(city)}
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
              {item.isEdit ? (
                <button
                  className="saveEditButton"
                  onClick={(e) => handleEdit(e, item, "GENINFO_SAVE")}
                >
                  Save
                </button>
              ) : (
                <button
                  className="editButton"
                  onClick={(e) => handleEdit(e, item, "GENINFO")}
                >
                  Edit
                </button>
              )}
              <button
                className="delButton"
                onClick={() => onRemoveItem(item, "GENINFO")}
              >
                Delete
              </button>
            </form>
          ))}
        </div>
      </>
    );
  }
};

const DisplayJobs = ({ data, onRemoveItem, handleEdit, handleTextUpdate }) => {
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
              />
              <br />
              {item.isEdit ? (
                <button
                  className="saveEditButton"
                  onClick={(e) => handleEdit(e, item, "JOBS_SAVE")}
                >
                  Save
                </button>
              ) : (
                <button
                  className="editButton"
                  onClick={(e) => handleEdit(e, item, "JOBS")}
                >
                  Edit
                </button>
              )}

              <button
                className="delButton"
                onClick={() => onRemoveItem(item, "JOBS")}
              >
                Delete
              </button>
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
              />
              <br />
              {item.isEdit ? (
                <button
                  className="saveEditButton"
                  onClick={(e) => handleEdit(e, item, "EDUCATION_SAVE")}
                >
                  Save
                </button>
              ) : (
                <button
                  className="editButton"
                  onClick={(e) => handleEdit(e, item, "EDUCATION")}
                >
                  Edit
                </button>
              )}
              <button
                className="delButton"
                onClick={() => onRemoveItem(item, "EDUCATION")}
              >
                Delete
              </button>
            </form>
          ))}
        </div>
      </>
    );
  }
};

export { DisplayGenInfo, DisplayJobs, DisplayEducation };
