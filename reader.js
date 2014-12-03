angular.module('reader', [])
  .controller('readerCtrl', function($scope){
  	$scope.display = 0;
  	$scope.counter = 0;
  	$scope.increment = function(){
	  	// $scope.text = $scope.str.split(" ");
	  	document.body.style.backgroundColor= 'rgba(0,0,0,0.8)';
	  	document.getElementById("words").style.backgroundColor="rgba(0,0,0,0)";
	  	document.getElementById("buttons").style.backgroundColor="rgba(0,0,0,0)";

  		$scope.str = document.getElementById("words").value;
	  	$scope.words_set();
	  	$scope.counter++;

  		clearInterval($scope.refreshIntervalID);

  		$scope.refreshIntervalID = setInterval(function(){
  		// var refreshIntervalID = setInterval(fnc, ###)
        $scope.$apply(function() {
					if($scope.display === $scope.text.length){
						$scope.display = 0;
					}
				  	$scope.words_set();
						$scope.display++;	
						$scope.word = "";
						$scope.word = $scope.text[$scope.display];
        });
    	}, 150-$scope.counter*20);
  	}
  	$scope.prev = function(){
  		$scope.str = document.getElementById("words").value;
	  	$scope.words_set();
  		if($scope.display === $scope.text.length){
				$scope.display = $scope.text.length;
				console.log($scope.display);
			}
				$scope.word = "";
				$scope.word = $scope.text[$scope.display];
				$scope.display--;	
  	}
  	$scope.next = function(){
  		$scope.str = document.getElementById("words").value;
		  $scope.words_set();

  		if($scope.display === $scope.text.length){
						$scope.display = 0;
				}
			$scope.word = "";
			$scope.word = $scope.text[$scope.display];
			$scope.display++;	
  	}

		$scope.words_set = function(){
		$scope.text = $scope.str.trim()
		.replace(/([-—])(\w)/g, '$1 $2')
		.replace(/[\r\n]/g, ' {linebreak} ')
		.replace(/[ \t]{2,}/g, ' ')
		.split(' ');
		for (var j = 1; j < $scope.text.length; j++) {
		$scope.text[j] = $scope.text[j].replace(/{linebreak}/g, ' ');
		}
		}

  });
