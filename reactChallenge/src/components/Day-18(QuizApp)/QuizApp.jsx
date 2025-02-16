import { useReducer } from "react";
import data from "./Data";

const initialState = {
  currentQuestion: 0,
  score: 0,
  isAnswer: false,
  status: "not-ready",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "quiz/not-ready":
      return { ...initialState };
    case "quiz/ready":
      return { ...state, status: "ready" };
    case "question/answer": {
      const check =
        data[state.currentQuestion].correctAnswer === action.payload;
      return {
        ...state,
        isAnswer: true,
        score: check ? state.score + 1 : state.score,
      };
    }
    case "question/next":
      return {
        ...state,
        status: "ready",
        currentQuestion: state.currentQuestion + 1,
        isAnswer: false,
      };
    case "quiz/finish":
      return { ...state, status: "finish" };
    default:
      return state;
  }
}

function QuizApp() {
  const [{ status, currentQuestion, score, isAnswer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>
      <h1>Start to enjoy the exam</h1>
      {status === "not-ready" && (
        <button onClick={() => dispatch({ type: "quiz/ready" })}>Start</button>
      )}
      {status === "ready" && (
        <Question
          question={data[currentQuestion]}
          dispatch={dispatch}
          isAnswer={isAnswer}
        />
      )}
      {status === "finish" && <FinichScreen score={score} />}
      {status === "finish" && (
        <button onClick={() => dispatch({ type: "quiz/not-ready" })}>
          Restart
        </button>
      )}
    </div>
  );
}

function Question({ question, dispatch, isAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <Option
            key={index}
            title={option}
            dispatch={dispatch}
            isAnswer={isAnswer}
            answer={question.correctAnswer}
          />
        ))}
      </ul>
      <button
        disabled={isAnswer ? false : true}
        onClick={
          data.indexOf(question) === data.length - 1
            ? () => dispatch({ type: "quiz/finish" })
            : () => dispatch({ type: "question/next" })
        }
      >
        Next
      </button>
    </div>
  );
}

function Option({ title, dispatch, isAnswer, answer }) {
  return (
    <li style={{ paddingBlock: "5px" }}>
      <button
        disabled={isAnswer}
        style={
          isAnswer && title === answer
            ? { backgroundColor: "green", color: "white" }
            : isAnswer
            ? { backgroundColor: "red", color: "white" }
            : { backgroundColor: "white" }
        }
        onClick={() => dispatch({ type: "question/answer", payload: title })}
      >
        {title}
      </button>
    </li>
  );
}

function FinichScreen({ score }) {
  return (
    <div>
      <h1>You succefully finished the exam</h1>
      <p>
        Your score is :{" "}
        <span
          style={
            score > 10
              ? { backgroundColor: "green", color: "white" }
              : { backgroundColor: "white" }
          }
        >
          {score}
        </span>
      </p>
    </div>
  );
}

export default QuizApp;
