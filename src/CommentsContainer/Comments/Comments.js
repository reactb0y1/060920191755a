import React, {Component} from 'react'
import './Comments.css'
import {connect} from 'react-redux'

class Comments extends Component {

    state = {
        commentsData: [
            {
                name: 'Самуил',
                date: '13 октября 2011',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
            },
            {
                name: 'Лилия Семёнова',
                date: '14 октября 2011',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis fugiat id quasi! Nostrum, sed?'
            },
            {
                name: 'Лилия Семёнова',
                date: '13 октября 2011',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid deleniti exercitationem inventore mollitia, nam omnis quia saepe sunt voluptatibus? Incidunt.'
            },
        ]
    };

    makeList() {
        const commentsData = this.state.commentsData;

        const commentItem = commentsData.map((commentItem) =>
            <li className='CommentsItem'>
                <h5 className="CommentsName">{commentItem.name}</h5>

                <span className="CommentsDate">{commentItem.date}</span>

                <div className="CommentsTextContainer">
                    <p className="CommentsText">{commentItem.text}</p>
                </div>
            </li>
        );

        return commentItem

    }

    getToday() {
        const newDate = new Date;

        let [date, month, year] = [
            newDate.getDate(),
            newDate.getUTCMonth() + 1,
            newDate.getFullYear()
        ]

        if (month === 1) month = 'января';
        if (month === 2) month = 'февраля';
        if (month === 3) month = 'марта';
        if (month === 4) month = 'апреля';
        if (month === 5) month = 'мая';
        if (month === 6) month = 'июня';
        if (month === 7) month = 'июля';
        if (month === 8) month = 'августа';
        if (month === 9) month = 'сентября';
        if (month === 10) month = 'октября';
        if (month === 11) month = 'ноября';
        if (month === 12) month = 'декабря';

        const dateMonthYear = date + ' ' + month + ' ' + year;

        return dateMonthYear
    }

    setComment() {

        const dateMonthYear = this.getToday();

        const prevCommentsData = this.state.commentsData;

        const newCommentData = {
            name: 'username',
            date: dateMonthYear,
            text: this.props.textStore
        };

        const nextCommentsData = prevCommentsData.push(newCommentData);
        
        this.setState({
            nextCommentsData
        })
    }

    render() {
        return (
            <ul className="Comments">
                {this.makeList()}
            </ul>
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setComment()
        }
    }
}

export default connect(
    state => ({
        textStore: state
    })
)(Comments)