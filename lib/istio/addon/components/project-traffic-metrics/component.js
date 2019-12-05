import Component from '@ember/component';
import Metrics from 'shared/mixins/metrics';
import layout from './template';
import { observer, set, setProperties } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend(Metrics, {
  scope:        service(),
  layout,

  filters:      null,

  projectScope: true,
  istio:        true,

  init() {
    this._super(...arguments);

    set(this, 'filters', { resourceType: 'istioproject' });
  },


  projectDidChange: observer('scope.currentProject.id', function() {
    setProperties(this, {
      'state.noGraphs': true,
      graphs:           [],
      single:           []
    });

    this.send('query', false);
  })
});
