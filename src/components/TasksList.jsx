import React from 'react'
import Task from './Task'
import AddForm from './AddForm';
import '../utils/animations/fade.css';
import { useSelector } from 'react-redux';
import { CSSTransition, } from 'react-transition-group';
import { DUMMY_DATA } from '../utils/dummy_data';

function TasksList() {
  const isAddingForm = useSelector(state => state.taskUI.isAddingForm)
  const tasksList = useSelector(state => state.tasks.tasksList) 
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
      {tasksList.map(task => <Task key={task.id} id={task.id} name={task.taskName} time={task.time}/>)}
    </ul>
  );
}

export default TasksList