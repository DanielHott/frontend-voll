import './App.css';
import Login from './Login'
import Products from './Products'
import ControlArea from './ControlArea';
import MyContextProvider from './context/myContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
      <ControlArea />
    </MyContextProvider>
    </div>
  );
}

export default App;
