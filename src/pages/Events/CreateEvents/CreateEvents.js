import React from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";




const Create = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})


    const createBanner = (obj) => {
        axios.post('events', obj).then( async () => {
            await reset();
            await navigate('/events')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        createBanner({
            ...data
        })
    }

    return (
        <div className="create">
            <div className="container">
                <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                <form className="create__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="create__form-wrapper">
                        <h2>Создание баннера</h2>
                        <label>
                            <input  {...register('title', {
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
                            <input  {...register('title2', {
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов"
                                }
                            })} className="create__title" type="text" placeholder="Введите название"/>
                            <p className='register__form-error'>
                                {errors.title2 && errors.title2?.message}
                            </p>
                        </label>
                        <label>
                      <textarea {...register('description', {
                          required: {
                              message: 'Описание баннера обязательно к заполнению',
                              value: true
                          },
                          minLength: {
                              value: 10,
                              message: "Минимум 10 символов"
                          }
                      })}  cols="30" rows="10" placeholder="Введите Описание"></textarea>
                            <p className='register__form-error'>
                                {errors.description && errors.description?.message}
                            </p>
                        </label>
                        <button type='submit' className="banners__btn banners__btn_green">Создать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;