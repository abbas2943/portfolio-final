// import logo from './logo.svg';
import AppCSS from "./App.module.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from "./components/Header";
import MainBody from "./components/mainBody";
import LeftNav from "./components/LeftNav";
import RightNav from "./components/RightNav";
// import MyFooder from "./components/Footer";

function App() {
  return (
    <div className={AppCSS.App}>
      <header className={AppCSS.AppHeader}>
        <MyHeader/>
      </header>
      <main>
        <LeftNav />
        <MainBody />
        <RightNav />
      </main>      
    </div>
  );
}

export default App;
