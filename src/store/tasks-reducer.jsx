import { createSlice  } from '@reduxjs/toolkit';




const initial_state = {
  tasksList : [],
  numberOfTasks : 0
}

const taskSlice = createSlice({
  name:'tasks',
  initialState: initial_state,
  reducers: {
    addTask(state, action){
      state.tasksList.unshift(action.payload)
      state.numberOfTasks += 1
    },
    removeTask(state, action){
      state.tasksList = state.tasksList.filter(task => task.id !== action.payload)
      state.numberOfTasks -= 1
    }
  }
})

export const taskAction = taskSlice.actions
export default taskSlice.reducer