describe('example test', function() {
    it('should be true', function() {
        expect('foo').toBe('foo');
    });
});

describe('Basic Functionality', function(){
  it('should add two numbers', function(){
    expect(addNumbers(1,3)).toBe(4);
    expect(addNumbers(14,3)).toBe(17);
    expect(addNumbers('2',2)).toBe(4);
    expect(addNumbers('14',10)).toBe(24);
  });
});

describe('Main Controller', function(){
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('should have Steve Jobs name', function(){
    var $scope = {};

    var controller = $controller('MainController', { $scope: $scope });
    expect(controller.name).toEqual('Steve Jobs');
  });
});
