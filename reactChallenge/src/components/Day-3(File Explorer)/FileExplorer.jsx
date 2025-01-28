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
  return (
    <div>
      <h1>FILE EXPLORER</h1>
      <ul>
        {data.map((el) => (
          <FileItem key={el.id} item={el} />
        ))}
      </ul>
    </div>
  );
}

function FileItem({ item }) {
  return (
    <li style={{ cursor: "pointer" }}>
      {`${item.name} ${item?.children && "+"}`}
      <ul>
        {item?.children?.map((el) => (
          <FileItem key={el.id} item={el} />
        ))}
      </ul>
    </li>
  );
}

export default FileExplorer;
