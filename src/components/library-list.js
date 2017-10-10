import React from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './list-item';

class LibraryList extends React.Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return (
      <ListItem
        library={library}
      />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

LibraryList.propTypes = {
  libraries: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    libraries: state.libraries,
  };
};

export default connect(
  mapStateToProps,
)(LibraryList);
