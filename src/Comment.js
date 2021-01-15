//your code here
import { render } from 'enzyme';
import React, {Component} from 'react' ; 

export default class Comment extends Component {
    render() {
        return (
            <div className= "comment">
                {this.props.commentText}

            </div>




        )

     }
}
