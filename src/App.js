import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoDetail from './components/TodoDetail'
import Home from './components/Home'

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={Form} />
          <Route path='/form' component={TodoList} />
          <Route path='/tododetail' component={TodoDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
