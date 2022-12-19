import React,{useState} from 'react';
import './Create.scss'
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import Responsibilities from "../../Banners/Create/Responsibilities";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Requirements from "../../Banners/Create/Requirements";



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
            requirements,
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
<<<<<<< HEAD

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
=======
                        <h3>Будущие задачи</h3>
                        <label htmlFor="">
                            <input type="text" placeholder='введите задачу'/>
                            <button>добавить ещ е 1</button>
>>>>>>> 615f7fd445477c139a0f0c1bd68ba3deef0923a2
                        </label>
                        <h3>Обязанности</h3>
                        <Responsibilities responsibilities={responsibilities} setResponsibilities={setResponsibilities}/>
                        <h3>Требования</h3>
                        <Requirements requirements={requirements} setRequirements={setRequirements}/>
                        <button type='submit'>Создать вакансию</button>
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