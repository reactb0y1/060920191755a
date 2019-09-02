import React, {Component} from 'react'
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <table className='ServicesTable'>
                    <thead>
                        <tr className='ServicesTableFirstTr'>
                            <td/>
                            <td>Услуги</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='ServicesTableMiddleTr'>
                            <td className='ratingContainer'>
                                <span
                                    className='rating'
                                    id='rating_1'
                                />
                                Ручное бронирование
                            </td>
                            <td>11</td>
                        </tr>
                        <tr className='ServicesTableMiddleTr'>
                            <td className='ratingContainer'>
                                <span
                                    className='rating'
                                    id='rating_2'
                                />
                                Пакетные туры
                            </td>
                            <td>3</td>
                        </tr>
                        <tr className='ServicesTableMiddleTr'>
                            <td className='ratingContainer'>
                                <span
                                    className='rating'
                                    id='rating_3'
                                />
                                Отели
                            </td>
                            <td>1</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className='ServicesTableLastTr'>
                            <td>Всего</td>
                            <td>15</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Services