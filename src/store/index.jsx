import { configureStore } from '@reduxjs/toolkit';
import taskUI from './taskUI-reducer'

const store = configureStore({
  reducer: {taskUI: taskUI}
})

export default store