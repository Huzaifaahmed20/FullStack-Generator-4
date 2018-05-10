'use strict';

describe('Component: ProductsComponent', function() {
  // load the controller's module
  beforeEach(module('fullstackversion4App.products'));

  var ProductsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProductsComponent = $componentController('products', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
