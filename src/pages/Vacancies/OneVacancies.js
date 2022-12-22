import React,{useEffect} from 'react';
import {BiArrowBack} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'
import {Navigate, useNavigate, useParams} from "react-router-dom";
import './OneVacancies.scss'
import {useDispatch, useSelector} from "react-redux";


import axios from "../../utils/axios";
import {getOneVacancies} from "../../redux/reducers/oneVacancies";

const OneVacancies = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const params = useParams()

    const {oneVacancies, status ,error} = useSelector((store) => store.oneVacancies )

    useEffect(() => {
        dispatch(getOneVacancies(params.id))
    }, [])


    if (status === 'error') {
        return <Navigate to='/vacancies'/>
    }

    const deleteVacancies = () => {
        axios.delete(`vacancies/${oneVacancies._id}`)
            .then(() => navigate('/vacancies'))
            .catch(() => alert('не удалось удалить'))
    }

    console.log(oneVacancies)
    return (
        <section className='one-vacancies'>
            <div className="one-vacancies container">
                <h4 className='one-vacancies__back' onClick={()=>navigate(-1)}>
                    <span className='one-vacancies__arrow'><BiArrowBack/></span>
                    К списку вакансий
                </h4>
                <div className='one-vacancies__card'>
                    <h2 className='one-vacancies__title'>
                        {oneVacancies.title}
                        <span className='one-vacancies__icon'><GoLocation className='one-vacancies__logo'/> {oneVacancies.branch}</span>
                    </h2>
                    <h3 className='one-vacancies__task-text'>Будущие задачи:</h3>
                    <ul className='one-vacancies__tasks'>
                        {oneVacancies.responsibilities && oneVacancies.responsibilities.map((item) => (
                            <li key={item.id} className='one-vacancies__task'>
                                {item.text}
                            </li>
                        ))}
                    </ul>
                    <h3 className='one-vacancies__requirements'>Требования:</h3>
                    <ul>
                        {
                            oneVacancies.requirement && oneVacancies.requirement.map((item) => (
                                <li key={item.id} className='one-vacancies__requirement'>{item.text}</li>
                            ))
                        }
                    </ul>
                    <div className='one-vacancies__btns'>
                        <button className='one-vacancies__delete' onClick={deleteVacancies}>Удалить</button>
                        <button className='one-vacancies__change' onClick={() => navigate(`/vacancies/edit/${oneVacancies._id}`)}>Изменить</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneVacancies;