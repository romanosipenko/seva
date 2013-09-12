'use strict';

var sevaFilters = angular.module('seva.filters', [])


sevaFilters.directive('stars', function() {
   return {
      'link': function($scope, element, attrs, controller){
        attrs.$observe('stars', function(value){
          var cache = "";
          for (var i=0; i < 10; i++){
            cache += i < value ? "<i class=\"fill\">★</i>": "<i>★</i>";
          }
          element.html(cache);
        });
      }
   }
});
