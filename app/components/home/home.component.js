let home = {
  bindings: {},
  templateUrl: require('./home.html'),
  controller: homeCtrl,
  controllerAs: 'homeCtrl'
}

class homeCtrl {
  constructor($scope, $state, appService) {
    this.homeVar = "This text is from home controller";
    console.log(appService);
  }
};

home.$inject = ['$scope', '$state', 'appService'];
export default home;