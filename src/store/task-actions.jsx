import { taskAction } from './tasks-reducer'; 

export const sendRequest = () => {
  return async (dispatch, getState) => {
    console.log('send dispatched')
    const { localTasks } = getState().tasks;
    const response = await fetch(
      'https://react-http-a5a71-default-rtdb.firebaseio.com/todo.json',
      {
        method: 'PUT',
        body: JSON.stringify(localTasks),
      }
    );
    if (!response.ok) {
      throw new Error('err');
    }
  };
};



export const fetchData = () => {
  return async (dispatch) => {
    console.log('fetchData dispatched');
    const response = await fetch(
      'https://react-http-a5a71-default-rtdb.firebaseio.com/todo.json'
    );
    if (!response.ok) {
      throw new Error('err');
    }
    const responseData = await response.json();
    if (
      !responseData ||
      !responseData.tasksList ||
      !responseData.numberOfTasks
    ) {
      const processedData = {
        tasksList: [],
        numberOfTasks: 0,
      };
      dispatch(taskAction.querytasks(processedData));
      return;
    }

    dispatch(taskAction.querytasks(responseData));
  };
};

