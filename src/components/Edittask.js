import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTask, deleteTask } from "../store/features/Taskslice";

function Edittask() {
  const { id } = useParams();
  const task = useSelector((state) => state.task.tasks.find(task => task.id === parseInt(id)));

    function formatDate(date) {
      const optionsDate = { day: '2-digit', month: 'short', year: 'numeric' };
      const optionsTime = { hour: '2-digit', minute: '2-digit' };
      const formattedDate = new Date(date).toLocaleDateString('en-GB', optionsDate);
      const formattedTime = new Date(date).toLocaleTimeString('en-GB', optionsTime);
      return `${formattedDate} ${formattedTime}`;
    }


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[newTask, setNewTask] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('')
  // console.log(newTask);
  
    const handleSave=() =>{
      const currentTime = formatDate(Date.now());
      dispatch(deleteTask(task.id));
  if(newTask){
    dispatch(addTask({
      id: Date.now(),
      title: newTask,
      description: description,
       category  :category,
       time: currentTime
    }))
  }
  
      navigate('/');
    }

  return (
    <>
      <header></header>

     {task && 
      <main>
        <div className="addTask">
          <label htmlFor="nttitle">
            Change Title from : <b style={{color:'gold'}}> 
            {task.title}
            </b>
            <input type="text" id="title" name="title"  onChange={(e)=>setNewTask(e.target.value)}/>
          </label>
          <label htmlFor="ntdescription" className="ntdescription" >
            Change Desciption from : <b style={{color:'gold'}}> 
            {task.description}
            </b>
            <textarea id="ntdescription" name="ntdescription" onChange={(e)=>setDescription(e.target.value)}></textarea>
          </label>
          <label htmlFor="category" onChange={(e)=>setCategory(e.target.value)}>
            Change Category from : <b style={{color:'gold'}}> 
            {task.category}
            </b>
            <select id="mySelect">
            <option value="Others">Select</option>
              <option value="Work">Work</option>
              <option value="Home">Home </option>
              <option value="WellBeing">WellBeing</option>
              <option value="Important">Important </option>
              <option value="Fitness">Fitness</option>
              <option value="Health">Health</option>
              <option value="MentalHealth">MentalHealth</option>
              <option value="Personal">Personal</option>
            </select>
          </label>
          <label htmlFor="savebtn">
            <button type="submit" onClick={handleSave}>Save</button>
          </label>
        </div>
    </main>
     }
      <footer>
        <section className="h1">Edit Exisiting Task</section>
      </footer>
    </>
  );
}

export default Edittask ;
