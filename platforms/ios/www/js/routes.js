angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('interwebApp', {
    url: '/page1',
    templateUrl: 'templates/interwebApp.html',
    controller: 'interwebAppCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('BAreYouSupportedB', {
    url: '/page4',
    templateUrl: 'templates/BAreYouSupportedB.html',
    controller: 'BAreYouSupportedBCtrl'
  })

  .state('LoadingConnectingLoading', {
    url: '/page5',
    templateUrl: 'templates/LoadingConnectingLoading.html',
    controller: 'LoadingConnectingLoadingCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('LoadingSigningInWithFriendster', {
    url: '/page7',
    templateUrl: 'templates/LoadingSigningInWithFriendster.html',
    controller: 'LoadingSigningInWithFriendsterCtrl'
  })

  .state('LoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoading', {
    url: '/page8',
    templateUrl: 'templates/LoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoading.html',
    controller: 'LoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingLoadingErrorLoadingCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});