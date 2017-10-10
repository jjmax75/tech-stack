import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

import LibraryList from './components/library-list';

const App = () => (
  <Provider store={createStore(reducers)}>
    <View style={styles.app}>
      <Header text='Tech Stack' />
      <LibraryList />
    </View>
  </Provider>
);

const styles = {
  app: {
    flex: 1,
  },
};

export default App;
