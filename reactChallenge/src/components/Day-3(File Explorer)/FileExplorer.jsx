import { useState } from "react";

const data = [
  {
    id: 1,
    name: "README.md",
  },
  {
    id: 2,
    name: "Documents",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoint.ppt",
      },
    ],
  },
  {
    id: 5,
    name: "Downloads",
    children: [
      {
        id: 6,
        name: "unnamed.txt",
      },
      {
        id: 7,
        name: "Misc",
        children: [
          {
            id: 8,
            name: "foo.txt",
          },
          {
            id: 9,
            name: "bar.txt",
          },
        ],
      },
    ],
  },
];

function FileExplorer() {
  const [expandedIds, setExpandedIds] = useState(new Set());

  function handleSetChildren(id) {
    const newExpandedIds = new Set(expandedIds);

    if (newExpandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      newExpandedIds.add(id);
    }
    setExpandedIds(newExpandedIds);
  }

  return (
    <div>
      <h1>FILE EXPLORER</h1>
      <ul role="tree">
        {data.map((el) => (
          <FileItem
            key={el.id}
            item={el}
            handleSetChildren={handleSetChildren}
            expandedIds={expandedIds}
          />
        ))}
      </ul>
    </div>
  );
}

function FileItem({ item, handleSetChildren, expandedIds }) {
  const hasChildren = item.children?.length > 0;
  const isExpanded = expandedIds.has(item.id);

  return (
    <li>
      <div
        onClick={() => hasChildren && handleSetChildren(item.id)}
        style={{ cursor: hasChildren ? "pointer" : "default" }}
        aria-expanded={isExpanded}
        role="treeitem"
      >
        {`${item.name} ${hasChildren ? (isExpanded ? "-" : "+") : ""}`}
      </div>
      {hasChildren && isExpanded && (
        <ul role="group">
          {item.children.map((child) => (
            <FileItem
              key={child.id}
              item={child}
              handleSetChildren={handleSetChildren}
              expandedIds={expandedIds}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default FileExplorer;
