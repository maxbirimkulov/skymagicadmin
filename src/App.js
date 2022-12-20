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
import OneBanner from "./pages/Banners/OneBanner/OneBanner";
import OneVacancies from "./pages/Vacancies/OneVacancies";
import Gallery from "./pages/Gallery/Gallery";
import CreatePhoto from "./pages/Gallery/CreatePhoto/CreatePhoto";
import OnePhoto from "./pages/Gallery/OnePhoto/OnePhoto";
import CreateVacancies from "./pages/Vacancies/Create/CreateVacancies";
import Video from "./pages/Video/Video";
import OneVideo from "./pages/Video/OneVideo/OneVideo";
import CreateVideo from "./pages/Video/CreateVideo/CreateVideo";



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
                <Route path={'vacancies/create'} element={<CreateVacancies/>}/>
                <Route path={'banners'} element={<Banners/>}/>
                <Route path={'banners/create'} element={<Create/>}/>
                <Route path={'banners/edit/:id'} element={<OneBanner/>}/>
                <Route path={'gallery'} element={<Gallery/>}/>
                <Route path={'gallery/create'} element={<CreatePhoto/>}/>
                <Route path={'gallery/edit/:id'} element={<OnePhoto/>}/>
                <Route path={'video'} element={<Video/>}/>
                <Route path={'video/edit:id'} element={<OneVideo/>}/>
                <Route path={'video/create'} element={<CreateVideo/>}/>


            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>


        </Routes>
    </div>
  );
}

export default App;
