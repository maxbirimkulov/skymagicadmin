import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Create.scss"
import DownloadBtn from "../../../components/DownloadBtn/DownloadBtn";
const Create = () => {
    const navigate = useNavigate()
    return (
        <div className="create">
          <div className="container">
              <button type='button' className="banners__btn banners__btn_blue" onClick={() => navigate(-1)}>назад</button>
              <form className="create__form">
                  <h2>Создание баннера</h2>
                  <label>
                      <input className="create__title" type="text" placeholder="Введите название"/>
                  </label>
                  <label>
                      Выберите Локацию :
                      <select name="create__location" className="location" id="">
                          <option value="1" className="location__item">Цум</option>
                          <option value="2" className="location__item">Томми</option>
                          <option value="3" className="location__item">Скай парк</option>
                          <option value="3" className="location__item">Техно</option>
                      </select>
                  </label>
                  <label>
                      <textarea name="" id="" cols="30" rows="10" placeholder="Введите Описание"></textarea>
                  </label>
                  <DownloadBtn/>
              </form>
          </div>
        </div>
    );
};

export default Create;