import React, {Component} from 'react';

class User extends Component {

    render () {
        if (this.props.username) {
            return (
                <div>
                    {this.props.username.map((data, index) => {
                        return <div key={index}>
                                <p>id: {data.id}</p>
                                <p>spaceName: {data.spaceName}</p>
                                <p>venueName: {data.venueName}</p>
                                <p>imageUrl: {data.imageUrl}</p><br/>
                            </div>
                    })}
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default User