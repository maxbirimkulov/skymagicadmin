import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import './styles/style.scss'

import Vacancies from "./pages/Vacancies/Vacancies";
import Tickets from "./pages/Tickets/Tickets";
import Orders from "./pages/Orders/Orders";
import Users from "./pages/Users/Users";
import BottomBanners from "./pages/BottomBanners/BottomBanners";
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
import CreateVideo from "./pages/Video/CreateVideo/CreateVideo";
import Edit from "./pages/Banners/Create/Edit";
import EditVacancies from "./pages/Vacancies/Create/EditVacancies";
import Requests from "./pages/Request/Requests";
import Reviews from "./pages/Review/Reviews";
import Click from "./pages/Click/Click";
import Events from "./pages/Events/Events";
import CreateEvents from "./pages/Events/CreateEvents/CreateEvents";
import Sales from "./pages/Sales/Sales";
import OneSales from "./pages/Sales/OneSales/OneSales";
import CreateSales from "./pages/Sales/CreateSales/CreateSales";
import EditSales from "./pages/Sales/EditSales/EditSales";
import EditBottomBanner from "./pages/BottomBanners/Create/EditBottomBanner";
import Banners from "./pages/Banners/Banners";



function App() {
  return (
    <div className="App">

        <Routes>


            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Click/>}/>
                <Route path={'vacancies'} element={<Vacancies/>}/>
                <Route path={'tickets'} element={<Tickets/>}/>
                <Route path={'orders'} element={<Orders/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'users/:id'} element={<OneUser/>}/>
                <Route path={'vacancies/:id'} element={<OneVacancies/>}/>
                <Route path={'vacancies/create'} element={<CreateVacancies/>}/>
                <Route path={'vacancies/edit/:id'} element={<EditVacancies/>}/>
                <Route path={'banners'} element={<Banners/>}/>
                <Route path={'banners/create'} element={<Create/>}/>
                <Route path={'banners/:id'} element={<OneBanner/>}/>
                <Route path={'banners/edit/:id'} element={<Edit/>}/>
                <Route path={'gallery'} element={<Gallery/>}/>
                <Route path={'gallery/create'} element={<CreatePhoto/>}/>
                <Route path={'gallery/edit/:id'} element={<OnePhoto/>}/>
                <Route path={'video'} element={<Video/>}/>
                <Route path={'video/create'} element={<CreateVideo/>}/>
                <Route path={'requests'} element={<Requests/>}/>
                <Route path={'reviews'} element={<Reviews/>}/>
                <Route path={'events'} element={<Events/>}/>
                <Route path={'events/create'} element={<CreateEvents/>}/>
                <Route path={'sales'} element={<Sales/>}/>
                <Route path={'sales/create'} element={<CreateSales/>}/>
                <Route path={'sales/:id'} element={<OneSales/>}/>
                <Route path={'sales/edit/:id'} element={<EditSales/>}/>
                <Route path={'bottombanners'} element={<BottomBanners/>}/>
                <Route path={'bottombanners/change/:id'} element={<EditBottomBanner/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>


        </Routes>
    </div>
  );
}

export default App;
