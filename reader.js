angular.module('reader', [])
  .controller('readerCtrl', function($scope){
  	$scope.display = 0;
  	$scope.increment = function(){
	  	$scope.str = document.getElementById("words").value;
	  	// $scope.text = $scope.str.split(" ");
	  	$scope.words_set();

  		setInterval(function(){
        $scope.$apply(function() {
					if($scope.display === $scope.text.length){
						$scope.display = 0;
					}
				  	$scope.words_set();
						$scope.display++;	
						$scope.word = "";
						$scope.word = $scope.text[$scope.display];
        });
    	}, 150);
  	}

		$scope.words_set = function(){
		$scope.text = $scope.str.trim()
		.replace(/([-—])(\w)/g, '$1 $2')
		.replace(/[\r\n]/g, ' {linebreak} ')
		.replace(/[ \t]{2,}/g, ' ')
		.split(' ');
		for (var j = 1; j < $scope.text.length; j++) {
		$scope.text[j] = $scope.text[j].replace(/{linebreak}/g, '    ');
		}
		}

  });
