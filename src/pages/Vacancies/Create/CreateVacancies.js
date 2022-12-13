import React from 'react';
import './Create.scss'
import {useNavigate} from "react-router-dom";
const CreateVacancies = () => {
    const navigate = useNavigate()
    return (
        <section className='create-vacancies'>
            <div className="create-vacancies container">
                <button className='create-vacancies__back' onClick={()=>navigate(-1)}>Назад</button>
                <form className="create-vacancies__form">
                    <h2 className='create-vacancies__title'>Создание вакансии</h2>
                        <label htmlFor="">
                        <input type="text" placeholder='Введите название вакансии'/>
                        </label>
                        <h3>Будущие задачи</h3>
                        <label htmlFor="">
                            <input type="text" placeholder='введите задачу'/>
                            <button>добавить еще 1</button>
                        </label>
                        <h3>Требования</h3>
                        <label htmlFor="">
                            <input type="text" placeholder='введите требование'/>
                            <button>добавить еще 1</button>
                        </label>



                </form>
            </div>
        </section>
    );
};

export default CreateVacancies;