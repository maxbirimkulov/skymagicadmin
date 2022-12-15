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
                <form action="" className="create-photo__form">
                    <form className="create-photo__form">
                        <h2>Создание фото</h2>
                        <label>
                            <input className="create-photo__title" type="text" placeholder="Введите название"/>
                        </label>
                        <label>
                            Выберите филиал :
                            <select className="location" >
                                <option value="" className="location__item">Филиалы</option>
                                <option  value="tsum" className="location__item">SMAGIC ЦУМ</option>
                                <option value="tommy" className="location__item">SMAGIC ТОММИ МОЛ</option>
                                <option value="techno" className="location__item">SMAGIC ТЕНХОПАРК</option>
                                <option value="sky" className="location__item">SKY-PARK АЛА АРЧА</option>

                            </select>
                        </label>
                        <DownloadBtn images={images} setImages={setImages}/>
                        <button type='submit'>Создать</button>
                    </form>
                </form>
            </div>
        </div>
    );
};

export default CreatePhoto;