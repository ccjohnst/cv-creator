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

## Built with

- [React](https://reactjs.org/)
- [ReactToPrint](https://www.npmjs.com/package/react-to-print) - To allow users to save the CV as a PDF.
- [uniqid](https://www.npmjs.com/package/uniqid)
