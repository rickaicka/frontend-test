angular.module("Main",[]).controller("UsuarioCadastroController", ['$scope', function($scope){
    $scope.usuario={}
    $scope.masters=[];
    $scope.regex = "^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$";
	$scope.submeter = function(usuario){	
        $scope.usuario = {usuario};
        $scope.masters.push($scope.usuario);
        console.log($scope.masters)
    };
}]);