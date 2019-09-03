import React, {Component} from 'react'
import './WriteComment.css'

class WriteComment extends Component {
    render() {
        return (
            <form className="WriteComment">

                <textarea className="WriteCommentTextarea"/>

                <button className="WriteCommentButton">
                    Написать консультанту
                </button>

            </form>
        );
    }
}

export default WriteComment