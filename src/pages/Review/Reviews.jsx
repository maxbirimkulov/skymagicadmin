import React, {useEffect} from 'react';
import "./Review.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toDate} from "../../utils/formatDate";

import {getReviews} from "../../redux/reducers/reviews";
import axios from "../../utils/axios";
import {toast, ToastContainer} from "react-toastify";

const Reviews = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {data, error, status, filter} = useSelector((s) => s.reviews )

    useEffect(() => {
        dispatch(getReviews(filter))

    }, [filter])


    const deleteReview = (id) => {
      axios.delete(`review/${id}`)
          .then(() => {
              toast('Отзыв удален')
              dispatch(getReviews(filter))
          })
          .catch(() => toast('Не удалось удалить отзыв'))
    }

    return (
        <section className="reviews">
           <div className="container">
               <div className="reviews__content">
                   {
                       data.map((item) => (
                           <div  className='reviews__card' key={item._id}>
                               <div className='reviews__card-top'>
                                   <h3 className='reviews__card-title'>{item.name}</h3>
                                   <p className='reviews__card-time'>{toDate(item.createdAt)}</p>
                               </div>

                               <p className='reviews__card-text'>{item.text}</p>

                               <button onClick={() => deleteReview(item._id)} type='button' className='reviews__card-del'>Удалить</button>
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

export default Reviews;