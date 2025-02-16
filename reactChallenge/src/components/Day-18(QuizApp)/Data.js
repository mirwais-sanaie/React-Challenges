const data = [
  {
    question: "What is React?",
    options: [
      "A server-side framework",
      "A front-end JavaScript library",
      "A back-end programming language",
      "A database management system",
    ],
    correctAnswer: "A front-end JavaScript library",
  },
  {
    question:
      "Which of the following is used to manage state in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A CSS preprocessor",
      "A type of database",
      "A testing framework",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
  {
    question: "What is the purpose of React's virtual DOM?",
    options: [
      "To improve performance by minimizing direct DOM manipulation",
      "To replace the actual DOM",
      "To handle server-side rendering",
      "To manage state in class components",
    ],
    correctAnswer:
      "To improve performance by minimizing direct DOM manipulation",
  },
  {
    question:
      "Which hook is used to perform side effects in functional components?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    question:
      "What is the correct way to pass data from a parent component to a child component?",
    options: ["Using state", "Using props", "Using refs", "Using context"],
    correctAnswer: "Using props",
  },
  {
    question: "What is the default port for a React development server?",
    options: ["3000", "8080", "5000", "8000"],
    correctAnswer: "3000",
  },
  {
    question: "Which method is used to render a React component to the DOM?",
    options: [
      "ReactDOM.render()",
      "React.render()",
      "Component.render()",
      "DOM.render()",
    ],
    correctAnswer: "ReactDOM.render()",
  },
  {
    question: "What is the purpose of keys in React lists?",
    options: [
      "To uniquely identify elements in a list",
      "To style list items",
      "To handle list item clicks",
      "To sort list items",
    ],
    correctAnswer: "To uniquely identify elements in a list",
  },
  {
    question: "Which of the following is NOT a React lifecycle method?",
    options: [
      "componentDidMount",
      "componentWillUnmount",
      "componentUpdate",
      "componentDidUpdate",
    ],
    correctAnswer: "componentUpdate",
  },
  {
    question: "What is the purpose of React Router?",
    options: [
      "To manage state in React applications",
      "To handle routing and navigation in React applications",
      "To style React components",
      "To fetch data from APIs",
    ],
    correctAnswer: "To handle routing and navigation in React applications",
  },
  {
    question:
      "What is the output of the following code?\n\n```jsx\nconst App = () => <h1>Hello, World!</h1>;\n```",
    options: [
      "A functional component",
      "A class component",
      "A syntax error",
      "A stateful component",
    ],
    correctAnswer: "A functional component",
  },
  {
    question:
      "Which of the following is used to share data across the component tree without passing props?",
    options: ["Context API", "Redux", "useState", "useEffect"],
    correctAnswer: "Context API",
  },
  {
    question: "What is the purpose of PropTypes in React?",
    options: [
      "To validate the types of props passed to a component",
      "To manage component state",
      "To handle component lifecycle methods",
      "To style components",
    ],
    correctAnswer: "To validate the types of props passed to a component",
  },
  {
    question:
      "What is the correct way to update the state in a functional component?",
    options: [
      "Using this.setState()",
      "Using the useState hook",
      "Using the useEffect hook",
      "Using the useReducer hook",
    ],
    correctAnswer: "Using the useState hook",
  },
  {
    question: "What is the purpose of React Fragments?",
    options: [
      "To group multiple elements without adding extra nodes to the DOM",
      "To create reusable components",
      "To handle state management",
      "To style components",
    ],
    correctAnswer:
      "To group multiple elements without adding extra nodes to the DOM",
  },
  {
    question:
      "Which of the following is used to optimize performance by memoizing components?",
    options: ["React.memo", "useMemo", "useCallback", "useEffect"],
    correctAnswer: "React.memo",
  },
  {
    question: "What is the purpose of the `useReducer` hook?",
    options: [
      "To manage complex state logic",
      "To handle side effects",
      "To create reusable components",
      "To fetch data from APIs",
    ],
    correctAnswer: "To manage complex state logic",
  },
  {
    question: "What is the correct way to conditionally render content in JSX?",
    options: [
      "Using if-else statements",
      "Using ternary operators",
      "Using switch statements",
      "Using for loops",
    ],
    correctAnswer: "Using ternary operators",
  },
  {
    question: "Which of the following is used to handle forms in React?",
    options: ["useState", "useEffect", "useForm", "useReducer"],
    correctAnswer: "useState",
  },
];

export default data;
