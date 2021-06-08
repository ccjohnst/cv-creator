// state reducer functions
const generalInfoReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_GENINFO_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "GENINFO_SUBMIT":
      return {
        ...state,
        data: [action.payload],
        isEdit: false,
        isDelete: false,
        name: "",
        email: "",
        mobile: "",
        city: "",
      };
    case "GENINFO_EDIT":
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => d.id === action.payload.id);
      newArray[index].isEdit = true;
      return {
        ...state,
        data: newArray,
      };
    case "GENINFO_DELETE":
      return {
        ...state,
        isEdit: false,
        isDelete: true,
        data: state.data.filter((geninfo) => action.payload.id !== geninfo.id),
      };
    case "GENINFO_UPDATE_SAVE": {
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => d.id === action.payload.id);
      newArray[index].isEdit = false;
      return {
        ...state,
        data: newArray,
      };
    }
    case "GENINFO_UPDATE": {
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => action.id === d.id);
      newArray[index][action.field] = action.payload;
      return {
        ...state,
        ...state.data,
        data: newArray,
      };
    }
    default:
      throw new Error();
  }
};

const jobsReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_JOBS_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "JOBS_SUBMIT":
      return {
        ...state,
        data: state.data.concat([action.payload]),
        isEdit: false,
        isDelete: false,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
      };
    case "JOBS_EDIT":
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => d.id === action.payload.id);
      newArray[index].isEdit = true;
      return {
        ...state,
        data: newArray,
      };

    case "JOBS_DELETE":
      return {
        ...state,
        isEdit: false,
        isDelete: true,
        data: state.data.filter((job) => action.payload.id !== job.id),
      };
    case "JOBS_UPDATE_SAVE": {
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => d.id === action.payload.id);
      newArray[index].isEdit = false;
      return {
        ...state,
        data: newArray,
      };
    }
    case "JOBS_UPDATE": {
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => action.id === d.id);
      newArray[index][action.field] = action.payload;
      console.log(action.id)
      return {
        ...state,
        ...state.data,
        data: newArray,
      };
    }
    default:
      throw new Error();
  }
};

const educationReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_EDUCATION_TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "EDUCATION_SUBMIT":
      return {
        ...state,
        data: state.data.concat([action.payload]),
        isEdit: false,
        isDelete: false,
        instName: "",
        grades: "",
        startDate: "",
        endDate: "",
      };
    case "EDUCATION_EDIT":
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => d.id === action.payload.id);
      newArray[index].isEdit = true;
      return {
        ...state,
        data: newArray,
      };
    case "EDUCATION_DELETE":
      return {
        ...state,
        isEdit: false,
        isDelete: true,
        data: state.data.filter(
          (education) => action.payload.id !== education.id
        ),
      };
    case "EDUCATION_UPDATE_SAVE": {
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => d.id === action.payload.id);
      newArray[index].isEdit = false;
      return {
        ...state,
        data: newArray,
      };
    }
    case "EDUCATION_UPDATE": {
      const newArray = [...state.data];
      const index = newArray.findIndex((d) => action.id === d.id);
      newArray[index][action.field] = action.payload;
      return {
        ...state,
        ...state.data,
        data: newArray,
      };
    }
    default:
      throw new Error();
  }
};

export { generalInfoReducer, jobsReducer, educationReducer };
