import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";
import TodoList from "./components/TodoNew";
import Filter from "./components/FilterBox";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <h2>Make List</h2>
          <ul>
            <li>
              <Link to="/" Todo>
                TODO
              </Link>
            </li>
            <li>
              <Link to="/todolist">TODO LIST</Link>
            </li>
            <li>
              <Link to="/filter">FILTER</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
