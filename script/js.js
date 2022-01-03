var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "home.html"
        })
        .when("/Menu", {
            templateUrl: "menu.html"
        })
        .when("/Cart", {
            templateUrl: "cart.html"
        })
        .when("/About", {
            templateUrl: "contact.html"
        });
});


app.run(function ($rootScope, $http) {

    $http.get("accessories.json").then(function (response) {
        $rootScope.accessories = response.data.accessories;
        console.log($rootScope.accessories);

    });
    
});