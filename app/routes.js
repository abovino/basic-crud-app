// create new express router
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

module.exports = router;

router.get('/', mainController.showHome);

// Events routes
router.get('/events', eventsController.showEvents);

// Seed events
router.get('/events/seed', eventsController.seedEvents);

// Create events
router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// Edit events
router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug', eventsController.processEdit);

// delete events
router.get('/events/:slug/delete', eventsController.deleteEvent);

// Show a single event
router.get('/events/:slug', eventsController.showSingle);