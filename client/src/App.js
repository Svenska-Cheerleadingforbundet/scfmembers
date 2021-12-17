import './App.css';
import React from 'react';
import axios from 'axios';
import * as d3 from "d3";
import Club from './components/Club';
import sortByDistance from 'sort-by-distance'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chartElement = React.createRef();
    this.state = {
      clubs: []
    };
  }

  callAPI() {
    axios.get(`https://cheerleading.herokuapp.com/members`)
      .then(res => {
        this.setState({ clubs: res.data });
      })
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
        <button onClick={this.closeToMe}>Nära mig</button>
        {clubListItems}
      </div>
    );
  }
}

export default App
