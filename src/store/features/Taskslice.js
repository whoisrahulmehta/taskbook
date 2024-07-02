import { createSlice } from "@reduxjs/toolkit";

// Function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load tasks from local storage", e);
        return [];
    }
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
    try {
        const serializedState = JSON.stringify(tasks);
        localStorage.setItem('tasks', serializedState);
    } catch (e) {
        console.warn("Could not save tasks to local storage", e);
    }
};

const initialState = {
    tasks: loadTasksFromLocalStorage(),
};

const Taskslice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            saveTasksToLocalStorage(state.tasks);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
            saveTasksToLocalStorage(state.tasks);
        },
        updateTask: (state, action) => {}
    }
});

console.log("Actions", Taskslice);
export const { addTask, deleteTask, updateTask } = Taskslice.actions;
export default Taskslice.reducer;
