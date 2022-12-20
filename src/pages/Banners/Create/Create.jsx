import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./Create.scss"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";




const Create = () => {
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


    const createBanner = (obj) => {
        axios.post('banners', obj).then( async () => {
            await reset();
            await navigate('/banners')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        createBanner({
            ...data,
            images
        })
    }

    return (
        <div className="create">
          <div className="container">
              <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
              <form className="create__form" onSubmit={handleSubmit(onSubmit)}>
                  <h2>Создание баннера</h2>
                  <label>
                      <input  {...register('title', {
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
                  <label>
                      <textarea {...register('text', {
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
                  <DownloadBtn images={images} setImages={setImages}/>
                  <button type='submit'>Создать</button>
              </form>
          </div>
        </div>
    );
};

export default Create;