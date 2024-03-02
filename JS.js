var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
var sendError =document.getElementById('Send-error');
function validateName() {
	var name = document.getElementById('contact-name').value;

	if(name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false;
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = 'Write full name';
		return false;
	}
	nameError.innerHTML='<i class="fas fa-check-circle"></i>';
	return true;

}
function validateemail() {
	var email = document.getElementById('contact-email').value;

	if(email.length == 0){
		emailError.innerHTML = 'email is required';
		return false;
	}
	if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = 'email invalid';
		return false;
	}
	emailError.innerHTML='<i class="fas fa-check-circle"></i>';
	return true;

}
function validatemessage() {
	var message = document.getElementById('contact-message').value;
    var required =30;
    var left = required -message.length;
	if(left > 0){
		messageError.innerHTML = left +' more characters required';
		return false;
	}
	messageError.innerHTML='<i class="fas fa-check-circle"></i>';
	return true;

}
function validateForm(){
	if(!validateName() || !validateemail() || !validatemessage()){
		sendError.style.display = 'block';
		sendError.innerHTML ='plz fix error to send';
		setTimeout(function(){sendError.style.display= 'none';},3000);
		return false;
	}
}