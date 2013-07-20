function MyCtrl($scope) {
  
  $scope.items = [];
  $scope.addItem = function() {
    console.log($scope.myForm);
    if ($scope.myForm.$valid) {
      $scope.items.push({name: $scope.newItem, rating: $scope.newRating});
    } else {
      console.log("form is invalid");
    }
  }

}
