import React from 'react';

class Club extends React.Component {
    getFormattedUrl() {
        let link = this.props.club.website;
        if (link.search(/^http[s]?:\/\//) === -1) {
            link = 'http://' + link;
        }
        return link;
    }

    render(){
        let distance = isNaN(this.props.club.distanceToCurrentLocation) ? '' : `(${Math.round(this.props.club.distanceToCurrentLocation / 1000)} km från dig)`;

        return <div className="scf-member-item">
            <h2>{this.props.club.name}</h2>
            <div className='scf-member-item-city'>{this.props.club.city} {distance}</div>
            <a target='_blank' href={`${this.getFormattedUrl()}`}>{this.props.club.website}</a>
            </div>
    }
}

export default Club