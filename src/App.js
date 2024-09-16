import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer';

// import User from './components/User';

function App() {
  return (
    <div className="App">
      {/* <User data={{name:"anujsharma", age:"25"}}/> */}
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
