import Component from '@ember/component';
import Metrics from 'shared/mixins/metrics';
import layout from './template';
import { get, set } from '@ember/object';

const FILTERS = { resourceType: 'workload' };

export default Component.extend(Metrics, {
  layout,

  filters: FILTERS,

  projectScope:  true,

  init() {
    this._super(...arguments);
    set(this, 'metricParams', { workloadName: get(this, 'resourceId') });
  },

});
