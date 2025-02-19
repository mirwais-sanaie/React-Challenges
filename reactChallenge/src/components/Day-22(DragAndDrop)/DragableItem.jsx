function DragableItem({
  item,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  isDragging,
}) {
  return (
    <div
      className={`draggable-item ${isDragging ? "dragging" : ""}`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {item.name}
    </div>
  );
}

export default DragableItem;
