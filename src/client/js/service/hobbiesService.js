// ----- JOBBIES SERVICE ----- //

angular.module('organizerApp').factory('HobbiesService', ['$http', HobbiesService]);


/**
 * Hobby Service handler.
 *
 * @param $http - Service that wraps ajax requests.
 *
 */
function HobbiesService($http){

    return {

    	test: function(){
    		console.log("Testing service!!");
    	},

        // Get all 'hobbies'.
        get: function() {
            return $http.get('/api/hobbies');
        },

        // Create a new 'hobbie'.
        create: function(nerdData){
            return $http.post('/api/hobbies', nerdData);
        },

        // Delete a 'hobbie'.
        delete: function(id){
            return $http.delete('/api/hobbies/' + id);
        }
    }       
};