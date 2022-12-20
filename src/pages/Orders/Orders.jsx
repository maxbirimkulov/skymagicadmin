import React from 'react';
const Orders = () => {

    return (
        <section className='orders'>
            <div className="container">
                <h2>Билеты</h2>
                <table className='table'>
                        <thead className='table__header'>
                        <tr className='table__row'>
                            <th className='table__col'>Пользователь</th>
                            <th className='table__col'>SMAGIC ЦУМ</th>
                            <th className='table__col'>SMAGIC ТОММИ МОЛ</th>
                            <th className='table__col'>SKY-PARK АЛА АРЧА</th>
                            <th className='table__col'>SMAGIC ТЕНХОПАРК</th>
                            <th className='table__col'>Всего билетов</th>
                        </tr>
                        </thead>
                        <tbody className='table__body'>
                            <tr className='table__row'>
                                <td className='table__col'>Азиз</td>
                                <td className='table__col'>12</td>
                                <td className='table__col'>13</td>
                                <td className='table__col'>2</td>
                                <td className='table__col'>1</td>
                                <td className='table__col'>122</td>
                            </tr>
                        </tbody>
                        <tfoot className='table__footer'>
                        <tr className='table__row'>
                            <th className='table__col'>Общая статистика</th>
                            <th className='table__col'>12</th>
                            <th className='table__col'>13</th>
                            <th className='table__col'>2</th>
                            <th className='table__col'>1</th>
                            <th className='table__col'>522</th>
                        </tr>
                        </tfoot>
                    </table>
            </div>
        </section>
    );
};

export default Orders;