import { createSlice } from "@reduxjs/toolkit";
// import { addTask 

const initialState = {
    tasks:[],

}
const Taskslice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask :(state, action)=>{
            state.tasks.push(action.payload)
console.log(action.payload);

        },
        deleteTask : (state, action)=>{
            state.tasks = state.tasks.filter((task)=>task.id !== action.payload)
        },
        updateTask : (state, action) =>{}
    }
})

console.log("Actions" , Taskslice);
export const {addTask, deleteTask , updateTask} = Taskslice.actions;
export default Taskslice.reducer ; // for offline no saver 


