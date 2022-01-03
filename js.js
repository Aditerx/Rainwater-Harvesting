var app = angular.module("myApp", ["ngRoute"]);


app.run(function ($rootScope, $http) {

    $http.get("accessories.json").then(function (response) {
        $rootScope.accessories = response.data.accessories;
        console.log($rootScope.accessories);
    });

    $http.get("pumpControl.json").then(function (response) {
        $rootScope.pumpControl = response.data.pumpControl;
        console.log($rootScope.pumpControl);
    });

    $http.get("water_sterilisation.json").then(function (response) {
        $rootScope.water_sterilisation = response.data.water_sterilisation;
        console.log($rootScope.water_sterilisation);
    });

    $http.get("tanks.json").then(function (response) {
        $rootScope.tanks = response.data.tanks;
        console.log($rootScope.tanks);
    });

});