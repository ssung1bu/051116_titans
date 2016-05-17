$(document).ready(function(){
	
	var names = Object.keys(data);


	for(var i = 0; i< names.length; i++){
	$("#list").append('<li>'+names[i]+'</li>'); 
	}

	$("#list li").click(function(){;
		//console.log(this);
		var person = this.innerHTML;
		//console.log(person)
		var bio = data[person].bio
		//console.log(bio)
		var gender = data[person].gender
		//console.log(gender)
		if (gender == "f") {
			//$('#females').empty();
			$('#females').html(bio);
		} else {
			//$('#males').empty();
			$('#males').html(bio);
		}
		//$('#bio').empty();
		//$('#bio').append(bio);
	//data[]['bio']
		//var person = data[name];
		
	})


	//var bio = data['Vint Cerf'];
	//$("#bio").append(bio)
});