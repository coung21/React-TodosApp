import { configureStore } from '@reduxjs/toolkit';
import taskUI from './taskUI-reducer'
import tasks from './tasks-reducer'

const store = configureStore({
  reducer: {taskUI: taskUI, tasks: tasks}
})

export default store