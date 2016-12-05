// ----- MAIN CONTROLLER ----- //

angular.module('organizerApp').controller('MainController', ['$scope', MainController]);


/**
 * Main Controller function.
 *
 * @param $scope - Angular controller scope.
 *
 */
function MainController($scope){

    $scope.test = 'Favorites (Hobbies) ';   
};