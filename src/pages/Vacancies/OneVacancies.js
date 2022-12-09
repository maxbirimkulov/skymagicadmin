import React from 'react';
import './OneVacancies.scss'
import {BiArrowBack} from 'react-icons/bi'
import {GoLocation} from 'react-icons/go'

const OneVacancies = () => {
    return (
        <section className='one-vacancies'>
            <div className="one-vacancies container">
                <h4 className='one-vacancies__back'>
                    <span className='one-vacancies__arrow'><BiArrowBack/></span>
                    К списку вакансий

                </h4>
                <div className='one-vacancies__card'>
                    <h2 className='one-vacancies__title'>
                        Специалист по аренде и административно-хозяйственным вопросам
                        <span className='one-vacancies__icon'><GoLocation className='one-vacancies__logo'/> SKY-PARK</span>
                    </h2>
                    <h3 className='one-vacancies__task-text'>Будущие задачи:</h3>
                    <ul className='one-vacancies__tasks'>
                        <li className='one-vacancies__task'>
                            Обеспечение работников РО офисной мебелью, канцелярскими и хозяйственными товарами;
                        </li>
                        <li className='one-vacancies__task'>
                            Обеспечение работников РО офисной мебелью, канцелярскими и хозяйственными товарами;
                        </li>
                        <li className='one-vacancies__task'>
                            Обеспечение работников РО офисной мебелью, канцелярскими и хозяйственными товарами;
                        </li>
                        <li className='one-vacancies__task'>
                            Обеспечение работников РО офисной мебелью, канцелярскими и хозяйственными товарами;
                        </li>


                    </ul>
                    <h3 className='one-vacancies__requirements'>Требования:</h3>
                    <ul>
                        <li className='one-vacancies__requirement'>Высшее техническое образование;</li>
                        <li className='one-vacancies__requirement'>Опыт взаимодействия с арендодателями;</li>
                        <li className='one-vacancies__requirement'>Опыт работы по административно-хозяйственному направлению;</li>
                        <li className='one-vacancies__requirement'>Легкая обучаемость, развитое чувство ответственности;</li>

                    </ul>
                    <div className='one-vacancies__btns'>
                        <button className='one-vacancies__delete'>Удалить</button>
                        <button className='one-vacancies__change'>Изменить</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OneVacancies;