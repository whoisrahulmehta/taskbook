import { configureStore } from "@reduxjs/toolkit";
import Taskslice from "./features/Taskslice";


// for offline no save store 
export const store = configureStore({
    reducer : {
        task : Taskslice,
    }
})

//for local storage
// import { configureStore } from "@reduxjs/toolkit";
// import Taskslice from "./features/Taskslice";

// // Function to load tasks from local storage
// const loadTasksFromLocalStorage = () => {
//   try {
//     const serializedTasks = localStorage.getItem("tasks");
//     if (serializedTasks === null) {
//       return [];
//     }
//     return JSON.parse(serializedTasks);
//   } catch (err) {
//     console.error("Error loading tasks from local storage:", err);
//     return [];
//   }
// };

// const preloadedState = {
//   task: {
//     tasks: loadTasksFromLocalStorage(), // Initialize state with tasks from local storage
//   },
// };

// export const store = configureStore({
//   reducer: {
//     task: Taskslice,
//   },
//   preloadedState,
// });

