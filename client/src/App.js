import React from 'react';
import axios from 'axios';
import { setup } from 'axios-cache-adapter'
import * as d3 from "d3";
import Club from './components/Club';
import sortByDistance from 'sort-by-distance';
import { Button } from 'primereact/button';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chartElement = React.createRef();

    this.state = {
      clubs: []
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
              latitude: member.location.latitude,
              longitude: member.location.longitude,
              id: member.id
            }
          });
          return mapped;
        }],
    }).then(response => {
      this.setState({ clubs: response.data });
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
    navigator.geolocation.getCurrentPosition((position) => {
      const opts = {
        yName: 'latitude',
        xName: 'longitude'
      }

      const origin = { longitude: position.coords.longitude, latitude: position.coords.latitude }

      var sorted = sortByDistance(origin, this.state.clubs, opts);
      this.setState({ clubs: sorted });
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const clubListItems = this.state.clubs.map((club) => {
      return <Club club={club} key={club.id} />
    });

    return (
      <div>
        <h1>Svenska Cheerleadingförbundets medlemsföreningar</h1>
        <div className='scf-close-to-me-btn'>
          <Button className='p-button-raised p-button-lg' onClick={this.closeToMe}>Sortera närmast mig först</Button></div>
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
