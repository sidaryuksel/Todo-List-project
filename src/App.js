import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { BrowserRouter, Route } from 'react-router-dom'
import TodoDetail from './components/TodoDetail'
import Todo from './components/Todo'

function App() {
  return (
    <BrowserRouter>
      <div >
        <header>
          <h5>Sidar Yuksel project</h5>
        </header>
        <header>
          <h2>Todo List</h2> 
        </header>
        <Route exact path='/' component={Form} />
        <Route exact path='/' component={TodoList} />
        <Route path='/tododetail' component={TodoDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
