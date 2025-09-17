const form=document.getElementById("login-form");
const rememberMe=document.getElementById("checkbox");
const userName=document.getElementById("username");
const password=document.getElementById("password");
const existingButton=document.getElementById("existing");
// console.log(form[2].checked);
form.addEventListener("submit",(e)=>{
	e.preventDefault();
// console.log(form[2].checked);
	if(!rememberMe.checked){
		alert(`Logged in as ${userName.value}`);
		localStorage.clear();
	}else{
		localStorage.setItem("username",userName.value);
		localStorage.setItem("password",password.value);
		localStorage.setItem("rememberMe","checked");
		window.location.reload();
	}
	form.reset();
});
window.addEventListener("load",(e)=>{
	if(localStorage.getItem("rememberMe")=="checked"){
	existingButton.classList.add("visible");
	}
});
existingButton.addEventListener("click",(e)=>{
	alert(`Logged in as ${localStorage.getItem("username")}`);
})