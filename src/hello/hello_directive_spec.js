import angular from 'angular';


describe('Hello Directive', function () {
  let $scope;
  let $element;

  beforeEach(() => {
    angular.module('test', [])
      .directive('hello', require('./hello_directive'));
  });
  beforeEach(angular.mock.module('test'));

  beforeEach(angular.mock.inject($injector => {
    $scope = $injector.get('$rootScope').$new(true);
    $element = $injector.get('$compile')(angular.element('<hello><hello>'))($scope);
    $scope.$digest();
  }));

  it('should insert `test` into element', () => {
    expect($element.text()).toMatch('hello');
  });
});
