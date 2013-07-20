function MyCtrl($scope) {
  
  $scope.items = [
    {name: "Banana", rating: 3},
    {name: "Vanilla", rating: 5},
    {name: "Strawberry", rating: 7},
    {name: "Rum Raisin", rating: 2}
  ];

  $scope.addItem = function() {
    console.log($scope.myForm);
    if ($scope.myForm.$valid) {
      $scope.items.push({name: $scope.newItem, rating: $scope.newRating});
    } else {
      console.log("form is invalid");
    }
  }

}
