function MainController() {
    this.name = 'Steve Jobs';
}

function addNumbers(n1, n2){
  return parseFloat(n1, 10) + parseFloat(n2, 10);
}

angular
    .module('app')
    .controller('MainController', MainController);
