//Create the variables
var email;

//Set da value for variables
function SetValues(){
	eMail = document.email_validation.email.value;
}

//Main Function
function Fun_Submition(){
	SetValues();
	var atposition=eMail.indexOf("@");  
	var dotposition=eMail.lastIndexOf(".");  

	//Email Validation
	if(eMail != ""){
		if(atposition<1 || dotposition<atposition+2 || dotposition+2>=eMail.length){
			alert("Please enter a valid e-mail address");
		}else{
			//Validation Successfull..
			document.write("Validation Successfull");
		}
	}else{
		alert("E-Mail should not be empty");
	}
}
