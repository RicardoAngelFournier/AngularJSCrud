app.controller('AboutController', ['$scope', '$http','$routeParams','$location', '$interval', function($scope, $http, $routeParams, $location , $interval){
    $scope.message = 'Vehiculos Estacionados';

    $scope.clientes = [];
    $scope.tipos = [];
    $scope.tiempos = [];
    $scope.timers = [];

    $scope.es_actualizar = false;
    $scope.es_nuevo = false;
    $scope.tiempo = false;

    $scope.nvoCliente = {
      nombre: '',
      email: 0,
      estado: 1
    }

$scope.uri = 'http://localhost:8000/api/vehiculos';
$scope.uri2 = 'http://localhost:8000/api/tipos';
$scope.uri3 = 'http://localhost:8000/api/tiempo';
   // $scope.uri = 'http://localhost:3000/clientes';
  // $scope.uri = 'http://localhost:8000/api/usuarios/';

  function createTimer() {
    return {
        seconds: 0,
        minutes: 0,
        hours: 0
    };
}


$scope.startTimer = function (id, index) {
    index = id;
    $scope.timers[index] = $interval(function () {
        updateTimer(index);
    }, 1000);
    $scope.tiempo = true;
};
$scope.stopTimer = function (id, index) {
    index = id;
    // Stop the timer
    if (angular.isDefined($scope.timers[index])) {
        $interval.cancel($scope.timers[index]);
        $scope.timers[index] = undefined;  // Reset the timer variable
    }
};
function updateTimer(id, index) {
    index = id;
    $scope.timers[index].seconds++;

    if ($scope.timers[index].seconds === 60) {
        $scope.timers[index].seconds = 0;
        $scope.timers[index].minutes++;

        if ($scope.timers[index].minutes === 60) {
            $scope.timers[index].minutes = 0;
            $scope.timers[index].hours++;
        }
    }
}

$scope.resetTimer = function () {
    $scope.timer = {
        seconds: 0,
        minutes: 0,
        hours: 0
    };
};


$scope.salidaCliente = function (id, index) {

    $scope.stopTimer(index);

    var elapsedHours = $scope.timers[index].hours;
    var elapsedMinutes = $scope.timers[index].minutes;
    var elapsedSeconds = $scope.timers[index].seconds;

    console.log("Elapsed Time:", elapsedHours + ":" + elapsedMinutes + ":" + elapsedSeconds);
    $scope.timers[index] = createTimer();

   $http.post(`${$scope.uri3}`,$scope.tiemposCliente).then(function(response){
        Swal.fire({
              icon: "success",
              title: "Cliente guardado",
              showConfirmButton: true
        }) 
        
      })
};
  
  $scope.getClientes = function () {
    $http.get(`${$scope.uri}`).then(function (response) {
        $scope.clientes = response.data.filter(function (cliente) {
            return cliente.esta_estacionado === 1;
        });

        $scope.timers = new Array($scope.clientes.length);
        for (var i = 0; i < $scope.timers.length; i++) {
            $scope.timers[i] = createTimer();
        }
    });
}

    $scope.getTipos = function(){
      $http.get(`${$scope.uri2}`).then(function(response){
        $scope.tipos = response.data;
      })
    }
    
    $scope.getTiempos= function () {
        $http.get(`${$scope.uri3}`).then(function (response) {
            $scope.tiempos = response.data;
        });
    }

    $scope.getClientes();
    $scope.getTipos();
    $scope.getTiempos();

    $scope.guardarCliente = function($event){
      $event.preventDefault();
      $http.post(`${$scope.uri}`,$scope.nvoCliente).then(function(response){
        Swal.fire({
              icon: "success",
              title: "Cliente guardado",
              showConfirmButton: true
        }) 
        
      })
    }

    $scope.borrarCliente = function(id){
        $scope.mandarE = {
            esta_estacionado: 0
          }
          $http.put(`${$scope.uri}/${id}`, $scope.mandarE).then(function(){
        $scope.getClientes();
        Swal.fire({
            icon: "success",
            title: "Automovil se quito de tabla estacionamiento",
            showConfirmButton: true,
            timer: 3000    
      });
        
    })

}

$scope.actualiCliente = function(){
  $http.put(`${$scope.uri}/${$scope.id}`, $scope.nvoCliente).then(function(){
    $scope.getClientes();
    Swal.fire({
          icon: "success",
          title: "Cliente actualizado",
          showConfirmButton: true,
          timer: 3000    
    });
  })
}


$scope.sendCliente = function (cliente) {
  $scope.nvoCliente = {
      id: cliente.id,
      nombre: cliente.nombre,
      esta_estacionado: cliente.esta_estacionado,
      estado: cliente.activo
  };
  $scope.id = cliente.id
  $scope.es_actualizar = true;
  $scope.es_nuevo = true;
}

$scope.sendTipo = function (tipo) {
  $scope.nvoTipo = {
      id: tipo.id,
      nombre: tipo.nombre,
      rate: tipo.rate,
      pagan: tipo.pagan,
      activo: tipo.activo
  };
  $scope.id = tipo.id

}

$scope.esnuevo = function(){
  $scope.es_nuevo = true;
}


$scope.cancelarCliente = function (){
  $scope.nvoCliente = {
    nombre: '',
    email: 0,
    estado: 1
  }
  $scope.es_nuevo = false;
  $scope.es_actualizar = false;
}
}]);


