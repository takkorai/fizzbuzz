

$(document).ready(function(){
	$(".numSubmit").click(function(event){
		event.preventDefault();
		var x = $(".number").val();
		if(x>1000){
			alert("you need to enter # less than 1000")
		}
		else{
			for(var i=1; i<=x;i++){
				if(((i % 3)==0) && ((i % 5)==0)){
					$(".display").append("fizz buzz"+",");

				}
				else if((i % 5)==0){

					$(".display").append("buzz"+",");

				}
				else if((i % 3)==0){
						$(".display").append("fizz"+",");
				}

				else
				$(".display").append(i+",");
			};
		};
	});
});