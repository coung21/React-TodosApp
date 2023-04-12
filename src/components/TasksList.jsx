import React, { useEffect, useState } from 'react';
import Task from './Task';
import AddForm from './AddForm';
import '../utils/animations/fade.css';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { sendRequest, fetchData } from '../store/task-actions';

function TasksList() {
  const { localTasks } = useSelector((state) => state.tasks);
  const isAddingForm = useSelector((state) => state.taskUI.isAddingForm);
  const tasksList = useSelector((state) => state.tasks.remoteTasks.tasksList);

  const dispatch = useDispatch();
  const [isIni, setIsIni] = useState(true);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (!isIni) {
      dispatch(sendRequest());
    } else {
      setIsIni(false);
    }
  }, [localTasks]);

  return (
    <ul className='py-10'>
      <CSSTransition
        in={isAddingForm}
        timeout={500}
        classNames='fade'
        unmountOnExit
      >
        <AddForm />
      </CSSTransition>
      {tasksList.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.taskName}
          time={task.time}
        />
      ))}
    </ul>
  );
}

export default TasksList;
