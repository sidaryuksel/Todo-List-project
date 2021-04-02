import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div >
      <header>
        <h5>Sidar Yuksel project</h5>
        </header>
        <header>
        <h2>Todo List</h2>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
