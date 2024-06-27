import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

function Taskdetails() {
  const { id } = useParams();
  const task = useSelector((state) =>
    state.task.tasks.find((task) => task.id === parseInt(id))
  );
  const navigate = useNavigate();
  return (
    <>
      <header></header>

     {task && 
      <main>
      <div className="addTask">
        <label htmlFor="nttitle">
          Title :{task.title}
          {/* <input type="text" id="title" name="title" /> */}
        </label>
        <label htmlFor="ntdescription" className="ntdescription">
          Desciption :{task.description}
          {/* <textarea id="ntdescription" name="ntdescription"></textarea> */}
        </label>
        <label htmlFor="category" className={task.category}>
          Category: {task.category}
        </label>
        <label htmlFor="savebtn">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Save
          </button>
        </label>
        <label htmlFor="edit">
          <Link to={`/edittask/${task.id}`}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
        </label>
      </div>
    </main>
     }
      <footer>
        <section className="h1">About This Exisiting Task</section>
      </footer>
    </>
  );
}

export default Taskdetails;
