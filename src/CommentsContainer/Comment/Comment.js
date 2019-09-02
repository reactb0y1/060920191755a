import React, {Component} from 'react'
import './Comment.css'

class Comment extends Component {
    render() {
        return (
            <div className="Comment">

                <h5 className="CommentName">Самуил</h5>

                <span className="CommentDate">13 октября 2011</span>

                <div className="CommentTextContainer">
                    <p className="CommentText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

            </div>
        );
    }
}

export default Comment