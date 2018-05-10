/**
 * Comment model events
 */

'use strict';

import {EventEmitter} from 'events';
var CommentEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
CommentEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Comment) {
  for(var e in events) {
    let event = events[e];
    Comment.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    CommentEvents.emit(event + ':' + doc._id, doc);
    CommentEvents.emit(event, doc);
  };
}

export {registerEvents};
export default CommentEvents;
