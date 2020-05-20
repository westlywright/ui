import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import ModalBase from 'shared/mixins/modal-base';
import layout from './template';
import { eachLimit } from 'async';

export default Component.extend(ModalBase, {
  growl: service(),

  layout,
  classNames: ['large-modal'],

  selection: null,

  resources: alias('modalService.modalOpts.resources'),

  init() {
    this._super(...arguments);

    set(this, 'selection', {});
  },


  actions: {
    drain() {
      const nodeDrainInput = { ...get(this, 'selection') };
      const resources = get(this, 'resources').slice();

      if (nodeDrainInput.deleteLocalData && nodeDrainInput.deleteLocalData === 'true') {
        set(nodeDrainInput, 'force', 'true');
      }

      eachLimit(resources, 5, (resource, cb) => {
        if ( !resource ) {
          return cb();
        }

        resource.doAction('drain', nodeDrainInput).finally(cb);
      });

      this.send('cancel');
    },
  },
});
