const express = require('express');
// const authController = require('./../controllers/authController');
const teamController = require('./../controllers/teamController'); //To import all the tour functions.
// const reviewController = require('./../controllers/reviewController');
// const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();//we create a new router,to connect this new router to application using middlewar.

router.route('/:id').get(teamController.getTeam).patch(teamController.updateTeam)
.delete(teamController.deleteTeam);

router.route('/').get(teamController.getAllTeam).post(teamController.createTeam);
// router.use('/:tourId/reviews',reviewRouter);    

// router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours); //Before calling this 
// //route, prefill some fields in query string, so to do this run a middle before to run getAllTours
// router.route('/tour-stats').get(tourController.getTourStats); //route for aggregation statistic
// router.route('/monthly-plan/:year')
// .get(authController.protect,authController.restrictTo('admin','lead-guide','guide'),tourController.getMonthlyPlan); 
// router.route('/').get(tourController.getAllTours)
// .post(authController.restrictTo('admin','lead-guide'),tourController.createTour);//same as above two, 


// //coordinated of place where we lived.
// router.route('/tours-within/:distance/center/:latlng/unit/:unit').get(tourController.getToursWithin); 

// router.route('/:id').get(tourController.getTour)
// .patch(authController.protect,authController.restrictTo('admin','lead-guide'),tourController.updateTour)
// .delete(authController.protect,authController.restrictTo('admin','lead-guide'),tourController.deleteTour);
//same as above three.

module.exports = router; 