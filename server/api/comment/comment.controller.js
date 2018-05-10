/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/comments              ->  index
 * POST    /api/comments              ->  create
 * GET     /api/comments/:id          ->  show
 * PUT     /api/comments/:id          ->  upsert
 * PATCH   /api/comments/:id          ->  patch
 * DELETE  /api/comments/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Comment from './comment.model';
var _ = require("lodash")

exports.index = function (req, res) {
  Comment.loadRecent(function (err, comments) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, comments);
  })
}

exports.create = function (req, res) {
  delete req.body.date

  var comment = new Comment(_.merge({ author: req.user._id }, req.body));
  comment.save(function (err, comment) {
    if (err) { return handleError(res, err); }
    return res.json(201, comment);
  })
}



















// function respondWithResult(res, statusCode) {
//   statusCode = statusCode || 200;
//   return function(entity) {
//     if(entity) {
//       return res.status(statusCode).json(entity);
//     }
//     return null;
//   };
// }

// function patchUpdates(patches) {
//   return function(entity) {
//     try {
//       // eslint-disable-next-line prefer-reflect
//       jsonpatch.apply(entity, patches, /*validate*/ true);
//     } catch(err) {
//       return Promise.reject(err);
//     }

//     return entity.save();
//   };
// }

// function removeEntity(res) {
//   return function(entity) {
//     if(entity) {
//       return entity.remove()
//         .then(() => {
//           res.status(204).end();
//         });
//     }
//   };
// }

// function handleEntityNotFound(res) {
//   return function(entity) {
//     if(!entity) {
//       res.status(404).end();
//       return null;
//     }
//     return entity;
//   };
// }

// function handleError(res, statusCode) {
//   statusCode = statusCode || 500;
//   return function(err) {
//     res.status(statusCode).send(err);
//   };
// }

// // Gets a list of Comments
// export function index(req, res) {
//   return Comment.find().exec()
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Gets a single Comment from the DB
// export function show(req, res) {
//   return Comment.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Creates a new Comment in the DB
// export function create(req, res) {
//   return Comment.create(req.body)
//     .then(respondWithResult(res, 201))
//     .catch(handleError(res));
// }

// // Upserts the given Comment in the DB at the specified ID
// export function upsert(req, res) {
//   if(req.body._id) {
//     Reflect.deleteProperty(req.body, '_id');
//   }
//   return Comment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Updates an existing Comment in the DB
// export function patch(req, res) {
//   if(req.body._id) {
//     Reflect.deleteProperty(req.body, '_id');
//   }
//   return Comment.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(patchUpdates(req.body))
//     .then(respondWithResult(res))
//     .catch(handleError(res));
// }

// // Deletes a Comment from the DB
// export function destroy(req, res) {
//   return Comment.findById(req.params.id).exec()
//     .then(handleEntityNotFound(res))
//     .then(removeEntity(res))
//     .catch(handleError(res));
// }
