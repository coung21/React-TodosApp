import { createSlice } from '@reduxjs/toolkit';

const initial_State = {
  isAddingForm: false,
  isFinished: false
}

const taskUiSlice = createSlice({
  name: 'UiSlice',
  initialState: initial_State,
  reducers: {
    AddForm(state, action){
      state.isAddingForm = action.payload
    },
    finishForm(state){
      state.isFinished = !state.isFinished
    }
  }
})

export const taskUiAction = taskUiSlice.actions

export default taskUiSlice.reducer