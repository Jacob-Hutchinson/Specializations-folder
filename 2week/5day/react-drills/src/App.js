import './App.css';
import TextApp from './components/App1'
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import App6 from './components/App6';
import App7 from './components/App7';
import App8 from './components/App8';
import App9 from './components/App9';
import App10 from './components/App10';
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
      <Route path='/app4'>
      <App4 />
      </Route>
      <Route path='/app5'>
      <App5 />
      </Route>
      <Route path='/app6'>
      <App6 />
      </Route>
      <Route path='/app7'>
      <App7 />
      </Route>
      <Route path='/app8'>
      <App8 />
      </Route>
      <Route path='/app9'>
      <App9 />
      </Route>
      <Route path='/app10'>
      <App10 />
      </Route>
    </div>
  );
}

export default App;
