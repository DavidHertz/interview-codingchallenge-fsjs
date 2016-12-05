// ----- Application 'ROUTES' configuration. ----- //

// Set the reference to 'Hobbies' model.
var Hobbies = require('../models/hobbies');

/**
 * Configures server API.
 *
 * @param app - Reference to express framework main objet.
 */
module.exports = function(app) {

    // ================= Server routes. ====================== //

    /*  "/jobbies"
     *    GET: finds all contacts
     *    POST: creates a new contact
     */
    app.get("/api/hobbies", function(req, res) {

        // Mongose 'find-all' call.
        Hobbies.find(function(error, hobbies) {

            // If error, then send it and finish execution.
            if(error) {
                res.send(error);
            }

            // Return all 'hobbies' in JSON format.
            res.json(hobbies);
        });
    });


    app.post("/api/hobbies", function(req, res) {
    });


    /*  "/hobbies/:id"
     *   GET: find hobbies by id
     *   PUT: update hobbies by id
     *   DELETE: deletes hobbies by id
     */
    app.get("/api/hobbies/:id", function(req, res) {
    });

    app.put("/api/hobbies/:id", function(req, res) {
    });

    app.delete("/api/hobbies/:id", function(req, res) {
    });


    // ===== Test ===== //
    
    // Route to handle all 'AngularJS' request.
    /*
    app.get('*', function(req, res) {
        res.sendfile('./app/public/views/index.htm');
    });
    */
};