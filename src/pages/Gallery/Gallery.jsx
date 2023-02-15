import React, {useEffect} from 'react';
import "./Gallery.scss"
import {useNavigate} from "react-router-dom";
import Fancybox from "./Fancybox/Fancybox";
import {useDispatch, useSelector} from "react-redux";
import {getGallery} from "../../redux/reducers/gallery";
import axios from "../../utils/axios";
import {toast, ToastContainer} from "react-toastify";


const Gallery = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {data, error, status, filter} = useSelector((s) => s.gallery )

    useEffect(() => {
        dispatch(getGallery())

    }, [])

    const deleteGallery = (id) => {
        axios.delete(`gallery/${id}`)
            .then(() =>  {
                toast("Картинка успешно удалена")
                dispatch(getGallery())
            })
            .catch(() => toast('Не удалось удалить картинку'))
    }


    return (
        <section className="gallery">
            <div className="container">
                <button className="gallery__add banners__btn banners__btn_blue" onClick={() => navigate(`/gallery/create`)}>
                    Создать фото
                </button>
                {error.length ? <div>
                    <h2 className='users__error'>{error}</h2>
                    <p>На экране выведен старый список пользователей</p>
                </div> : ''}

                {
                    status === 'loading' ? '' : <Fancybox>
                        <div className="photo__wrapper">
                            {
                                data.map(item => (
                                    <div className="photo__box">
                                        <a data-fancybox="gallery" data-caption={item.text}
                                           href={`${process.env.REACT_APP_URL}${item.imageUrl}`}>
                                            <img className="photo__img" alt="" src={`${process.env.REACT_APP_URL}${item.imageUrl}`}/>
                                        </a>
                                        <button
                                            className="photo__edit banners__btn banners__btn_red" onClick={() => deleteGallery(item._id)}> Удалить
                                        </button>
                                    </div>
                                ))
                            }

                        </div>
                    </Fancybox>
                }
            </div>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </section>
    );
};

export default Gallery;