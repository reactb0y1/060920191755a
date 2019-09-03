import React, {Component} from 'react'
import './Manager.css'

class Manager extends Component {
    render() {
        return (
            <div className="Manager">
                <span className='ManagerPhoto'/>
                <div className="ManagerRight">
                    <h5 className="ManagerName">Вероника Ростова</h5>
                    <p className="ManagerInfo">Менеджер по продажам</p>
                    <div className="ManagerStatusContainer">
                        <p className='ManagerStatus'>Подберу для Вас самые лучшие предложения. Мои услуги абсолютно бесплатны</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Manager