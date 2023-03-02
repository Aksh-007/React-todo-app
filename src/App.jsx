import { useState } from "react";
import "./App.css";


function App() {
  // const array = [
  //   {
  //     id: 1,
  //     name: "akshay",
  //   },
  //   {
  //     id: 2,
  //     name: "barapatre",
  //   },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [list, setList] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList((todoList) => {
      const updatedList = [...todoList, list];
      console.log(updatedList);
      // here setting input to empty after adding
      setList("");
      return updatedList;
    });
    
  };

  // for delete Todo
  const removeTodo = (i) =>{
    const updatedListData = todoList.filter((element, id)=>{
      return i !== id;
  })
  setTodoList(updatedListData)
  }

  const removeAllTodo = () =>{
    setTodoList([])
  }

  // for updated todo
  // const updateTodo = (i) =>{
  //   // const updatedTodo = 
  // }

  return (
    <div className="App">
      <div className="container">
         <h1>Todo App</h1>
        <form className="todoForm" onClick={handleSubmit}>
          <input
            type="text"
            value={list}
            placeholder="Add Todo"
            onChange={(e) => setList(e.target.value)}
          />
          <button type="submit" onClick={addTodo}>
            Add
          </button>
        </form>

        {todoList !== [] &&
          todoList.map((data, i) => (
            <ul className="allTodos" key={i}>
              <li className="singleTodo" >
                <span className="todoText">{data}</span>
                {/* <button onClick={() => updateTodo(i)}>Edit</button> */}
                {/* passing paramater key to removeTodo function so that we know which todo to delete */}
                <button onClick={() =>removeTodo(i)}>Delete</button>
              </li>
            </ul>
          ))}

         {
          todoList.length > 0 &&
          <button type="submit" onClick={removeAllTodo}>Remove All</button>
         }
      </div>
    </div>
  );
}

export default App;
