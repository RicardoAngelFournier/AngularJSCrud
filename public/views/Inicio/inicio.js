app.controller('HomeController', ['$scope', '$http','$routeParams','$location', function($scope, $http, $routeParams, $location){
    $scope.message = 'Todos los Vehiculos';

    $scope.clientes = [];
    $scope.tipos = [];

    $scope.es_actualizar = false;
    $scope.es_nuevo = false;

    $scope.nvoCliente = {
      nombre: 'Nuevo',
      placas_id: 'aaaa',
      tipo: 1
    }

$scope.uri = 'http://localhost:8000/api/vehiculos';
$scope.uri2 = 'http://localhost:8000/api/tipos';
$scope.uri3 = 'http://localhost:8000/api/tiempo';
   // $scope.uri = 'http://localhost:3000/clientes';
  // $scope.uri = 'http://localhost:8000/api/usuarios/';

    $scope.getClientes = function(){
      $http.get(`${$scope.uri}`).then(function(response){
        $scope.clientes = response.data;
      })
    }

    $scope.getTipos = function(){
      $http.get(`${$scope.uri2}`).then(function(response){
        $scope.tipos = response.data;
      })
    }
    
    $scope.getClientes();
    $scope.getTipos();

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

$scope.sendEstacio = function(id){
  $scope.mandarE = {
    esta_estacionado: 1
  }
  $http.put(`${$scope.uri}/${id}`, $scope.mandarE).then(function(){
    $scope.getClientes();
    Swal.fire({
          icon: "success",
          title: "Automovil entro al estacionamiento",
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
      estado: cliente.estado
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


