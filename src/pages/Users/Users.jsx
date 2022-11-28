import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../redux/reducers/users";
import './user.scss'
import ContentLoader from "../../components/ContentLoader/ContentLoader";
import {useNavigate} from "react-router-dom";


const Users = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {data, error, status, dataLength} = useSelector((store) => store.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [])




    return (
        <section className='users'>
            <div className="container">

                {error.length ? <div>
                    <h2 className='users__error'>{error}</h2>
                    <p>На экране выведен старый список пользователей</p>
                </div> : ''}

                {
                    status === 'loading' ? <ContentLoader/> :  <table className='table'>
                        <thead className='table__header'>
                        <tr className='table__row'>
                            <th className='table__col'>ID пользователя</th>
                            <th className='table__col'>Email</th>
                            <th className='table__col'>Логин</th>
                            <th className='table__col'>ФИО</th>
                            <th className='table__col'>Возраст</th>
                            <th className='table__col'>Телефон</th>
                            <th className='table__col'>Статус</th>
                            <th className='table__col'>Действие</th>
                            <th className='table__col'></th>
                        </tr>
                        </thead>
                        <tbody className='table__body'>
                        {data.map((item) => (
                            <tr className='table__row'>
                                <td className='table__col'>{item._id}</td>
                                <td className='table__col'>{item.email}</td>
                                <td className='table__col'>{item.login}</td>
                                <td className='table__col'>{item.surname} {item.name}</td>
                                <td className='table__col'>{item.age}</td>

                                <td className='table__col'>
                                    <a href={`tel:${item.phone}`}>{item.phone}</a>
                                </td>
                                <td className='table__col'>Активный</td>
                                <td className='table__col'>
                                    <button className='table__del'>Заблокировать</button>
                                </td>
                                <td className='table__col'>
                                    <button className='table__more' onClick={() => navigate(`/users/${item._id}`)}>Подробнее</button>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                        <tfoot className='table__footer'></tfoot>
                    </table>
                }


            </div>
        </section>
    );
};

export default Users;