$(document).ready(function(){
	
	var names = Object.keys(data);


	for(var i = 0; i< names.length; i++){
	$("#list").append('<li>'+names[i]+'</li>'); 
	}

	$("#list li").click(function(){;
		//console.log(this);
		var person = this.innerHTML;
		//console.log(person)
		var bio = data[person]
		$('#bio').empty();
		$('#bio').append(bio);
	})


	//var bio = data['Vint Cerf'];
	//$("#bio").append(bio)
});