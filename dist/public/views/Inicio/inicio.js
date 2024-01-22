app.controller('HomeController', ['$scope', '$http','$routeParams','$location', function($scope, $http, $routeParams, $location){
    $scope.message = 'Todos los vehiculos';
    $scope.clientes = [];
    $scope.es_actualizar = false;
    $scope.es_nuevo = false;

    $scope.nvoCliente = {
      nombre: '',
      email: 0,
      estado: 1
    }

$scope.uri = '/api/usuarios';
   // $scope.uri = 'http://localhost:3000/clientes';
  // $scope.uri = 'http://localhost:8000/api/usuarios/'; 
    $scope.getClientes = function(){
      $http.get(`${$scope.uri}`).then(function(response){
        $scope.clientes = response.data;
      })
    }

    $scope.getClientes();

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
      $http.delete(`${$scope.uri}/${id}`).then(function (response) {
        $scope.getClientes();
        Swal.fire({
            icon: "success",
            title: "Cliente eliminado",
            showConfirmButton: true,
            timer: 3000
        });
        
    })
}

$scope.actualiCliente = function(){
  $http.put(`${$scope.uri}/${$scope.id}`, $scope.nvoCliente).then(function(response){
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
      email: cliente.email,
      estado: cliente.estado
  };
  $scope.id = cliente.id
  $scope.es_actualizar = true;
  $scope.es_nuevo = true;
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
