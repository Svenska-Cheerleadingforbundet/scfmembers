import React from 'react';

class Club extends React.Component {
    getFormattedUrl() {
        let link = this.props.club.website;
        if (link.search(/^http[s]?\:\/\//) == -1) {
            link = 'http://' + link;
        }
        return link;
    }

    render(){
        return <div className="scf-member-item">
            <h2>{this.props.club.name}</h2>
            <div className='scf-member-item-city'>{this.props.club.city}</div>
            <a target='_blank' href={`${this.getFormattedUrl()}`}>{this.props.club.website}</a>
            </div>
    }
}

export default Club