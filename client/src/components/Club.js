import React from 'react';

class Club extends React.Component {
    render(){
        return <div>
            <p>{this.props.club.Organisationsnamn}</p>
            </div>
    }
}

export default Club