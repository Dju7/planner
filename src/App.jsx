import Nav from "./components/Nav";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/home";
import Calendar from "./pages/calendar";
import Todo from "./pages/todo";
import Header from "./components/header";
import Meal from "./pages/meal";

function App() { 

  return (
    <>
    <Header />
    <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/calendar" element = {<Calendar/>}/>
        <Route path="todo" element = {<Todo/>}/>
        <Route path="meal" element = {<Meal/>}/>
      </Routes>
    </>
  )
}

export default App
