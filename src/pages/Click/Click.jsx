import React, {useEffect} from 'react';
import "./Click.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toDate} from "../../utils/formatDate";

import {changeTime, getClick} from "../../redux/reducers/click";
import {toast, ToastContainer} from "react-toastify";
import {changeBranch} from "../../redux/reducers/click";
import BranchMenuClick from "../../components/BranchMenuClick/BranchMenuClick";
import {filterClick} from "../../redux/reducers/selectors/clicks";

const Click = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, error, status, filter} = useSelector((s) => s.click )
    const clicks = useSelector(filterClick)

    useEffect(() => {
        dispatch(getClick(filter))

    }, [filter])

    // let arr = data.map(el => `${el.url}`)
    //     const getUnique = (arr) => {
    //         return arr.filter((el, ind) => ind === arr.indexOf(el));
    //     };
    //
    // console.log(getUnique(arr))
    return (
        <section className="click">
            <div className='click__filter'>
                <button onClick={() => dispatch(changeTime('day'))}  className={`click__filter-btn ${filter.time === 'day' ? 'active' :''}`}>За последний день</button>
                <button onClick={() => dispatch(changeTime('week'))}  className={`click__filter-btn ${filter.time === 'week' ? 'active' :''}`}>За последнию неделю</button>
                <button onClick={() => dispatch(changeTime('month'))}  className={`click__filter-btn ${filter.time === 'month' ? 'active' :''}`}>За последний месяц</button>
                <button onClick={() => dispatch(changeTime('all'))}  className={`click__filter-btn ${filter.time === 'all' ? 'active' :''}`}>За все время</button>
            </div>
            <div className="container">



                <table className='table'>
                    <thead className='table__header'>
                    <tr className='table__row'>
                        <th className='table__col'>Место клика</th>
                        <th className='table__col'>количество кликов</th>
                    </tr>
                    </thead>
                    <tbody className='table__body'>
                    <tr className='table__row'>
                        <td className='table__col'>Всего</td>
                        <td className='table__col'>{clicks.length}</td>
                    </tr>
                    {clicks.map((item) => (
                        <tr key={item._id} className='table__row'>
                            <td className='table__col'>{item.url}</td>
                            <td className='table__col'>{toDate(item.createdAt)}</td>
                        </tr>
                    ))}
                    </tbody>
                    <tfoot className='table__footer'></tfoot>
                </table>
                <BranchMenuClick changeBranch={changeBranch} route={'click'}/>
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

export default Click;