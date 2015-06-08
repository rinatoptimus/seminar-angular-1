var app = angular.module('angularjs-starter', []);
  app.controller('countingController', function($scope) {
    $scope.model = { id: 1 };
  })


  nonStringSelect.directive('convertToNumber', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$parsers.push(function(val) {
          return parseFloat(val, 10);
        });
        ngModel.$formatters.push(function(val) {
          return '' + val;
        });
      }
      
  
     
    };
    
    
  });