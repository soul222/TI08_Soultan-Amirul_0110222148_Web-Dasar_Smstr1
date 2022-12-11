let User = document.getElementById('userName')
let password = document.getElementById('password')
// Sebuah function saat sebuah nilai dari input 
   let verify = function() {
   if (User.value == 'admin' && password.value == 'admin123'){
       alert('Connection')
       window.open('Tugas10.1.2..html','_blank')
   }else{
       alert('Your Username or Password is invalid')
   }
}