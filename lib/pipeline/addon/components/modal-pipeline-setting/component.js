import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import ModalBase from 'shared/mixins/modal-base';
import layout from './template';
import { get, set } from '@ember/object';

export default Component.extend(ModalBase, {
  layout,
  classNames: ['medium-modal', 'alert'],

  errors:     null,

  model:      alias('modalService.modalOpts.originalModel'),

  init() {
    this._super(...arguments);

    set(this, 'errors', []);
  },


  actions: {
    save(cb) {
      get(this, 'model').save()
        .then(() => {
          this.send('cancel');
        })
        .finally(() => {
          cb();
        });
    },
  }
});
