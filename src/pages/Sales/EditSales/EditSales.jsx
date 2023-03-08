import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import {getOneSales} from "../../../redux/reducers/oneSales";
import {useDispatch, useSelector} from "react-redux";




const EditSales = () => {
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const [images,setImages] = useState('')
    const {sales, status ,error} = useSelector((store) => store.oneSales )

    useEffect( () => {
          dispatch(getOneSales(params.id))
         setImages(sales.images)
    }, [])

    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})


    const changeSales = (obj) => {
        axios.patch(`sales/${sales._id}`, obj).then( async () => {
            await reset();
            await navigate('/sales')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {

        console.log({
            ...data,
            images
        })
        changeSales({
            ...data,
            images
        })
    }

    return (
        <div className="create">
            <div className="container">
                <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                <form className="create__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="create__form-wrapper">

                        <h2>Изменение акции</h2>
                        <label>
                            <input defaultValue={sales.title}  {...register('title', {
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
                            <input defaultValue={sales.date}  {...register('date', {
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
                      <textarea defaultValue={sales.description} {...register('description', {
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
                            <textarea defaultValue={sales.descriptionFull} {...register('descriptionFull', {
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

export default EditSales;