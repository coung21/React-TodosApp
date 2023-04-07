import React from 'react'
import Task from './Task'
import AddForm from './AddForm';
import '../utils/animations/fade.css';
import { useSelector } from 'react-redux';
import { CSSTransition, } from 'react-transition-group';

function TasksList() {
  const isAddingForm = useSelector(state => state.taskUI.isAddingForm)
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
      <Task></Task>
      <Task></Task>
      <Task></Task>
    </ul>
  );
}

export default TasksList