var app = angular.module("myApp", ["ngRoute"]);


app.run(function ($rootScope, $http) {

    $http.get("accessories.json").then(function (response) {
        $rootScope.accessories = response.data.accessories;
        console.log($rootScope.accessories);
    });

});