import styles from './hello.css';


const $inject = [];
const Hello = function () {
  const link = $scope => {
    $scope.hello = 'hello ngSydney!';
    $scope.styles = styles;
  };


  return {
    template: require('./hello.html'),
    restrict: 'E',
    link,
    replace: true,
    scope: {}
  };
};

Hello.$inject = $inject;

export default Hello;
