'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './comment.events';

var CommentSchema = new mongoose.Schema({
  content: String,
  date: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

CommentSchema.statics = {
  loadRecent: function(cb) {
    this.find({})
      .populate({path:'author', select: 'name'})
      .sort('-date')
      .limit(20)
      .exec(cb);
  }
};

registerEvents(CommentSchema);
export default mongoose.model('Comment', CommentSchema);
