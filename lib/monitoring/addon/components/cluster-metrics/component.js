import Component from '@ember/component';
import Metrics from 'shared/mixins/metrics';
import layout from './template';

const FILTERS = { resourceType: 'cluster' };

export default Component.extend(Metrics, {
  layout,

  filters: FILTERS,
});
