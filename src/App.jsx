import React from 'react'
import './App.css'
import Card from './layout/Card'
import Header from './components/Header'
import TasksList from './components/TasksList'

function App() {

  return (
    <div className="App">
      <Card>
        <Header />
        <TasksList/>
      </Card>
    </div>
  )
}

export default App
