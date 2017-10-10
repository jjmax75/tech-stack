import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectLibrary } from './../actions';

import { CardSection } from './common';

class ListItem extends React.Component {
  renderDescription() {
    if (this.props.expanded) {
      return(
        <CardSection>
          <Text style={styles.description}>{this.props.library.description}</Text>
        </CardSection>
      );
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  render(){
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(this.props.library.id)}
      >
        <View>
          <CardSection >
            <Text style={styles.title}>{this.props.library.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ListItem.propTypes = {
  library: PropTypes.object.isRequired,
  selectLibrary: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
};

const styles = {
  title: {
    fontSize: 18,
    paddingLeft: 15,
  },
  description: {
    flex: 1,
  },
};

const mapStateToProps = (state, ownProps) => ({
  expanded: state.selectedLibraryId === ownProps.library.id,
});

export default connect(mapStateToProps, {selectLibrary})(ListItem);
