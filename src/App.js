import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import './styles/style.scss'
import Home from "./pages/Home/Home";
import Vacancies from "./pages/Vacancies/Vacancies";
import Tickets from "./pages/Tickets/Tickets";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import Banners from "./pages/Banners/Banners";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import OneUser from "./pages/Users/OneUser";
import Create from "./pages/Banners/Create/Create";
import OneVacancies from "./pages/Vacancies/OneVacancies";
import CreateVacancies from "./pages/Vacancies/Create/CreateVacancies";


function App() {
  return (
    <div className="App">

        <Routes>


            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'vacancies'} element={<Vacancies/>}/>
                <Route path={'tickets'} element={<Tickets/>}/>
                <Route path={'orders'} element={<Orders/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'users/:id'} element={<OneUser/>}/>
                <Route path={'vacancies/:id'} element={<OneVacancies/>}/>
                <Route path={'banners'} element={<Banners/>}/>
                <Route path={'banners/create'} element={<Create/>}/>
                <Route path={'vacancies/create'} element={<CreateVacancies/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>


        </Routes>
    </div>
  );
}

export default App;
