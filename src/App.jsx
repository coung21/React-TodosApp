import React from 'react'
import './App.css'
import Card from './layout/Card'
import Header from './components/Header'
import TasksList from './components/TasksList'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Card>
        <Header />
        <TasksList/>
      </Card>
    </div>
    </Provider>
  )
}

export default App
