angular.module('app', ['cgross.soft-forms']);

angular.module('app').controller('DemoCtrl',function($scope,$timeout){

	$scope.showNgChangeAlert = false;

	var alertTimeout;

    $scope.change = function(field,value){
    	$scope.change_message = field + ' changed to ' + value;

    	$scope.showNgChangeAlert = true;

    	if (alertTimeout){
    		$timeout.cancel(alertTimeout);
    	}
    	alertTimeout = $timeout(function(){
    		$scope.showNgChangeAlert = false;
    		$scope.$apply();
    	},2000);
    };

});