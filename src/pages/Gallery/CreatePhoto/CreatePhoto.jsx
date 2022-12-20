import React, {useState} from 'react';
import "./CreatePhoto.scss"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useNavigate} from "react-router-dom";

const CreatePhoto = () => {
    const navigate = useNavigate()

    const [images,setImages] = useState('')
    return (

        <div className="create-photo">
            <div className="container">
                <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                <div className="create-photo__form-wrapper">
                    <form className="create-photo__form">
                        <h2>Создание фото</h2>
                        <label>
                            <input className="create-photo__title" type="text" placeholder="Введите название"/>
                        </label>
                        <DownloadBtn images={images} setImages={setImages}/>
                        <button className="banners__btn banners__btn_green" type=' submit'>Создать</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePhoto;