import './App.css';
import React from 'react';
import axios from 'axios';
import * as d3 from "d3";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.chartElement = React.createRef();
    this.state = {
      clubs: [],
      data: [4, 8, 15, 16, 23, 42]
    };
  }

  callAPI() {
    axios.get(`http://localhost:1337/clubs`)
      .then(res => {
        this.setState({ clubs: res.data });
        this.createChart();
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
        .attr("transform", function(d) {
          return "translate(" + projection([d.location[0].longitude, d.location[0].latitude]) + ")";
        })
      })
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div >
        <svg width="1000" height="1000">
          <g ref={this.chartElement}></g>
        </svg>
      </div>
    );
  }
}

export default App
