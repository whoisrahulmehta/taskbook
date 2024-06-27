import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../store/features/Taskslice";

function Addtask() {
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
      <main>
        <div className="addTask">
          <label htmlFor="nttitle">
            Add a Title
            <input type="text" id="title" name="title" onChange={(e)=>setNewTask(e.target.value)}/>
          </label>
          <label htmlFor="ntdescription" className="ntdescription" >
            Desciption
            <textarea id="ntdescription" name="ntdescription" onChange={(e)=>setDescription(e.target.value)}></textarea>
          </label>
          <label htmlFor="category" onChange={(e)=>setCategory(e.target.value)}>
            Select a Category
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
      <footer>
        <section className="h1">Add a New Task</section>
      </footer>
    </>
  );
}

export default memo( Addtask);
