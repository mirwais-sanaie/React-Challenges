import { useState } from "react";
import styles from "./TabsChange.module.css";

const data = [
  {
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    id: 0,
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets is a style sheet language used for describin the presentation of a document written in a markup language such as HTML or XML",
    id: 1,
  },
  {
    title: "JS",
    content:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    id: 2,
  },
];
function TabsChange() {
  const [activeTab, setActiveTab] = useState(0);

  //   function handleSetActiveTab(id) {
  //     setActiveTab((activeTab) => (activeTab.id !== id ? id : activeTab));
  //   }

  return (
    <div className={styles}>
      <div>
        <ul>
          {data.map((el, i) => (
            <button onClick={() => setActiveTab(el.id)} key={i}>
              {el.title}
            </button>
          ))}
        </ul>
      </div>
      <div>{<p>{data[activeTab].content}</p>}</div>
    </div>
  );
}

export default TabsChange;
