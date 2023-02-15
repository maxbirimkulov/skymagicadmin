import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";


const CreateSales = () => {
    const navigate = useNavigate()

    const [images, setImages] = useState('')

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm({mode: "onBlur"})


    const createSales = (obj) => {
        axios.post('sales', obj).then(async () => {
            await reset();
            await navigate('/sales')
        }).catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        createSales({
            ...data,
            images
        })
    }

    return (
        <div className="create">
            <div className="container">
                <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад
                </button>
                <form className="create__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="create__form-wrapper">

                        <h2>Создание акции</h2>
                        <label>
                            <input  {...register('title', {
                                required: {
                                    message: 'Заголовок акции обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов"
                                }
                            })} className="create__title" type="text" placeholder="Введите название"/>
                            <p className='register__form-error'>
                                {errors.title && errors.title?.message}
                            </p>

                        </label>
                        <label>
                            <input  {...register('date', {
                                required: {
                                    message: 'Дата акции обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов"
                                }
                            })} className="create__title" type="text" placeholder="Введите дату"/>
                            <p className='register__form-error'>
                                {errors.date && errors.date?.message}
                            </p>
                        </label>
                        <label>
                      <textarea {...register('description', {
                          required: {
                              message: 'Описание акции обязательно к заполнению',
                              value: true
                          },
                          minLength: {
                              value: 10,
                              message: "Минимум 10 символов"
                          }
                      })} cols="30" rows="10" placeholder="Введите Описание"></textarea>


                            <p className='register__form-error'>
                                {errors.description && errors.description?.message}
                            </p>
                        </label>
                        <label>
                            <textarea {...register('descriptionFull', {
                                required: {
                                    message: 'Полное писание акции обязательно к заполнению',
                                    value: true
                                },
                                minLength: {
                                    value: 10,
                                    message: "Минимум 10 символов"
                                }
                            })} cols="30" rows="10" placeholder="Введите Полное описание"></textarea>

                            <p className='register__form-error'>
                                {errors.descriptionFull && errors.descriptionFull?.message}
                            </p>
                        </label>
                        <DownloadBtn status={'image'} images={images} setImages={setImages}/>
                        <button type='submit' className="banners__btn banners__btn_green">Создать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSales;