// Asked in Capgimeni - did it

import { useState } from "react";
export default function App() {
  let [fields, setFields] = useState({ name: "", priority: "" });
  const [todoList, setTodoList] = useState([]);
  const masterList = ["all", "low", "medium", "high"];
  const [selPr, setSelPr] = useState("all");

  const handleOnChange = (type, value) => {
    let field = { ...fields };
    field[type] = value;
    setFields(field);
  };
  
  const handleAdd = () => {
    let arr = [...todoList];
    arr.push(fields);
    setTodoList(arr);
    setFields({ name: "", priority: "" });
  };

  return (
    <div className="App">
      <h3>To do list with priority</h3>
      <div className="input_container">
        <input
          placeholder="task name"
          value={fields.name}
          onChange={(e) => {
            handleOnChange("name", e.target.value);
          }}
        ></input>
        <select
          onChange={(e) => {
            handleOnChange("priority", e.target.value);
          }}
          value={fields.priority}
        >
          <option value="">Select</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={() => handleAdd()}>Add task</button>
      </div>
      {masterList.map((item) => (
        <button
          onClick={() => {
            setSelPr(item);
          }}
          key={item}
        >
          {item}
        </button>
      ))}
      <div className="task_board">
        {todoList.length > 0 &&
          todoList
            .filter((item) => (selPr != "all" ? item.priority == selPr : item))
            .map((item, index) => (
              <div key={index}>
                <span>Task name :{item.name}</span>
                <br />
                <span>Priority :{item.priority}</span>
              </div>
            ))}
      </div>
    </div>
  );
}
