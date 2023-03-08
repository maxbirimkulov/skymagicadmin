import React, {useState} from 'react';
import "./CreatePhoto.scss"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";

const CreatePhoto = () => {
    const navigate = useNavigate()

    const [images,setImages] = useState('')


    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})

    const createGallery = (obj) => {
        axios.post('gallery', obj).then( async () => {
            await reset();
            await navigate('/gallery')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        createGallery({
            ...data,
            imageUrl:images
        })
    }

    return (

        <div className="create-photo">
            <div className="container">
                <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                <div className="create-photo__form-wrapper">
                    <form className="create-photo__form" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Создание фото</h2>
                        <label>
                            <input {...register('text')}  className="create-photo__title" type="text" placeholder="Введите название"/>
                        </label>
                        <label>
                            Выберите филиал :
                            <select {...register('branch', {
                                required: {
                                    message: 'Выберите филиал',
                                    value: true
                                }
                            })}  className="location" >
                                <option value="" hidden={true} className="location__item">Филиалы</option>
                                <option  value="tsum" className="location__item">SMAGIC ЦУМ</option>
                                <option value="tommy" className="location__item">SMAGIC ТОММИ МОЛ</option>
                                <option value="techno" className="location__item">SMAGIC ТЕНХОПАРК</option>
                                <option value="sky" className="location__item">SKY-PARK АЛА АРЧА</option>

                            </select>
                            <p className='register__form-error'>
                                {errors.branch && errors.branch?.message}
                            </p>
                        </label>
                        <DownloadBtn  status={'image'} images={images} setImages={setImages}/>
                        <button className="banners__btn banners__btn_green" type='submit'>Создать</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePhoto;