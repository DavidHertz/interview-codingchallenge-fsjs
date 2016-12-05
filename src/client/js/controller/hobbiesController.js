// ----- JOBBIES CONTROLLER ----- //

angular.module('organizerApp').controller('HobbiesController', ['$scope', HobbiesController]);


/**
 * Jobbies Controller function.
 *
 * @param $scope - Angular controller scope.
 *
 */
function HobbiesController($scope){

    $scope.test = 'Hobbies controller working!!';

};