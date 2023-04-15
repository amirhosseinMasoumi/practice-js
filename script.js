const form = document.querySelector("#form");
const text = document.querySelector("#text");
const email = document.querySelector("#email");
const passOne = document.querySelector("#passone");
const passTwe = document.querySelector("#passtwo");

form.addEventListener=('button',(click)=>{
click.preventDefault();
checkinputs();
})

const checkinputs =()=>{
const textValue =text.value.trim();
const emailValue =email.value.trim();
const passOneValue =passOne.value.trim();
const passTweValue =passTwe.value.trim();

if(textValue===''){
    setError(text,'نام کاربری را درست وارد کنید')
}else{
    setSuccess(text)
}

if(emailValue===''){
    setError(email,'ایمیل را درست وارد کنید')
}else{
    setSuccess(email)
}

if(passOneValue===''){
    setError(passOne,'رمز عبور را درست وارد کنید')
}else{
    setSuccess(passOne)
}

if(passTweValue===''){
    setError(passTwe,'تکرار رمز عبور را درست وارد کنید')
}else{
    setSuccess(passTwe)
}

}

const setError =(input,message)=>{
const inputBox =input.parentElement;
const small =inputBox.querySelector('small');

  inputBox.className='input-boxerror';
  small.innerText = message;
}

const setSuccess =(input)=>{
      const inputBox=input.parentElement;
  inputBox.className = 'input-boxsuccess';
  
}
