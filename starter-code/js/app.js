/* setup your angular app here */
var app = angular.module('FruitnVeggie', ['ui.bootstrap']);
app.controller('fruitnveggie', ['$scope', function($scope) {


$scope.win = false;
$scope.redFruit = [];
$scope.redVeg =[];
$scope.correctVeg = false;
$scope.correctFruit = false;
//array that combines fruits and vegetables
var fruitveg = fruit.concat(vegetables);
//shuffle array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//middle row with fruits and veggies
$scope.combo = shuffleArray(fruitveg);
$scope.myVeg = [];
$scope.myFruit = [];

$scope.addToFruits = function(food){
  $scope.myFruit.push(food);
  var remove = $scope.combo.indexOf(food);
  $scope.combo.splice(remove,1);
  console.log(food);
  if ($scope.combo.length === 0) {
    $scope.testWin();   
  } 
}

$scope.addToVeggies = function(food){
  $scope.myVeg.push(food);
  var remove = $scope.combo.indexOf(food);
  $scope.combo.splice(remove,1);
  console.log(food);
  console.log("removing: " + remove);
  if ($scope.combo.length === 0) {
    $scope.testWin();   
  } 
}

$scope.addFruitToCombo = function(food){
  $scope.combo.push(food);
  var remove = $scope.myFruit.indexOf(food);
  $scope.myFruit.splice(remove,1);
  console.log(food);
    if ($scope.combo.length === 0) {
    $scope.testWin();   
  } 
}


$scope.addVegToCombo = function(food){
  $scope.combo.push(food);
  var remove = $scope.myVeg.indexOf(food);
  $scope.myVeg.splice(remove,1);
  console.log(food);
    if ($scope.combo.length === 0) {
    $scope.testWin();   
  } 
}

//testing if answers are correct
$scope.testWin = function(){
  // check if fruit list items match the original fruit list items
var afruit;
for (var i = 0; i < $scope.myFruit.length; i ++){
  afruit = $scope.myFruit[i];
  if (fruit.indexOf(afruit) >= 0){
    $scope.redFruit[i] = false;
  } else { 
    $scope.redFruit[i] = true;
  } 
}
//check if veg list items match the original veg list items
var aveg;
for (var i =0; i < $scope.myVeg.length; i++){
  aveg = $scope.myVeg[i];
  if (vegetables.indexOf(aveg) >= 0){
    $scope.redVeg[i] = false;
    // $scope.win = true;
  } else { 
    $scope.redVeg[i] = true;
  } 
}

var redVeglen = $scope.redVeg.length;
var y = $scope.redVeg[0];

for(i=0; i < redVeglen; i++) {
    // console.log("entering for loop");
    //check if all values in the array are false and equal to each other
    if($scope.redVeg[i] === false && y === $scope.redVeg[i] ) {
      $scope.correctVeg = true;
    } else {
      $scope.correctVeg = false;
    }
  }

var redFruitlen = $scope.redFruit.length;
var x = $scope.redFruit[0];

for (i=0; i<redFruitlen; i++){
  if ($scope.redFruit[i] === false && x === $scope.redFruit[i]) {
    $scope.correctFruit = true;  
  } else {
    $scope.correctFruit = false;
  }
}

  if($scope.correctVeg === true &&  $scope.correctFruit === true ) {
  $scope.win = true;  
  }  

}



$scope.alerts = [
    { type: 'success', msg: 'Well done! You won!' }
  ];


  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };




}]);//this is the end of the module








