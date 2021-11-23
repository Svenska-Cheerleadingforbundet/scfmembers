import React from 'react';

class Club extends React.Component {
    render(){
        return <div>
            <p><a href={this.props.club.website}>{this.props.club.name}</a></p>
            </div>
    }
}

export default Club