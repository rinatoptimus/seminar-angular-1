var app = angular.module('seminar', []);

 app.controller('add-row', function($scope) {


  $scope.choices = ['<tr></tr>'];
  
  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };
    
  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };


  
});




/*app.controller('percents', function(){
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
     
    };*/



/*app.controller('add-row', function($scope) {
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
}*/



