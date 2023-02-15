import React, {useEffect} from 'react';
import "./Events.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toDate} from "../../utils/formatDate";

import {getEvents} from "../../redux/reducers/events";
import axios from "../../utils/axios";
import {toast, ToastContainer} from "react-toastify";

const Events = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {data, error, status, filter} = useSelector((s) => s.events )

    useEffect(() => {
        dispatch(getEvents(filter))
    }, [filter])


    const deleteEvents = (id) => {
      axios.delete(`events/${id}`)
          .then(() => {
              toast('Баннер удалён')
              dispatch(getEvents(filter))
          })
          .catch(() => toast('Не удалось удалить баннер'))
    }

    return (
        <section className="banners">
           <div className="container">
               <div className="banners__bar">
                   <button className="events__add banners__btn banners__btn_green" onClick={() => navigate(`/events/create`)}>
                       Создать баннер
                   </button>
               </div>
               {error.length ? <div>
                   <h2 className='users__error'>{error}</h2>
                   <p>На экране выведен старый список баннеров</p>
               </div> : ''}
               <div className="banners__content">
                   {
                       status === 'loading' ? '' : data.map((item) => (
                           <div  className='banner' key={item._id}>
                                   <h3 className='banner__title'>{item.title}</h3>
                                   <h3 className='banner__title'>{item.title2}</h3>


                               <p className='banner__description'>{item.text}</p>

                               <button onClick={() => deleteEvents(item._id)} type='button' className='banner__del banners__btn banners__btn_red'>Удалить</button>
                           </div>
                       ))
                   }
               </div>
           </div>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </section>
    );
};

export default Events;