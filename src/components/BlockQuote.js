// @flow

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import DraftJsText from '../components/DraftJsText';

const styles = StyleSheet.create({
  blockquoteContainer: {
    borderLeftColor: '#eee',
    borderLeftWidth: 4,
    borderStyle: 'solid',
    marginTop: 22,
    marginBottom: 22,
    paddingLeft: 12,
  },
});

const BlockQuote = (props: Object): any => {
  const blockquoteCustomStyleContainer = props.customStyles ?
    props.customStyles.blockquoteContainer :
    undefined;

  return (
    <View style={[styles.blockquoteContainer, blockquoteCustomStyleContainer]}>
      <DraftJsText
        {...props}
      />
    </View>);
};

BlockQuote.propTypes = {
  text: React.PropTypes.string.isRequired,
  customStyles: React.PropTypes.any,
  type: React.PropTypes.string.isRequired,
};

BlockQuote.defaultProps = {
  customStyles: undefined,
  type: '',
};

export default BlockQuote;
