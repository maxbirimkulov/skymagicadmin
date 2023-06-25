import React, {useEffect} from 'react';
import "../BottomBanners/BottomBanners.scss"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import banners, {changeBranch, getBanners} from "../../redux/reducers/banners";
import BranchMenu from "../../components/BranchMenu/BranchMenu";
import SelectBranch from "../../components/SelectBranch/SelectBranch";


const Banners = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const {data, error, status, filter} = useSelector((s) => s.banners )

    useEffect(() => {
        dispatch(getBanners(filter))

    }, [filter])


    return (
        <section className="banners">
            <div className="container">
                <div className="banners__bar">
                    <button className="banners__add banners__btn banners__btn_green" onClick={() => navigate(`/banners/create`)}>
                        Создать баннер
                    </button>
                </div>


                {error.length ? <div>
                    <h2 className='users__error'>{error}</h2>
                    <p>На экране выведен старый список баннеров</p>
                </div> : ''}

                <div className='banners__content'>
                    <div className="banners__wrapper">
                        {
                             status === 'loading' ? '' :data.map((item) => (
                                        <div className="banner" key={item._id}>
                                            <div className="banner__img">
                                                <img src={`${process.env.REACT_APP_URL}${item.images}`} alt={item.title}/>
                                            </div>

                                            <h2 className="banner__title">{item.title}</h2>
                                            <p className="banner__description">{item.text}</p>
                                            <h3 className="banner__location">
                                                <SelectBranch branch={item.branch}/>
                                            </h3>
                                            <div className="banner__btn-wrapper">
                                                <button
                                                    className="banner__edit banners__btn banners__btn_blue" onClick={() => navigate(`/banners/${item._id}`)} >Подробнее
                                                </button>
                                            </div>
                                        </div>
                                    ))

                        }
                    </div>
                <BranchMenu changeBranch={changeBranch} route={'banners'}/>
                </div>
            </div>
        </section>
    );
};

export default Banners;