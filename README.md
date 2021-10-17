# CV Creator

A React app which allows users to create a CV using a template and export it as a PDF. This web-app makes heavy use of React Hooks to manage various states. In particular, the useReducer Hook is heavily utilised to trigger different things depending on the the arguments passed to the reducers. I found that reducers were the most suitable Hook for this project due to the sheer amount of different states the CV entries could have (e.g. edited, deleted). Due to the small-scale of the project, I felt it was more appropriate to use useReducer and the ContextAPI than the Redux library.

SCSS is used to neatly seperate out the CSS.

## Reflection

Whilst I am pleased with the final result, on reflection I would opt for a more visually appealing design as currently it is quite spartan, which impacts usability.

## Getting started

```
git clone https://github.com/ccjohnst/cv-creator
cd cv-creator
npm install
npm start
```

# Api Reference

## A reference point for how the API's within App.js function

---

## Form APIs

### General Info

```js
<GeneralInfo />
```

#### Props

- `onFormInput={}` - A prop to pass down the input handler function.
- `formSubmit={}` - We pass down a function to handle the submission of the General Information
- `genValue={}` - Within this prop, you pass down the state which contains the current value of the General Info fields so it persists via localstorage
- `imgHandler={}` - Within this prop, we pass down a function that handles our image being turned into an object URL and stored in local storage

<br>

### Work Experience

```js
<WorkExperience />
```

#### Props

- `onFormInput={}` - A prop to pass down the input handler function.
- `formSubmit={}` - A prop to pass down a function to handle the submission of the Work Experience
- `jobValue={}` - Within this prop, you pass down the state which contains the current value of the Work Experience fields so it persists via localstorage
- `currentSelect={}` - A prop to pass down a function that handles whether the 'current' checkbox is selected and changes state for job endDate to value of "current"
- `checkBox={}` - A prop to passdown the state of the 'Current' checkbox for Work Experience.

<br>

### Educational Experience

```js
<EducationalExperience />
```

#### Props

- `onFormInput={}` - A prop to pass down the input handler function.
- `formSubmit={}` - A prop to pass down a function to handle the submission of the Educational Experience
- `educationValue={}` - Within this prop, you pass down the state which contains the current value of the Education Experience fields so it persists via localstorage
- `currentSelect={}` - prop to pass down a function that handles whether the 'current' checkbox is selected and changes state for job endDate to value of "current"
- `checkBox={}` - A prop to passdown the state of the 'Current' checkbox for Education Experience

<br>

---

## Display APIs

### Display General Info

```js
<DisplayGenInfo />
```

#### Props

- `data={}` - A prop to pass down the general info data saved in state and localstorage.
- `onRemoveItem={}` - A prop to pass down a function that handles the removal of the item from state. In this instance, we pass down a handler that uses useReducer hooks and their dispatch methods.
- `handleEdit={}` - A prop to pass down a function that handles the editing of the item and saves it back into state. For this web-app, we pass down an edit handler that uses useReducer hooks with dispatch methods.
- `isEdit={}` - A prop to pass down state which notes whether the item is currently being edited.
- `handleTextUpdate={}` - Within this prop, we pass down a function that uses useReducer Hook dispatch methods to handle updating text within the item.
- `avatar={}` - This prop accepts state which contains our stored avatar image.

<br>

### Display Jobs

```js
<DisplayJobs />
```

#### Props

- `data={}` - A prop to pass down the jobs data saved in state and localstorage.
- `onRemoveItem={}` - A prop to pass down a function that handles the removal of the item from state. In this instance, we pass down a handler that uses useReducer hooks and their dispatch methods.
- `handleEdit={}` - A prop to pass down a function that handles the editing of the item and saves it back into state. For this web-app, we pass down an edit handler that uses useReducer hooks with dispatch methods.
- `isEdit={}` - A prop to pass down state which notes whether the item is currently being edited.
- `handleTextUpdate={}` - Within this prop, we pass down a function that uses useReducer Hook dispatch methods to handle updating text values within the item.
- `handleCurrentUpdate={}` - Pass a function that uses a useReducer Hook dispatch method for to set the state to for the selected item only. This is necessary as there can be multiple work experience items saved, so we need to ensure only the currently selected one is updated.
- `checkBox={}` - A prop to passdown the state of the 'Current' checkbox for Work Experience. Viewable when editing the item.

<br>

### Display Education

```js
<DisplayEducation />
```

#### Props

- `data={}` - A prop to pass down the education data saved in state and localstorage.
- `onRemoveItem={}` - A prop to pass down a function that handles the removal of the item from state. In this instance, we pass down a handler that uses useReducer hooks and their dispatch methods.
- `handleEdit={}` - A prop to pass down a function that handles the editing of the item and saves it back into state. For this web-app, we pass down an edit handler that uses useReducer hooks with dispatch methods.
- `isEdit={}` - A prop to pass down state which notes whether the item is currently being edited.
- `handleTextUpdate={}` - Within this prop, we pass down a function that uses useReducer Hook dispatch methods to handle updating text values within the item.
- `handleCurrentUpdate={}` - Pass a function that uses a useReducer Hook dispatch method for to set the state to for the selected item only. This is necessary as there can be multiple education experience items saved, so we need to ensure only the currently selected one is updated
- `checkBox={}` - A prop to passdown the state of the 'Current' checkbox for Education Experience. Viewable when editing the item.

<br>

---

## Built with

- [React](https://reactjs.org/)
- [ReactToPrint](https://www.npmjs.com/package/react-to-print) - To allow users to save the CV as a PDF.
- [uniqid](https://www.npmjs.com/package/uniqid)
