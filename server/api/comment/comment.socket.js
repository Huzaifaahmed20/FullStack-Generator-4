/**
 * Broadcast updates to client when the model changes
 */

'use strict';

import CommentEvents from './comment.events';

// Model events to emit
var events = ['save', 'remove'];

function onSave(socket, doc, cb) {
  CommentEvents.populate(doc, {path:'author', select: 'name'}, function(err, comment) {
      socket.emit('comment:save', comment);
    });
  }
// export function register(socket) {
//   // Bind model events to socket events
//   for(var i = 0, eventsLength = events.length; i < eventsLength; i++) {
//     var event = events[i];
//     var listener = createListener(`comment:${event}`, socket);

//     CommentEvents.on(event, listener);
//     socket.on('disconnect', removeListener(event, listener));
//   }
// }


// function createListener(event, socket) {
//   return function(doc) {
//     socket.emit(event, doc);
//   };
// }

// function removeListener(event, listener) {
//   return function() {
//     CommentEvents.removeListener(event, listener);
//   };
// }
