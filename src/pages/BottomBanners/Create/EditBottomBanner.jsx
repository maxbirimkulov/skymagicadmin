import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import "./Create.scss"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
import {useForm} from "react-hook-form";
import axios from "../../../utils/axios";
import {useDispatch, useSelector} from "react-redux";




const Create = () => {
    const navigate = useNavigate()


    const [images,setImages] = useState('')
    const [url,setUrl] = useState('')
    const {banner, status ,error} = useSelector((store) => store.oneBanner )


    useEffect(() => {
        axios('/bottom/banners').then((res) => setUrl(res.data[0]))
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
        axios.patch(`/bottom/banners/${url._id}`, obj).then( async () => {
            await reset();
            await navigate('/bottombanners')
        })  .catch((error) => console.log(`bad request ${error}`));
    };

    const onSubmit = (data) => {
        changeBanner({
            ...data,
            images
        })
    }

    return (
        <div className="editBottom">
            <div className="container">
                <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
                <form className="create__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="create__form-wrapper">
                    <h2>Изменение баннера</h2>
                    <DownloadBtn  status={'image'} images={images} setImages={setImages}/>
                    <button type='submit' className="banners__btn banners__btn_green">Изменить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;