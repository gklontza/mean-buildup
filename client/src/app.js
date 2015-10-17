/**
 * Created by Pencroff on 11-Oct-15.
 */
angular
    .module('angular-buildup', [])
    .run(function() {
        console.log('Angular app have runned');
    .config(function($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl : '/static/src/index.html'
            })

    });
