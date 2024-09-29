
// ----- Usamos el formulario de registro para registrar usuarios en el sistema ----

// Lo primero que hago es tomar el formulario de registro 
const registro = document.querySelector('#registro')
registro.addEventListener('submit',(e) =>{
    e.preventDefault()
    const name = document.querySelector('#name').value.trim();     
    const correo = document.querySelector('#correo').value.trim();
    const password = document.querySelector('#password').value.trim();

   if (!name || !correo || !password){
    alert('Por favor, completa todos los campos obligatorios.');
    return false;
   }

    const Users = JSON.parse(localStorage.getItem("users")) || [] //array vacio por si no tenemos usuarios registrados
    
    
    
    //chequear si los usuarios nuevos estan o no registrados
    const registrados = Users.find(users =>users.correo === correo)
        if(registrados){
            alert('El usuario ya esta registrado')

            document.querySelector('#name').value = '';
            document.querySelector('#correo').value = '';
            document.querySelector('#password').value = '';

        return false; // el ususario ya existe

            

        } 
            //utilizar el local storage para simular una mini base de datos
    Users.push({name: name, correo:correo, password: password})  // creando un Objeto nuevo 
    localStorage.setItem('users', JSON.stringify(Users))  //esta linea me guarda los campos en mi localStorage
    alert('Registro Exitoso!')
    window.location.href = 'productos.html'
   //vaciar los campos luego del registro

   document.querySelector('#name').value = '';
   document.querySelector('#correo').value = '';
   document.querySelector('#password').value = '';
        
   
         
})

// ----- Ahora utilizo en formulario de Inicio de Sesión para ingresar -----



const loginform = document.querySelector('#entrar')
loginform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const contraseña = document.querySelector('#contra').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(users =>users.correo === email && users.password === contraseña) //validamos los datos del login con los del localstorage

    if (!validUser){
        document.querySelector('#email').value = '';
        document.querySelector('#contra').value = '';
        return alert("Usuario y/o Contraseña incorrectas..")
        
    }else
    alert (`Bienvenido ${validUser.name}`)
    window.location.href = 'productos.html'

    document.querySelector('#email').value = '';
    document.querySelector('#contra').value = '';
})




