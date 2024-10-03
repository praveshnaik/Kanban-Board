import logo from './logo.svg';
import './App.css';
import { Taskboards } from './Taskboards';

function App() {
  return (
    <div className="App">
      <div className='h1'>Kanban Board</div>
      <p>A place to organise tasks to completion as well as add new ones and delete old ones.</p>
      <hr/>
      <Taskboards/>
    </div>
  );
}
  
export default App;
