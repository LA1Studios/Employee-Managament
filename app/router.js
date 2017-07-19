import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' }, function() {
    this.route('view');
    this.route('add');
    this.route('search');
  });
  //this.route('index\\view');
  //this.route('index\\add');
  //this.route('index\\search');
});

export default Router;
