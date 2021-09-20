import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    console.log(this.props.streams);
    return <div>StreamList</div>;
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
  /*
  Object.values takes in an obj.
  all the different values inside that obj are pulled out and inserted
  into an array. Turns values into array.
  */
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
