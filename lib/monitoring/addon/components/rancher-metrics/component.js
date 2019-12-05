import Component from '@ember/component';
import Metrics from 'shared/mixins/metrics';
import layout from './template';

const FILTERS = { displayResourceType: 'rancher-component' };

export default Component.extend(Metrics, {
  layout,

  filters: FILTERS,
});
