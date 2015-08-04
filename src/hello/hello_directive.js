const $inject = [];
const Hello = function () {
  require('./hello.css');

  const link = $scope => {
    $scope.hello = 'hello ngSydney!';
  };

  return {
    template: require('./hello.html'),
    restrict: 'E',
    link,
    scope: {}
  };
};

Hello.$inject = $inject;

export default Hello;
