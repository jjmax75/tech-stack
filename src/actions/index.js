/* eslint filenames/no-index: 0 */

export const selectLibrary = id => ({
  type: 'select_library',
  payload: id,
});
