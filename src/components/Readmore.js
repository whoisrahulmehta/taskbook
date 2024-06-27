import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteTask } from "../store/features/Taskslice";

function Readmore() {
  console.log("readmore page is rendered");
  const { id } = useParams();
  const task = useSelector((state) => state.task.tasks.find(task => task.id === parseInt(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!task) {
    return <div>Task not found</div>;
  }

  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
    navigate('/');
  };

  return (
    <>
      <main>
        <div className="readTask">
          <label htmlFor="nttitle">{task.title}</label>
          <label htmlFor="ntdescription" className="ntdescription">
            {task.description}
          </label>
          <label htmlFor="category">{task.category}</label>
          <div className="editor">
            <Link to={`/edittask/${task.id}`}>
              <button type="button">
                Edit <FontAwesomeIcon icon={faEdit} />
              </button>
            </Link>
            <button type="button" onClick={handleDelete}>
              Delete <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </div>
      </main>
      <footer>
        <section className="h1">Added on {task.time}</section>
      </footer>
    </>
  );
}

export default Readmore;
