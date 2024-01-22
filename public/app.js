var app = angular.module('myApp', ['ngRoute']);

app.controller('NavbarController', function() {
    // Puedes agregar lógica específica del navbar aquí si es necesario
});

app.component('navbarComponent', {
  templateUrl: './public/navbar.html',
  controller: 'NavbarController'
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/inicio/inicio.html',
      controller: 'HomeController' // Asegúrate de tener este controlador definido
    })
    .when('/about', {
      templateUrl: './views/about/listado.html',
      controller: 'AboutController' // Asegúrate de tener este controlador definido
    })
    .when('/crud', {
      templateUrl: './views/crud/listado.html',
      controller: 'CrudController' // Asegúrate de tener este controlador definido
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
}]);

app.controller('MainController', function($scope) {
  console.log("🚀 ~ file: app.js:33 ~ app.controller ~ MainController:", 'MainController')
});
