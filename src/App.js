import React from 'react';
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import * as d3 from "d3";
import Club from './components/Club';
import {GeoCoordinate} from 'geocoordinate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chartElement = React.createRef();

    this.state = {
      clubs: [],
      sortmode: 'alphabetical',
      loading: true
    };

    this.api = setup({
      cache: {
        maxAge: 15 * 60 * 1000
      }
    })
  }

  callAPI() {
    this.api({
      url: `https://cheerleading.herokuapp.com/members`,
      transformResponse: [
        ...axios.defaults.transformResponse,
        function (data) {
          var mapped = data.map(member => {
            return {
              name: member.name,
              city: member.city,
              email: member.email,
              website: member.website,
              latitude: parseFloat(member.location.latitude),
              longitude: parseFloat(member.location.longitude),
              id: member.id
            }
          });
          return mapped;
        }],
    }).then(response => {
      this.setState({ clubs: response.data, loading: false });
    });
  }

  createChart() {

    //Get Sweden map
    axios.get(`https://raw.githubusercontent.com/perliedman/svenska-landskap/master/svenska-landskap.geo.json`)
      .then(res => {
        var el = this.chartElement.current;

        let context = d3.select(el);

        let projection = d3.geoMercator().fitExtent([[0, 0], [1000, 1000]], res.data);

        let geoGenerator = d3.geoPath().projection(projection);

        context.selectAll('path')
          .data(res.data.features)
          .join('path')
          .attr('d', geoGenerator);

        context.selectAll("circle")
          .data(this.state.clubs)
          .enter()
          .append("circle")
          .attr("r", "5")
          .attr("fill", "red")
          .attr("transform", function (d) {
            return "translate(" + projection([d.location[0].longitude, d.location[0].latitude]) + ")";
          })
      })
  }

  closeToMe = () => {
    var locationSuccess = (position) => {
      const currentLocation = new GeoCoordinate({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });

      this.state.clubs.forEach(club => {
        var clubGeocoordinate = new GeoCoordinate([club.latitude, club.longitude]);
        club.distanceToCurrentLocation = currentLocation.preciseDistanceTo(clubGeocoordinate);
      });

      var sorted = this.state.clubs.sort((first, second) => {
        return first.distanceToCurrentLocation - second.distanceToCurrentLocation;
      })

      this.setState({ clubs: sorted, sortmode: 'closest' });
    };

    var locationError = (error) => {
      console.log(error);
    }

    var options = {
      enableHighAccuracy: true,
      timeout: 3000,
      maximumAge: 0
    };

    
    navigator.geolocation.getCurrentPosition(locationSuccess, locationError, options);
  }

  alphabetical = () => {
    var sorted = this.state.clubs.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
  return 0;
    });
    this.setState({ clubs: sorted, sortmode: 'alphabetical' });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const clubListItems = this.state.clubs.map((club) => {
      return <Club club={club} key={club.id} />
    });

    let loadingProgress = this.state.loading? <div className="loader"></div> : '';
    
    return (
      <div>
        <h1>Svenska Cheerleadingförbundets medlemsföreningar</h1>
        
        <div className="sorting-options">
          <button className={`${this.state.sortmode == 'alphabetical' ? "active" : ""}`} onClick={this.alphabetical}>Bokstavsordning</button>
          <button className={`${this.state.sortmode == 'closest' ? "active" : ""}`} onClick={this.closeToMe}>Närmast mig</button>
        </div>
        {loadingProgress}
        <div className='scf-members-wrapper'>
          {clubListItems}
        </div>
        <div className='scf-footer'>
          Källa: <a href="https://cheerleading.se">Svenska Cheerleadingförbundet</a>
        </div>
      </div>
    );
  }
}

export default App
