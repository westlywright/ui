import Component from '@ember/component';
import { set } from '@ember/object';
import layout from './template';

const SEARCH_FIELDS = ['displayName', 'id:prefix', 'displayState'];

export default Component.extend({
  layout,
  searchFields: SEARCH_FIELDS,

  actions: {
    clearSearch() {
      set(this, 'searchText', '');
    },
  },
});
