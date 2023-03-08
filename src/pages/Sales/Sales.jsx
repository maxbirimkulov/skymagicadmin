import React, {useEffect} from 'react';
import "./Sales.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getSales} from "../../redux/reducers/sales";
import {toast, ToastContainer} from "react-toastify";
const Events = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {data, error, status, filter} = useSelector((s) => s.sales )

    useEffect(() => {
        dispatch(getSales(filter))
    }, [filter])



    return (
        <section className="sales">
            <h2 className="sales__title">Акции и события</h2>
            <div className="container">
                <div className="sales__bar">
                    <button className="events__add banners__btn banners__btn_green" onClick={() => navigate(`/sales/create`)}>
                        Создать акцию
                    </button>
                </div>
                {error.length ? <div>
                    <h2 className='users__error'>{error}</h2>
                    <p>На экране выведен старый список акции</p>
                </div> : ''}
                <div className="sales__content">
                    {
                        status === 'loading' ? '' : data.map((item) => (
                            <div  className='sales__card' key={item._id}>
                                <div className="sales__img">
                                    <img src={`${process.env.REACT_APP_URL}${item.images}`} alt={item.title}/>
                                </div>
                                <div className='sales__card-top'>
                                    <h3 className='sales__card-title'>{item.title}</h3>
                                    <p className='sales__card-p'>{item.description}</p>
                                </div>
                                <p className='reviews__card-time'>{item.date}</p>
                                <div className="sales__btn-wrapper">
                                    <button
                                        className="sales__edit banners__btn banners__btn_blue" onClick={() => navigate(`/sales/${item._id}`)} >Подробнее
                                    </button>
                                </div>
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