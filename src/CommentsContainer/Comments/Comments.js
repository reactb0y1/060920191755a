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

    setComment() {

        const prevCommentsData = this.state.commentsData;

        const newCommentData = {
            name: 'username',
            date: '13 октября 2011',
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