import { useReducer, useState } from "react";
import "./TodoList.css";

const initialValues = {
  status: "",
  data: [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      completed: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "submitData":
      return {
        ...state,
        status: "submitData",
        data: [...state.data, action.payload],
      };

    case "deleteItem":
      return {
        ...state,
        status: "deleteItem",
        data: state.data.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
}

function TodoList() {
  const [query, setQuery] = useState("");
  const id = crypto.randomUUID().toString();

  const [{ data }, dispath] = useReducer(reducer, initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    const newData = {
      id,
      title: query,
      completed: false,
    };
    dispath({
      type: "submitData",
      payload: newData,
    });
    setQuery("");
    console.log(newData);
  }

  function handleDeleteItem(id) {
    dispath({
      type: "deleteItem",
      payload: id,
    });
    console.log(`Item with id ${id} deleted.`);
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form
        className="search-container"
        action=""
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Add your task"
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
      <ul>
        {data.map((el) => (
          <li key={el.id}>
            <span>{el.title}</span>
            <button onClick={() => handleDeleteItem(el.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
