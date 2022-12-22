import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import "./Create.scss"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import {getOneBanner} from "../../../redux/reducers/oneBanner";
import {useDispatch, useSelector} from "react-redux";




const Create = () => {
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const [images,setImages] = useState('')
    const {banner, status ,error} = useSelector((store) => store.oneBanner )

    useEffect( () => {
          dispatch(getOneBanner(params.id))
         setImages(banner.images)
    }, [])

    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})


    const changeBanner = (obj) => {
        axios.patch(`banners/${banner._id}`, obj).then( async () => {
            await reset();
            await navigate('/banners')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {

        console.log({
            ...data,
            images
        })
        changeBanner({
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
                    <h2>Изменение баннера</h2>
                    <label>
                        <input defaultValue={banner.title}  {...register('title', {
                            required: {
                                message: 'Заголовок баннера обязательно к заполнению',
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
                        Выберите филиал :
                        <select defaultValue={banner.branch} {...register('branch', {
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
                    <label>
                      <textarea defaultValue={banner.text} {...register('text', {
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
                            {errors.text && errors.text?.message}
                        </p>
                    </label>
                    <DownloadBtn  status={'image'} images={images} setImages={setImages}/>
                    <button type='submit' className="banners__btn banners__btn_green">Изменить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;