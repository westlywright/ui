import Component from '@ember/component';
import layout from './template';
import VolumeSource from 'shared/mixins/volume-source';
import { set } from '@ember/object';

export default Component.extend(VolumeSource, {
  layout,
  field:     'emptyDir',

  initValue: null,

  init() {
    this._super(...arguments);

    set(this, 'initValue', { medium: '' });
  },

});
