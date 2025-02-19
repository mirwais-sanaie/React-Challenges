/* eslint-disable no-unused-vars */
import { useState } from "react";
import DragableItem from "./DragableItem";
import "./index.css";

const data = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
];

function DragAndDrop() {
  const [items, setItems] = useState(data);
  const [dragging, setDragging] = useState(null);

  function handleDragStart(item) {
    setDragging(item);
  }

  function handleDragOver(event) {
    event.preventDefault();
    const dropTarget = event.target.closest(".draggable-item");
    if (dropTarget) {
      dropTarget.classList.add("drop-target");
    }
  }

  function handleDragLeave(event) {
    const dropTarget = event.target.closest(".draggable-item");
    if (dropTarget) {
      dropTarget.classList.remove("drop-target");
    }
  }

  function handleDrop(event, currentItem) {
    event.preventDefault();
    const dropTarget = event.target.closest(".draggable-item");
    if (dropTarget) {
      dropTarget.classList.remove("drop-target");
    }

    const newItems = items.map((item) => {
      if (item.id === currentItem.id) {
        return dragging;
      } else if (item.id === dragging.id) {
        return currentItem;
      }
      return item;
    });

    setItems(newItems);
    setDragging(null);
  }

  return (
    <div>
      {items.map((item) => (
        <DragableItem
          item={item}
          key={item.id}
          onDragStart={() => handleDragStart(item)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(event) => handleDrop(event, item)}
          isDragging={dragging && dragging.id === item.id}
        />
      ))}
    </div>
  );
}

export default DragAndDrop;
