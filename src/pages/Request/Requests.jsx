import React, {useEffect} from 'react';
import "./Request.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRequests} from "../../redux/reducers/requests";
import {toDate} from "../../utils/formatDate";
import '../../components/BranchMenu/branch.scss'
import axios from "../../utils/axios";
import {toast, ToastContainer} from "react-toastify";



const Requests = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, error, status, filter} = useSelector((s) => s.requests )

    useEffect(() => {
        dispatch(getRequests(filter))

    }, [filter])

    const deleteRequest = (id) => {
        axios.delete(`request/${id}`)
            .then(() => {
                toast('Заявка удалена')
                dispatch(getRequests(filter))
            })
            .catch(() => toast('Не удалось удалить заявку'))
    }


    return (
        <section className="requests">
         <div className="container">
             <div className="requests__content">
                 <div className='requests__row'>
                     {
                         data.map((item) => (
                             <div  className='requests__card' key={item._id}>
                                 <div className='requests__card-top'>
                                     <h3 className='requests__card-title'>{item.name}</h3>

                                     <p className='requests__card-time'>{toDate(item.createdAt)}</p>
                                 </div>
                                 <p className='requests__card-text'>{item.phone}</p>

                                 <p className='requests__card-text'>{item.text}</p>

                                 <button onClick={() => deleteRequest(item._id)} type='button' className='requests__card-del'>Удалить</button>
                                 <p className='requests__card-goal'>{item.goal}</p>
                             </div>
                         ))
                     }
                 </div>
                 <ul className='branch__menu'>


                     {/*{*/}
                     {/*    branchMenuData.map((item, idx) => (*/}
                     {/*            <li className={`branch__item ${filter.branch === item.branch ? 'active' : ''}`}>*/}
                     {/*                {item.text}*/}
                     {/*            </li>*/}
                     {/*        )*/}
                     {/*    )*/}
                     {/*}*/}
                 </ul>

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

export default Requests;