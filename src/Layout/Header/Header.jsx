import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {MdAccountCircle} from 'react-icons/md'
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../../redux/reducers/user";


const Header = () => {
    const location = useLocation()
    const {user} = useSelector((store) => store.user )

    const dispatch = useDispatch()

    const getLocationName = () => {
        switch (location.pathname) {
            case '/' : {
                return 'Главная'
            }
            case '/users' : {
                return 'Пользователи'
            }
            case '/tickets' : {
                return 'Билеты'
            }
            case '/banners' : {
                return 'Баннеры'
            }
            case '/orders' : {
                return 'Покупки'
            }
            case '/vacancies' : {
                return 'Вакансии'
            }
            case '/gallery' : {
                return 'Галерея'
            }
            case '/video' : {
                return 'Видео'
            }
            case '/reviews' : {
                return 'Отзывы'
            }
            case '/requests' : {
                return 'Заявки'
            }
        }
    }

    const roleName = () => {
        switch (user.role) {
            case 'admin' : {
                return 'Администратор'
            }
            case 'operator' : {
                return 'Оператор'
            }
            case 'specialist' : {
                return 'Специалист'
            }
            case 'manager' : {
                return 'Менеджер'
            }
        }
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h2 className='header__title'>
                        {
                           getLocationName()
                        }
                    </h2>
                    <div className='header__right'>
                        <span className='header__icon'>
                        <MdAccountCircle/>
                    </span>
                        <div className='header__users'>
                            <p className='header__users-name'>{user.surname} {user.name}</p>
                            <p className='header__users-role'>{roleName()}</p>
                        </div>

                        <div className='header__show'>
                            <div className='header__show-top'>
                                <h3 className='header__show-role'>{roleName()}</h3>
                                <h3 className='header__show-name'>{user.surname} {user.name}</h3>
                            </div>
                            <div className='header__show-list'>
                                <Link className='header__show-link' to='/profile'>My Profile</Link>
                                <Link className='header__show-link' to='/setting'>Setting</Link>
                                <Link className='header__show-link' to='/login' onClick={() => {
                                    dispatch(logOutUser())
                                }}>Log Out</Link>
                            </div>
                        </div>

                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;