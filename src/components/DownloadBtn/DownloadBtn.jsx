import React, {useRef} from 'react';
import axios from "../../utils/axios";
import {Button} from "@mui/material";

const ClothesAddBtn = ({num,images,setImages,status}) => {
    const image = useRef()

    const handleChangeImage1 = async (e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0]
            formData.append('image', file)
            await axios.post('/upload', formData).then(({data}) =>  setImages(data.url))

        } catch (err){
            console.log(e)
            console.log(err, 'Ошибка')
            alert('Ошибка при загрузке файла')
        }

    }

    return (
        <li style={{display: 'flex', alignItems: 'center'}}>
            <Button onClick={() => image.current.click()} type='button' variant="contained" style={{backgroundColor: '#fa8231'}} color="success">
                Загрузить картинку {num}
            </Button>
            <input ref={image}  hidden  type="file" onChange={handleChangeImage1} id='image'/>
            {
                images && (
                    <>
                        {status === 'video' ? <video style={{width:'500px', margin: '0 20px', height: '300px'}} src={`${process.env.REACT_APP_URL}${images}`} controls></video> :     <img style={{width:'100px', margin: '0 20px'}} src={`${process.env.REACT_APP_URL}${images}`} alt="Uploaded"/>}

                        <Button style={{width:'200px'}} onClick={() => setImages('')} type='button' variant="contained">Удалить картинку</Button>
                    </>
                )
            }
        </li>
    );
};

export default ClothesAddBtn;