import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import ModalBase from 'shared/mixins/modal-base';
import { inject as service } from '@ember/service';
import layout from './template';
import { get, set, setProperties } from '@ember/object';
import { next } from '@ember/runloop';

export default Component.extend(ModalBase, {
  router: service(),

  layout,
  classNames: ['medium-modal', 'alert'],

  branch:          null,
  branchesChoices: null,
  errors:          null,
  loading:         false,

  model: alias('modalService.modalOpts.originalModel'),

  init() {
    this._super(...arguments);

    setProperties(this, {
      loading: true,
      errors:  []
    });

    get(this, 'model').followLink('branches')
      .then((branches) => {
        if ( this.isDestroyed || this.isDestroying ) {
          return;
        }
        set(this, 'branchesChoices', JSON.parse(branches).map((b) => {
          return {
            label: b,
            value: b
          };
        })
          .sortBy('label'));
        if ( get(this, 'branchesChoices.length') ) {
          next(() => {
            set(this, 'branch', get(this, 'branchesChoices.firstObject.value'));
          });
        } else {
          set(this, 'loading', false);
        }
      })
      .finally(() => {
        set(this, 'loading', false);
      });
  },

  actions: {
    save(cb) {
      const branch = get(this, 'branch');

      get(this, 'model').doAction('run', { branch,  })
        .then(() => {
          const pipelineId = get(this, 'model.id');
          const nextRun = get(this, 'model.nextRun');

          this.send('cancel');
          get(this, 'router').transitionTo('authenticated.project.pipeline.pipelines.run', pipelineId, nextRun);
        })
        .finally(() => {
          cb();
        });
    },
  }
});
