'use strict';

describe('Component: CommentsComponent', function() {
  // load the controller's module
  beforeEach(module('fullstackversion4App.comments'));

  var CommentsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CommentsComponent = $componentController('comments', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
