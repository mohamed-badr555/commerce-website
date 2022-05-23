const form =document.getElementById('form');
const firstname =document.getElementById('firstname');
const lastname =document.getElementById('lastname');
const email =document.getElementById('email');
const adress =document.getElementById('adress');
const pass =document.getElementById('pass');
const check =document.getElementById('check');
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
  const firstnameValue=   firstname.value.trim();
  const lastnameValue=   lastname.value.trim();
  const emailValue =email.value.trim();
  const adressValue =adress.value.trim();
 const passValue=   pass.value.trim();
const checkValue =    check.value.trim();
if(firstnameValue===''){
    //show error 
    //add error classs
setErrorFor(firstname,'First Name cannot be blanck');
 }else if(hasNumber(firstnameValue) || (format.test(firstnameValue))){
    setErrorFor(firstname,'Name must have characters only');
 }
else{
// add sucess class
setSuccessFor(firstname);
}
if(lastnameValue===''){
setErrorFor(lastname,'Last Name cannot be blanck');
 }else if(hasNumber(lastnameValue) || (format.test(lastnameValue))){
    setErrorFor(lastname,'Name must have characters only');
 }
else{
setSuccessFor(lastname);
}
if(emailValue===''){
    setErrorFor(email,'Email cannot be blanck');
}else if(!isEmail(emailValue)){
    setErrorFor(email,'Email is not valid');
}else{
    setSuccessFor(email);
}

if(adressValue===''){
    setErrorFor(adress,'Adress cannot be blanck');
}
        else{
            setSuccessFor(adress);
        }
        if (passValue==='') {
            setErrorFor(pass,'passWord cannot be blanck');
        }else if(pass.value.length !=8 ){
            setErrorFor(pass,'Password must be 8 characters only');
        }else if(pass.lenght !== passValue.lenght){
            setErrorFor(pass,'Password mustn\'t contain any space');
        }else if(pass.value[0] !== pass.value[0].toUpperCase()){
            setErrorFor(pass,'The password must start with uppercase character');
        }else if(!hasNumber(passValue) || !format.test(passValue)){
            setErrorFor(pass,'Add one digit And special character');
        }
        else{
            setSuccessFor(pass);
        }
        
        if(checkValue===''){
            setErrorFor(check,'password cannot be blanck');
        }
        else if(check.value.length !=8 ){
            setErrorFor(check,'Password must be 8 characters only');
        }else if(check.lenght !== checkValue.lenght){
            setErrorFor(check,'Password mustn\'t contain any space');
        }else if(check.value[0] !== check.value[0].toUpperCase()){
            setErrorFor(check,'The password must start with uppercase character');
        }else if(!hasNumber(checkValue) || !format.test(checkValue)){
            setErrorFor(pass,'Add one digit And special character');
        }else if(passValue  !== checkValue){
            setErrorFor(check,'Passwrd does not Match');
        }
        else{
            setSuccessFor(check);
        }
       
    }
////********** */
function setErrorFor(input,message){
    const formControl =input.parentElement;
    const small =formControl.querySelector('small');
    //add error message
    small.innerText =message;
    //add error class
    formControl.className='form-control error';
}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function hasNumber(myString) {
    return /\d/.test(myString);
  }
