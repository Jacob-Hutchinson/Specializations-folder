import './App.css';
import TextApp from './components/App1'
import App2 from './components/App2';
import App3 from './components/App3';
import Header from './components/Header';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>React Drills page</h1>
      <Header />
      <Route path='/app1'>
      <TextApp />
      </Route>
      <Route path='/app2'>
      <App2 />
      </Route>
      <Route path='/app3'>
      <App3 />
      </Route>
    </div>
  );
}

export default App;
