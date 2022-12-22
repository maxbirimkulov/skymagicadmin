import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const Responsibilities = ({responsibilities, setResponsibilities}) => {


    const [text,setText] = useState('')


    const addResponsibilities = () => {
        if (!text.length) {
            console.log(123)
            toast("Заполните поле ввода")
        } else {
            setResponsibilities((prev) => [...prev, {
                text,
                id: uuidv4()
            }])
            setText('')
        }
    }

    const deleteResponsibilities = (id) => {
        setResponsibilities(responsibilities.filter((item) => item.id !== id ))
    }


    return (
        <div>
        <label htmlFor="">
            <input value={text} onChange={(e) => setText(e.target.value) } type="text" placeholder='введите обязанности'/>
            <button type='button' className="banners__btn banners__btn_green" onClick={addResponsibilities}>добавить</button>
        </label>
            <ul>
                {
                    responsibilities.map((item, idx) => (
                        <li style={{display: "flex", justifyContent: "space-between"}} key={idx + item}>{item.text} <button type='button' className="banners__btn banners__btn_red" onClick={() => deleteResponsibilities(item.id)}>Удалить</button></li>
                    ))
                }
            </ul>

        </div>
    );
};

export default Responsibilities;