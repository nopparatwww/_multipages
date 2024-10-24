import "./Todo.css";
import { fetchTodos } from "../../data/todos";
import { useState } from "react";
import { useEffect } from "react";

function Todo() {
  //todoRaw
  const [todosRaw, setTodosRaw] = useState([]);
  //filter
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  //todo
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(5);
  const [curPage, setCurPage] = useState(1);
  const [numPage, setNumPage] = useState(1);

  //display
  useEffect(() => {
    console.log("onlyWaiting: ${onlyWaiting}");
  }, [onlyWaiting]);

  // useEffect(() => {
  //   console.log("itemPerPage:${itemPerPage}");
  //   setNumPage(Math.ceil(todos.length / itemPerPage));
  // }, []);

  useEffect(() => {
    if (onlyWaiting) {
      setTodos(todosRaw.filter((todo) => !todo.completed));
    } else {
      setTodos(todosRaw);
    }
    setTodosRaw(fetchTodos());
  }, []); //load data

  useEffect(() => {
    // curPage > numPage ? setCurPage(numPage) : null;
    // // setCurPage((p) => 
    // //   (p > numPage ? numPage : p)
    // // );
    setCurPage(1);
  }, [numPage]);

  useEffect(() => {
    console.log("page: ${page}");
    setNumPage(Math.ceil(todosRaw.length / page));
  }, [page, todosRaw]);
  useEffect(() => {}, [todosRaw]);

  useEffect(() => {
    // console.log(todosRaw);
    if (onlyWaiting) {
      setTodos(todosRaw.filter((todo) => todo.completed === false));
    } else {
      setTodos(todosRaw);
    }
  }, [todosRaw, onlyWaiting, page]); //***bypass filters */

  return (
    <div className="todo-container">
      {/* filter */}
      <div className="todo-filter-container">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={(e) => {
              setOnlyWaiting(e.target.checked);
            }}
            // checked
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            Show only waiting
          </label>
        </div>
        <select
          className="form-select"
          aria-label="Default select example"
          defaultValue={5}
          style={{ width: "200px" }}
          onChange={(e) => {
            setPage(e.target.value);
          }}
        >
          <option value={5} selected>
            5 items per page
          </option>
          <option value={10}>10 items per page</option>
          <option value={50}>50 items per page</option>
          <option value={100}>100 items per page</option>
        </select>
      </div>
      {/* table */}
      <table className="table table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Titles</th>
            <th style={{ textAlign: "right" }}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todos.id}>
                <td>
                  <span className="badge text-bg-secondary">{todo.id}</span>
                </td>
                <td style={{ textAlign: "left" }}>{todo.title}</td>
                <td style={{ textAlign: "right" }}>
                  <span
                    className={
                      "badge " + (todo.completed ? "bg-success" : "bg-warning")
                    }
                  >
                    {todo.completed ? "done" : "waiting"}&nbsp;{" "}
                    <span
                      className={
                        "bi" + (todo.completed ? " bi-check" : " bi-clock")
                      }
                    ></span>
                  </span>
                  &nbsp;
                  <button className="btn btn-danger">
                    <span className="bi bi-trash"></span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* pagacontrol */}
      <div>
        <button
          className="btn btn-outline-primary todo-spacing"
          onClick={() => setCurPage(1)}
          disabled={curPage === 1}
        >
          First
        </button>
        <button
          className="btn btn-outline-primary todo-spacing"
          onClick={() => curPage > 1 && setCurPage(curPage - 1)}
        >
          Previous
        </button>
        <span className="todo-spacing">
          {curPage}&nbsp;/&nbsp;{numPage}
        </span>
        <button
          className="btn btn-outline-primary todo-spacing"
          onClick={() => {
            curPage < numPage && setCurPage(curPage + 1);
          }}
        >
          Next
        </button>
        <button
          className="btn btn-outline-primary todo-spacing"
          onClick={() => setCurPage(numPage)}
          disabled={curPage === numPage}
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Todo;
