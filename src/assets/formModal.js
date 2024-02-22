/* ========== LOGIN AREA =========== */

const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content');

if(loginButton){
        loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login');
    });
}

/*
* Trocar para loginContent.classList.remove('show-login');
*/
if(loginClose){
        loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login');
    });
}
