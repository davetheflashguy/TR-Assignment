module = angular.module('trApp',['ui.bootstrap']);

module.controller('userFormController', function($scope) {

     $scope.userObject = Object();
     $scope.regions = [
          {
               name: "Boston",
               code: "Boston"
          },
          {
             name: "New York",
             code: "New York"
          },
          {
               name: "Chicago",
               code: "Chicago"
          },
          {
               name: "San Fransisco",
               code: "San Fransisco"
          },
        ];

     $scope.leavingFrom = $scope.regions[0];

     $scope.initDate = function() {
          var today = new Date();
          var tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 2);
          
          $scope.departingDate = today;
          $scope.returningDate = tomorrow;
     };
     $scope.initDate();

     $scope.clear = function () {
          $scope.departingDate = null;
     };

     $scope.open = function($event) {
         $event.preventDefault();
         $event.stopPropagation();

         $scope.opened = true;
     };

     $scope.dateOptions = {
         formatYear: 'yy',
         startingDay: 1
     };

     $scope.initDate = new Date('2016-15-20');
     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
     $scope.format = $scope.formats[0];

     $scope.isFirstActive = true;

     $scope.selectSecondTab = function(){
          $scope.isFirstActive = false;
          $scope.isSecondActive = true;          
     }

     $scope.selectThirdTab = function(){
          $scope.isSecondActive = false;
          $scope.isThirdActive = true;          
     }

});