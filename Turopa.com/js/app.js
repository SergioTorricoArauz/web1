let isDisplay = false
function menu(){
    let menu = document.getElementById('menu')
    menu.onclick = ()=>{
        if(isDisplay){
            document.getElementsByClassName('mobile-slider')[0].style.display = "none"
            isDisplay = false
        }else{
            document.getElementsByClassName('mobile-slider')[0].style.display = "block"
            isDisplay = true
        }
    }

    let menuadmin = document.getElementById('menuadmin')
    menuadmin.onclick = ()=>{
        if(isDisplay){
            document.getElementsByClassName('mobile-slider')[1].style.display = "none"
            isDisplay = false
        }else{
            document.getElementsByClassName('mobile-slider')[1].style.display = "block"
            isDisplay = true
        }
    }

}

// Ejemplo implementando el metodo POST:
async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // Ejemplo implementando el metodo GET:
async function getData(url = '') {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function patchData(url = '', file) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      body: file,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function patchDataUpdate(url = '', data) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  async function deleteData(url = '') {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

function cambiador(){
    document.getElementById('btnlogin').addEventListener('click',()=>{
        document.getElementsByClassName('seccion-registro')[0].style.display = "none"
        document.getElementsByClassName('seccion-login')[0].style.display = "block"
    });
    document.getElementById('btnregistrar').addEventListener('click',()=>{
        document.getElementsByClassName('seccion-login')[0].style.display = "none"
        document.getElementsByClassName('seccion-registro')[0].style.display = "block"
    });
}

function login(){
   document.getElementById('formLogin').addEventListener("submit",()=>{
       window.event.preventDefault();
   })
   let username = document.getElementById('txtuserlogin').value;
   let password = document.getElementById('txtpasswordlogin').value;
    postData('http://127.0.0.1:8000/api/token/', { "username": username,"password": password }).then(data => {
        if(data.id){
            console.log("nice")
            sessionStorage.setItem("usuario",JSON.stringify(data))
            window.location.href = "http://127.0.0.1:5500/index.html"
        }else if(data.detail == "No active account found with the given credentials"){
            console.log("credenciales incorrectos")
            document.getElementById('txtuser').value = ""
            document.getElementById('txtpassword').value = ""
            document.getElementsByClassName('advertencia')[0].style.display = "block"
        }        
    }).catch(error =>{
        console.log(error)
    })
}

function registrar(){
    document.getElementById('formRegistrar').addEventListener("submit",()=>{
        window.event.preventDefault();
    })
    usuario = {"first_name":"","last_name":"","email":"","username":"","password":"","date_of_birth":""}
    usuario.first_name = document.getElementById('txtnombre').value
    usuario.last_name = document.getElementById('txtapellido').value
    usuario.email = document.getElementById('txtemail').value
    usuario.username = document.getElementById('txtuser').value
    usuario.password = document.getElementById('txtpassword').value
    usuario.date_of_birth = document.getElementById('txtdate').value

    postData('http://127.0.0.1:8000/api/usuario/usuario/', usuario).then(data =>{
        if(data.id){
            window.location.href = "http://127.0.0.1:5500/pages/login.html"
        }
        console.log(data.email)
        if(data.email[0] == "Enter a valid email address."){
            document.getElementById('lbladvertencia').innerHTML = "Enter a valid email address."
            document.getElementsByClassName('lbladvertencia')[0].style.display = "block"
        }
    })

}

function getProductosHombres(){
    getData('http://127.0.0.1:8000/api/producto/producto/hombres/').then(data =>{
        console.log(data)
        innertHTML = crearCard(data)
        document.getElementsByClassName('seccion-hombres')[0].innerHTML = innertHTML
    })
}

function getProductosMujeres(){
    getData('http://127.0.0.1:8000/api/producto/producto/mujeres/').then(data =>{
        innertHTML = crearCard(data)
        document.getElementsByClassName('seccion-mujeres')[0].innerHTML = innertHTML
    })
}

function crearCard(data){
    html = ""
    data.forEach(element => {
        html += `<div class="card">
        <div class="head">
            <img src="http://127.0.0.1:8000${element.img}" alt="jeans" width="200">
        </div>
        <div class="body">
            <div>
                ${element.nombre}
            </div>
            <div>
                ${element.descripcion}
            </div>
            <div>
                ${element.precio}
            </div>
        </div>
        <div class="footer">
            <a href="/pages/visualizar.html?id=${element.id}"><div class="ver">
                ver
            </div></a>
        </div>
    </div>`
    });
    return html;
}

function search(){
    document.getElementById('imgsearch').addEventListener('click',()=>{
        let s = document.getElementById('search').value
        getData('http://127.0.0.1:8000/api/producto/producto/search/?s=' + s).then(data=>{
            html = crearCard(data)
            document.getElementById('container').innerHTML = ""
            document.getElementsByClassName('container-search')[0].innerHTML = html
            if(data.length == 0){
                document.getElementsByClassName('container-search')[0].innerHTML = "<h2>SIN RESULTADOS</h2>"
            }
        })
    })
    document.getElementById('imgsearchadmin').addEventListener('click',()=>{
        let s = document.getElementById('searchadmin').value
        getData('http://127.0.0.1:8000/api/producto/producto/search/?s=' + s).then(data=>{
            html = crearCard(data)
            document.getElementById('container').innerHTML = ""
            document.getElementsByClassName('container-search')[0].innerHTML = html
            if(data.length == 0){
                document.getElementsByClassName('container-search')[0].innerHTML = "<h2>SIN RESULTADOS</h2>"
            }
        })
    })

    document.getElementById('imgsearchadminmobile').addEventListener('click',()=>{
        let s = document.getElementById('searchadminmobile').value
        getData('http://127.0.0.1:8000/api/producto/producto/search/?s=' + s).then(data=>{
            html = crearCard(data)
            document.getElementById('container').innerHTML = ""
            document.getElementsByClassName('container-search')[0].innerHTML = html
            if(data.length == 0){
                document.getElementsByClassName('container-search')[0].innerHTML = "<h2>SIN RESULTADOS</h2>"
            }
        })
    })
}

function validarUsuarioActual(){
    if(window.location == "http://127.0.0.1:5500/pages/login.html"){
        if(sessionStorage.getItem('usuario')){
            window.location.href = "http://127.0.0.1:5500/index.html"
        }
    }
    

    if(window.location == "http://127.0.0.1:5500/pages/administracion.html"){
        if(sessionStorage.getItem('usuario')){
            
        }else{
            window.location.href = "http://127.0.0.1:5500/index.html"
        }
    }

    if(sessionStorage.getItem('usuario')){
        document.getElementsByClassName('invitado')[0].style.display = "none"
        document.getElementsByClassName('admin')[0].style.display = "block"
        getProductosPropios()
    }else{
        document.getElementsByClassName('invitado')[0].style.display = "block"
        document.getElementsByClassName('admin')[0].style.display = "none"
        
    }
}

function goLogin(){
    window.location.href = "http://127.0.0.1:5500/pages/login.html"
}

function goRegistro(){
    window.location.href = "http://127.0.0.1:5500/pages/login.html"
}

function salir(){
    sessionStorage.clear()
    window.location.href = "http://127.0.0.1:5500/index.html"
}

function crearCardParaAdmin(data){
    html = ""
    data.forEach(element => {
        html += `<div class="card">
        <div class="head">
            <img src="http://127.0.0.1:8000${element.img}" alt="jeans" width="200">
        </div>
        <div class="body">
            <div>
                ${element.nombre}
            </div>
            <div>
                ${element.descripcion}
            </div>
            <div>
                ${element.precio}
            </div>
        </div>
        <div class="footer">
            <div id=editar-${element.id} onclick=editar(this)>
                Editar
            </div>
            <div id=estado-${element.id} onclick=changeEstado(this,${element.habilitado})>
                ${element.habilitado? "Deshabilitar" : "Habilitar"}
            </div>
            <div id=eliminar-${element.id} onclick=eliminar(this)>
                Eliminar
            </div>
        </div>
    </div>`
    });
    return html;
}

function getProductosPropios(){
    let usuario = JSON.parse(sessionStorage.getItem('usuario'))
    getData('http://127.0.0.1:8000/api/producto/producto/propios/?id=' + usuario.id).then(data=>{
        if(data.length > 0){
            html = crearCardParaAdmin(data)
            document.getElementsByClassName('productos-propios')[0].innerHTML = html
        }
    })
}

function goCrear(){
    document.location.href = "http://127.0.0.1:5500/pages/crear.html"
}

function crearProducto(){
    //detener el evento de mandado del formulario
    document.getElementById('formCrearProducto').addEventListener("submit",()=>{
        window.event.preventDefault();
    
    })
    
    producto = {"nombre":"","descripcion":"","habilitado":"","genero":"","usuario":"","precio":""}
    producto.nombre = document.getElementById('txtnombreproducto').value
    producto.descripcion = document.getElementById('txtdescripcion').value
    producto.precio = document.getElementById('txtprecio').value

    let radios_habilitados = document.getElementsByName('estado');
    for (var i = 0, length = radios_habilitados.length; i < length; i++) {
        if (radios_habilitados[i].checked) {
          // do whatever you want with the checked radio
          
          producto.habilitado = radios_habilitados[i].value
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

    let radios_generos = document.getElementsByName('genero');
    for (var i = 0, length = radios_generos.length; i < length; i++) {
        if (radios_generos[i].checked) {
          // do whatever you want with the checked radio
          
          producto.genero = radios_generos[i].value
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }
    producto.usuario = JSON.parse(sessionStorage.getItem('usuario')).id

    postData('http://127.0.0.1:8000/api/producto/producto/', producto).then(data=>{
        if(data.id){
            let formData = new FormData();
            let file = document.getElementById('file');
            formData.append('img',file.files[0])
            patchData('http://127.0.0.1:8000/api/producto/producto/' + data.id + '/', formData ).then(data=>{
                if(data.id){
                    window.location.href = "http://127.0.0.1:5500/pages/administracion.html"
                }
            }).catch(error=>{
                console.log(error)
            })
        }
    })
}

function crearCardView(data){
    
    
        html = `<div class="card-view">
        <div class="head-view">
            <img src="${data.producto.img}" alt="jeans" width="200">
        </div>
        <div class="body-view">
            <div>
                ${data.producto.nombre}
            </div>
            <div>
                ${data.producto.descripcion}
            </div>
            <div>
                ${data.producto.precio}
            </div>
        </div>
        <div class="footer-view">
            <div>
                ${data.usuario.first_name}
            </div>
            <div>
                ${data.usuario.last_name}
            </div>
            <div>
                ${data.usuario.email}
            </div>
        </div>
    </div>`
    
    return html;
}

function getProductoId(){
    let link = window.location.href
    if(link.includes("visualizar.html")){
    const valores = window.location.search;
    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);

    //Accedemos a los valores
    var producto = urlParams.get('id');
    getData('http://127.0.0.1:8000/api/producto/producto/' + producto + '/' ).then(data=>{
        if(data.id){
            console.log(data)
            let producto = data
            getData('http://127.0.0.1:8000/api/usuario/usuario/' + data.usuario + '/').then(data =>{
                let usuario = data
                if(data.id){
                    let data_full = {producto,usuario}
                    console.log(data_full)
                    document.getElementById('container').innerHTML = crearCardView(data_full)
                }
            })
        }
    })
    }else if(link.includes("editar.html")){
        const valores = window.location.search;
    //Creamos la instancia
    const urlParams = new URLSearchParams(valores);

    //Accedemos a los valores
    var producto = urlParams.get('id');
    getData('http://127.0.0.1:8000/api/producto/producto/' + producto + '/' ).then(data=>{
        let nombre = document.getElementById('txtnombreproducto').value = data.nombre
        let descripcion = document.getElementById('txtdescripcion').innerText = data.descripcion
        let hombre = document.getElementById('hombre')
        let mujer = document.getElementById('mujer')
        if(data.genero == "H"){
            hombre.checked = "checked"
        }else if(data.genero == "M"){
            mujer.checked = "checked"
        }
        let btneditar = document.getElementById('btneditar').id = data.id
    })
    }
    
}

function changeEstado(e,estadoActual){
    let split = e.id.split("-")
    estadoActual = !estadoActual
    patchDataUpdate('http://127.0.0.1:8000/api/producto/producto/' + split[1] + '/', {"habilitado":estadoActual}).then(data =>{
        if(data.id){
            window.location.href = "http://127.0.0.1:5500/pages/administracion.html"
        }
    })
}

function eliminar(e){
    let split = e.id.split("-")
    deleteData('http://127.0.0.1:8000/api/producto/producto/' + split[1] + '/').then(data=>{
    }).catch(error=>{
        window.location.href = "http://127.0.0.1:5500/pages/administracion.html"
    })

}

function editar(e){
    let split = e.id.split("-")
    window.location.href = "http://127.0.0.1:5500/pages/editar.html?id=" + split[1]
}

function editarProducto(e){
    document.getElementById('formEditarProducto').addEventListener("submit",()=>{
        window.event.preventDefault();
    })
    let nombre = document.getElementById('txtnombreproducto').value
    let descripcion = document.getElementById('txtdescripcion').value
    let radios_generos = document.getElementsByName('genero');
    let genero = ""
    for (var i = 0, length = radios_generos.length; i < length; i++) {
        if (radios_generos[i].checked) {
          // do whatever you want with the checked radio
          
          genero = radios_generos[i].value
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }
    

    let producto = {"nombre":nombre,"descripcion":descripcion,"genero":genero}
    patchDataUpdate('http://127.0.0.1:8000/api/producto/producto/' + e.id + '/', producto).then(data=>{
        if(data.id){
            window.location.href = "http://127.0.0.1:5500/pages/administracion.html"
        }
    })


}



getProductosHombres()
getProductosMujeres()
validarUsuarioActual()
getProductoId()







