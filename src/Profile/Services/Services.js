import React, {Component} from 'react'
import './Services.css'

class Services extends Component {
    render() {
        return (
            <div className="Services">
                <table className='ServicesTable'>
                    <tbody>
                        <tr className='ServicesTableFirstTr'>
                            <td/>
                            <td>Услуги</td>
                        </tr>
                        <tr>
                            <td>Ручное бронирование</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Пакетные туры</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Отели</td>
                            <td>1</td>
                        </tr>
                        <tr className='ServicesTableLastTr'>
                            <td>Всего</td>
                            <td>15</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Services