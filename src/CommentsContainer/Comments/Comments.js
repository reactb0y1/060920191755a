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

    render() {
        console.log("---", this.props.textStore);
        return (
            <ul className="Comments">
                {this.makeList()}
            </ul>
        );
    }
}

export default connect(
    state => ({
        textStore: state
    })
)(Comments)