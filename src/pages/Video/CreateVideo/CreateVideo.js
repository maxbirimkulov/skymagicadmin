import React, {useState} from 'react';
import './CreateVideo.scss'
import {useNavigate} from "react-router-dom";
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";


const CreateVideo = () => {
    const navigate =useNavigate()

    const [videos,setVideos] = useState('')



    const {
        register,
        handleSubmit,
        reset,
        formState : {
            errors
        }
    } = useForm({mode: "onBlur"})

    const createVideo = (obj) => {
        axios.post('video', obj).then( async () => {
            await reset();
            await navigate('/video')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        createVideo({
            ...data,
            videoUrl:videos
        })
    }


    return (
        <section className='create-video'>
            <div className="create-video container">
                <button type='button' className="create-video__btn" onClick={() => navigate(-1)}>назад</button>
                <div className="create-photo__form-wrapper">
                    <form className="create-photo__form" onSubmit={handleSubmit(onSubmit)}>
                        <h2>Создание фото</h2>
                        <label>
                            <input {...register('text')}  className="create-photo__title" type="text" placeholder="Введите название"/>
                        </label>
                        <DownloadBtn status={'video'} images={videos} setImages={setVideos}/>
                        <button className="banners__btn banners__btn_green" type=' submit'>Создать</button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default CreateVideo;