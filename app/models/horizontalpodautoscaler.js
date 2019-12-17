import Resource from '@rancher/ember-api-store/models/resource';
import { reference } from '@rancher/ember-api-store/utils/denormalize';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';
const VALUE = 'Value';
const AVERAGE_VALUE = 'AverageValue';
const AVERAGE_UTILIZATION = 'Utilization';

export default Resource.extend({
  clusterStore:  service(),
  router:        service(),

  canHaveLabels:  true,

  workload:       reference('workloadId'),
  namespace:      reference('namespaceId', 'namespace', 'clusterStore'),

  mappedMetricValues: computed('metrics.@each.{name,type,current,target}', function() {
    return (get(this, 'metrics') || []).map((metric) => {
      const { current = {}, target = {} } = metric;
      const {
        averageValue: currentAverageValue,
        utilization:  currentUtilization,
        value:        currentValue,
      } = current;
      const {
        type:         targetType,
        value:        targetValue,
        averageValue: targetAverageValue,
        utilization:  targetUtilization,
      } = target;

      return {
        currentAverageValue,
        currentUtilization,
        currentValue,
        targetType,
        targetValue,
        targetAverageValue,
        targetUtilization,
      };
    });
  }),

  displayMetrics: computed('mappedMetricValues.@each.{currentAverageValue,currentUtilization,currentValue,targetType,targetValue,targetAverageValue,targetUtilization}', function() {
    return this.mappedMetricValues.map((metric) => {
      const arr = [];
      const {
        currentAverageValue,
        currentUtilization,
        currentValue,
        targetType,
        targetValue,
        targetAverageValue,
        targetUtilization,
      } = metric

      if ( currentValue ) {
        arr.push(currentValue);
      }

      if ( currentAverageValue ) {
        arr.push(currentAverageValue);
      }

      if ( currentUtilization || currentUtilization === 0 ) {
        arr.push(`${ currentUtilization }%`);
      }

      switch (targetType) {
      case VALUE:
        arr.push(targetValue);
        break;
      case AVERAGE_VALUE:
        arr.push(targetAverageValue);
        break;
      case AVERAGE_UTILIZATION:
        arr.push(`${ targetUtilization }%`);
        break;
      }

      return arr.join(' / ');
    });
  }),

  displayMetricsString: computed('displayMetrics', function() {
    return (get(this, 'displayMetrics') || []).join(', ');
  }),

  hpaName: computed('id', function() {
    const items = get(this, 'id').split(':');

    if ( get(items, 'length') > 1 ) {
      return items[1];
    }
  }),

  actions:      {
    edit() {
      get(this, 'router').transitionTo('authenticated.project.hpa.detail.edit', this.get('id'));
    },

    clone() {
      get(this, 'router').transitionTo('authenticated.project.hpa.new', this.get('projectId'), { queryParams: { id: this.get('id') } });
    },
  },

});
