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
                            <td>Ручное бронирование</td>
                            <td>11</td>
                        </tr>
                        <tr className='ServicesTableMiddleTr'>
                            <td>Пакетные туры</td>
                            <td>3</td>
                        </tr>
                        <tr className='ServicesTableMiddleTr'>
                            <td>Отели</td>
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