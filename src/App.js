import './App.css';
import Login from './Login'
import Products from './Products'
import MyContextProvider from './context/myContext';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
      <Products />
    </MyContextProvider>
    </div>
  );
}

export default App;
