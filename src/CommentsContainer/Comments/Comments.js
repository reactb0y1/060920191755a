import React, {Component} from 'react'
import './Comments.css'

class Comments extends Component {
    render() {
        return (
            <div className="Comments">

                <h5 className="CommentsName">Самуил</h5>

                <span className="CommentsDate">13 октября 2011</span>

                <div className="CommentsTextContainer">
                    <p className="CommentsText">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>

            </div>
        );
    }
}

export default Comments