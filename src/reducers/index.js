/* eslint filenames/no-index: 0 */

import { combineReducers } from 'redux';

import Library from './library';
import Selection from './selection';

export default combineReducers({
  libraries: Library,
  selectedLibraryId: Selection,
});
