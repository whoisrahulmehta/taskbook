import { faCheckCircle, faEdit, faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../store/features/Taskslice";
function Tasks() {
  const dispatch = useDispatch();

  // const [tasks, setTasks] = useState([
  //   {
  //     heading: "Meeting with Team",
  //     description: "Discuss project milestones and deadlines.",
  //     time: "2024-06-26 10:00 AM",
  //     category: "Work",
  //   },
  //   {
  //     heading: "Doctor's Appointment",
  //     description: "Annual check-up with Dr. Smith.",
  //     time: "2024-06-26 2:00 PM",
  //     category: "Health",
  //   },
  //   {
  //     heading: "Grocery Shopping",
  //     description: "Buy ingredients for dinner.",
  //     time: "2024-06-26 5:00 PM",
  //     category: "Personal",
  //   },
  //   {
  //     heading: "Gym Workout",
  //     description: "Cardio and strength training session.",
  //     time: "2024-06-26 7:00 PM",
  //     category: "Fitness",
  //   },
  // ]);
  const tasks = useSelector((state) => state.task.tasks);// state then property of store and then property of slice methood name
 const handleRemoveTask = (id) => {
  dispatch(deleteTask(id ));
  console.log("delete" , id)
};

  console.log("rendered tasks");

  return (
    <>
      {" "}
      {tasks.length === 0 ? (
        <div className="task">
          <p className="tasktitle">
            <span className="taskcategory">Task-Category</span>
            <span className="taskaddtime">28-Sep-1999 11:11</span>
          </p>
          <p className="taskheading">
            Your Task Will Apeear here ! Happy Tasking
          </p>
          <p className="actionbtns">
            <span>
              <FontAwesomeIcon icon={faEye} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
            <span>
              <FontAwesomeIcon icon={faEdit} />
            </span>
          </p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <p className="tasktitle">
              <span className={`${task.category} taskcategory`}>{task.category}   </span>
              <span className="taskaddtime">{task.time}</span>
            </p>
            <p className="taskheading">{task.title}</p>
            <p className="actionbtns">
              <span>
              <Link to={`/taskdetails/${task.id}`}>
               <FontAwesomeIcon icon={faEye} />
                </Link>
              </span>
              <span onClick={() => handleRemoveTask(task.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              <span>
                <Link to={`/edittask/${task.id}`}>
                <FontAwesomeIcon icon={faEdit} />
                </Link>
              </span>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </p>
          </div>
        ))
      )}    
    </>
  );
}

export default memo(Tasks);

