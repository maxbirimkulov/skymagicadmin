import React, {useState} from 'react';
import './CreateVideo.scss'
import {useNavigate} from "react-router-dom";
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";


const CreateVideo = () => {
    const navigate =useNavigate()
    const [videos,setVideos] = useState('')
    return (
        <section className='create-video'>
            <div className="create-video container">
                <button type='button' className="create-video__btn" onClick={() => navigate(-1)}>назад</button>
                <DownloadBtn images={videos} setImages={setVideos}/>
            </div>
        </section>
    );
};

export default CreateVideo;