import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      tabs: [
        { name: 'View', route: 'index.view' },
        { name: 'Add', route: 'index.add' },
        { name: 'Search', route: 'index.search' },
      ]
    };
  }
});
