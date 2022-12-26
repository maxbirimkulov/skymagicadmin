import React, {useEffect} from 'react';
import "./Click.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toDate} from "../../utils/formatDate";

import {getClick} from "../../redux/reducers/click";
import {toast, ToastContainer} from "react-toastify";
import {changeBranch} from "../../redux/reducers/click";
import BranchMenuClick from "../../components/BranchMenuClick/BranchMenuClick";

const Click = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, error, status, filter} = useSelector((s) => s.click )

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
                        <td className='table__col'>{data.length}</td>
                    </tr>
                    {data.map((item) => (
                        <tr className='table__row'>
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