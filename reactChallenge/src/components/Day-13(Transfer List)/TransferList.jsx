/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./TransferList.css";

const leftData = [
  { id: 1, label: "Item 1", checked: false },
  { id: 2, label: "Item 2", checked: false },
  { id: 3, label: "Item 3", checked: false },
  { id: 4, label: "Item 4", checked: false },
];
const rightData = [
  { id: 5, label: "Item 5", checked: false },
  { id: 6, label: "Item 6", checked: false },
  { id: 7, label: "Item 7", checked: false },
  { id: 8, label: "Item 8", checked: false },
];

function TransferList() {
  const [rightState, setRighState] = useState(rightData);
  const [leftState, setleftState] = useState(leftData);

  function handleToggle(list, setList, id) {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setList(updatedList);
  }

  function transferSelected(source, setSource, destination, setDestination) {
    const selectedItem = source.filter((item) => item.checked);
    const remainingItem = source.filter((item) => !item.checked);

    setSource(remainingItem);
    setDestination([...destination, ...selectedItem]);
  }

  function transferAll(source, setSource, destination, setDistination) {
    const newDestination = [...destination, ...source];
    setDistination(newDestination);
    setSource([]);
  }

  function hasSelected(list) {
    return list.some((item) => item.checked);
  }

  return (
    <div>
      <div className="container">
        <ul style={{ listStyleType: "none" }}>
          {leftState.map((el) => (
            <li key={el.id}>
              <input
                onChange={() => handleToggle(leftState, setleftState, el.id)}
                id={el.id}
                checked={el.checked}
                type="checkbox"
              />
              <label htmlFor={el.id}>{el.label}</label>
            </li>
          ))}
        </ul>

        <ul className="button-list">
          <li>
            <button
              disabled={rightState.length === 0 ? true : false}
              onClick={() =>
                transferAll(rightState, setRighState, leftState, setleftState)
              }
            >
              &lt;&lt;
            </button>
          </li>
          <li>
            <button
              disabled={rightState.every((item) =>
                item.checked === true ? false : true
              )}
              onClick={() =>
                transferSelected(
                  rightState,
                  setRighState,
                  leftState,
                  setleftState
                )
              }
            >
              &lt;
            </button>
          </li>
          <li>
            <button
              disabled={leftState.every((item) =>
                item.checked === true ? false : true
              )}
              onClick={() =>
                transferSelected(
                  leftState,
                  setleftState,
                  rightState,
                  setRighState
                )
              }
            >
              &gt;
            </button>
          </li>
          <li>
            <button
              disabled={leftState.length === 0 ? true : false}
              onClick={() =>
                transferAll(leftState, setleftState, rightState, setRighState)
              }
            >
              &gt;&gt;
            </button>
          </li>
        </ul>

        <ul style={{ listStyleType: "none" }}>
          {rightState.map((el) => (
            <li key={el.id}>
              <input
                type="checkbox"
                id={el.id}
                onChange={() => handleToggle(rightState, setRighState, el.id)}
                checked={el.checked}
              />
              <label htmlFor={el.id}>{el.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransferList;
