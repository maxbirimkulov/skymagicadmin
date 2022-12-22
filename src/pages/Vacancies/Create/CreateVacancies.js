import React,{useState} from 'react';
import './Create.scss'
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import Responsibilities from "./Responsibilities";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Requirements from "./Requirements";



const CreateVacancies = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})


    const createVacancies = (obj) => {
        axios.post('vacancies', obj).then( async () => {
            await reset();
            await navigate('/vacancies')
            setResponsibilities([])
            setRequirements([])
            toast("Вакансия успешно создана")
        })  .catch((error) =>  toast("Вакансия не создана"));
    };

    const onSubmit = (data) => {
        createVacancies({
            ...data,
            requirement: requirements,
            responsibilities
        })
    }

    const [responsibilities,setResponsibilities] = useState([])
    const [requirements,setRequirements] = useState([])

    return (
        <section className='create-vacancies'>
            <div className="create-vacancies container">
                <button className='create-vacancies__back' onClick={()=>navigate(-1)}>Назад</button>
                <form onSubmit={handleSubmit(onSubmit)} className="create-vacancies__form">
                    <h2 className='create-vacancies__title'>Создание вакансии</h2>
                        <label>
                            <h3>Название</h3>
                        <input {...register('title', {
                            required: {
                                message: 'Заголовок вакансии обязательно к заполнению',
                                value: true
                            },
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов"
                            }
                        })} type="text" placeholder='Введите название вакансии'/>
                            <p>
                                {errors.title && errors.title?.message}
                            </p>
                        </label>

                         <label>
                             <h3>Описание</h3>
                            <textarea className='create-vacancies__textarea' {...register('description', {
                                required: {
                                    message: 'Описание вакансии обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов"
                                }
                            })} placeholder='Введите описание вакансии'/>
                             <p>
                                 {errors.description && errors.description?.message}
                             </p>



                         </label>

                        <h3>Обязанности</h3>
                        <Responsibilities responsibilities={responsibilities} setResponsibilities={setResponsibilities}/>
                        <h3>Требования</h3>
                        <Requirements requirements={requirements} setRequirements={setRequirements}/>

                    <label>
                        Выберите филиал :
                        <select {...register('branch', {
                            required: {
                                message: 'Выберите филиал',
                                value: true
                            }
                        })}  className="location" >
                            <option value="" className="location__item">Филиалы</option>
                            <option  value="tsum" className="location__item">SMAGIC ЦУМ</option>
                            <option value="tommy" className="location__item">SMAGIC ТОММИ МОЛ</option>
                            <option value="techno" className="location__item">SMAGIC ТЕНХОПАРК</option>
                            <option value="sky" className="location__item">SKY-PARK АЛА АРЧА</option>

                        </select>
                        <p className='register__form-error'>
                            {errors.branch && errors.branch?.message}
                        </p>
                    </label>

                        <button type='submit' className="banners__btn banners__btn_green">Создать вакансию</button>
                </form>
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

export default CreateVacancies;