import { createSlice } from '@reduxjs/toolkit';

const initial_state = {
  localTasks: {
    tasksList: [],
    numberOfTasks: 0,
  },
  remoteTasks: {
    tasksList: [],
    numberOfTasks: 0,
  },
};


const taskSlice = createSlice({
  name: 'tasks',
  initialState: initial_state,
  reducers: {
    querytasks(state, action) {
      state.remoteTasks = action.payload;
    },
    addTask(state, action) {
      const updatedTasksList = [action.payload, ...state.localTasks.tasksList];
      state.localTasks = {
        tasksList: updatedTasksList,
        numberOfTasks: updatedTasksList.length,
      };
    },

    removeTask(state, action) {
      state.localTasks.tasksList = state.localTasks.tasksList.filter(
        (task) => task.id !== action.payload
      );
      state.localTasks.numberOfTasks -= 1;
    },
  },
});



export const taskAction = taskSlice.actions;
export default taskSlice.reducer;
