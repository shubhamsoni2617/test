import React, { Component } from 'react';

class Masonry extends Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  getColumns(w) {
    const { brakePoints } = this.props;
    return (
      brakePoints.reduceRight((prevValue, currentValue, i) => {
        return currentValue < w ? prevValue : i;
      }, brakePoints.length) + 1
    );
  }

  onResize() {
    const columns = this.getColumns(
      this.refs.Masonry && this.refs.Masonry.offsetWidth
    );
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }
  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {
      col.push([]);
    }
    return this.props.children.reduce((prevValue, currentValue, i) => {
      prevValue[i % numC].push(currentValue);
      return prevValue;
    }, col);
  }

  render() {
    return (
      <div className="masonry" ref="Masonry">
        {this.mapChildren().map((col, ci) => {
          return (
            <div className="column" key={ci}>
              {col.map((child, i) => {
                return <div key={i}>{child}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Masonry;
