import Component from '@ember/component';
import Metrics from 'shared/mixins/metrics';
import layout from './template';

const FILTERS = { resourceType: 'node' };

export default Component.extend(Metrics, {
  layout,

  filters: FILTERS,
});
