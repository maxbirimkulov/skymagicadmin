import React from 'react';
import './Vacancies.scss'
import {GoLocation} from 'react-icons/go'
const Vacancies = () => {
    return (
        <section className='vacancies'>
          <div className="vacancies__container container">
              <div className="vacancies__card">
                  <div className="vacancies__text">
                    <h3 className='vacancies__name'>
                      Специалист по аренде и административно-хозяйственным вопросам
                    </h3>
                    <p className='vacancies__description'>
                      Основная задача на данной позиции — создание условий для работы сотрудников
                    </p>
                  </div>
                  <p className='vacancies__location'>
                      <span className='vacancies__logo'><GoLocation/></span>
                      SKY-PARK
                  </p>
              </div>
              <div className="vacancies__card">
                  <div className="vacancies__text">
                      <h3 className='vacancies__name'>
                          Специалист по аренде и административно-хозяйственным вопросам
                      </h3>
                      <p className='vacancies__description'>
                          Основная задача на данной позиции — создание условий для работы сотрудников
                      </p>
                  </div>
                  <p className='vacancies__location'>
                      <span className='vacancies__logo'><GoLocation/></span>
                      SKY-PARK
                  </p>
              </div>
              <div className="vacancies__card">
                  <div className="vacancies__text">
                      <h3 className='vacancies__name'>
                          Специалист по аренде и административно-хозяйственным вопросам
                      </h3>
                      <p className='vacancies__description'>
                          Основная задача на данной позиции — создание условий для работы сотрудников
                      </p>
                  </div>
                  <p className='vacancies__location'>
                      <span className='vacancies__logo'><GoLocation/></span>
                      SKY-PARK
                  </p>
              </div>
              <div className="vacancies__card">
                  <div className="vacancies__text">
                      <h3 className='vacancies__name'>
                          Специалист по аренде и административно-хозяйственным вопросам
                      </h3>
                      <p className='vacancies__description'>
                          Основная задача на данной позиции — создание условий для работы сотрудников
                      </p>
                  </div>
                  <p className='vacancies__location'>
                      <span className='vacancies__logo'><GoLocation/></span>
                      SKY-PARK
                  </p>
              </div>
          </div>
        </section>
    );
};

export default Vacancies;