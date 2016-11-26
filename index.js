import React, { Component, PropTypes } from 'react';
import vis from 'vis';
import uuid from 'uuid';

export default class Network extends Component {

  static propTypes = {
    options: PropTypes.objectOf(PropTypes.shape),
    graph: PropTypes.objectOf(PropTypes.shape),
    style: PropTypes.objectOf(PropTypes.shape),
    identifier: PropTypes.string.isRequired
  }

  static defaultProps = {
    graph: {},
    identifier: uuid.v4(),
    options: {
      autoResize: true,
      width: '100%',
      height: '100%',
      edges: {
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5,
            type: 'circle'
          },
          from: {
            enabled: true,
            scaleFactor: 0.5,
            type: 'circle'
          }
        }
      },
      layout: {
        hierarchical: {
          enabled: false
        }
      }
    }
  }

  componentDidMount() {
    this.updateGraph();
  }

  componentDidUpdate() {
    this.updateGraph();
  }

  updateGraph() {
    const container = document.getElementById(this.props.identifier);

    return new vis.Network(container, this.props.graph, this.props.options);
  }

  render() {
    const { identifier, style } = this.props;

    return React.createElement('div', {
      // onDoubleClick: this.changeMode.bind(this),
      id: identifier,
      style
    }, identifier);
  }
}
