angular.module('app')
.constant('config', {
  // baseUrl: window.location.hostname.indexOf("localhost") != -1?  'https://local-eam.leanix.net/demo' : '',
  baseUrl: window.location.hostname.indexOf("localhost") != -1?  'https://app.leanix.net/incowia' : '',
  lifecycleParams: {"lifecycle_data": "current", "lifecycle": "any", "lifecycle_op": "OR"},
  workspace: null,
  user: null
});
