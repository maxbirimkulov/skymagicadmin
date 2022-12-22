import React, {useEffect} from 'react';
import './Video.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "../../utils/axios";
import {toast} from "react-toastify";
import {getVideo} from "../../redux/reducers/video";


const Video = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {data, error, status, filter} = useSelector((s) => s.video )

    useEffect(() => {
        dispatch(getVideo())

    }, [])

    const deleteVideo = (id) => {
        axios.delete(`video/${id}`)
            .then(() =>  {
                toast("Видео успешно удалено")
                dispatch(getVideo())
            })
            .catch(() => toast('Не удалось удалить видео'))
    }


    console.log(data)


    return (
        <section className='video'>
            <div className="video__container container">
                <button className='video__crate-btn' onClick={()=>navigate(`/video/create`)}>Создать видео</button>
                    <div className="video__wrapper">
                        {
                            data.map((item) => (
                                <div key={item._id} className='video__one'>
                                    <video playsInline style={{width: "300px"}} src={`http://localhost:4444${item.videoUrl}`} controls ></video>
                                    <p>Описание: {item.text}</p>
                                    <button
                                        className="photo__edit banners__btn banners__btn_red" onClick={() => deleteVideo(item._id)}> Удалить
                                    </button>
                                </div>
                            ))
                        }

                    </div>
            </div>
        </section>
    );
};

export default Video;