const nombre = document.getElementById('nombre')
const edad = document.getElementById('edad') 
const genero = document.getElementById('genero') 
const fecha = document.getElementById('fecha') 
const registrar = document.getElementById('anadir')
const mostrarNombres = document.getElementById('mNombres')
const mostrarEdades = document.getElementById('mEdades')
const personas = [
    {nombre:'Tasha',edad:'21',genero:'f',fecha:{dia:01,mes:09,anio:2002}},
    {nombre:'Tyrone',edad:'19',genero:'m',fecha:{dia:01,mes:07,anio:2009}},
    {nombre:'Uniqua',edad:'60',genero:'f',fecha:{dia:01,mes:07,anio:1963}},
    {nombre:'Austin',edad:'13',genero:'m',fecha:{dia:01,mes:01,anio:2009}},
    {nombre:'Pablo',edad:'9',genero:'m',fecha:{dia:13,mes:09,anio:2014}}]

registrar.addEventListener('click',()=>{
    let name = nombre.value
    let age = edad.value
    let gender = genero.value
    let date = fecha.value
    if(name=='' || age=='' || gender=='' || date==''){
        alert('Error: Hay campos vacios.')
    }else{
        date=date.split('-')
        let dia = Number(date[2])
        let mes = Number(date[1])
        let anio = Number(date[0])
        personas.push({nombre:name,edad:age,genero:gender,fecha:{dia:dia,mes:mes,anio:anio}})
        nombre.value=''
        edad.value=''
        genero.value=''
        fecha.value=''
    }
})

mostrarNombres.addEventListener('click',function(){
    // personas.forEach(persona=>console.log(persona.nombre))
    let contenido = ''
    contenido = `<table><th>Nombre</th>`
    let nombres = personas.map(personas=>personas.nombre)
    /*personas.forEach(persona=>{
        contenido +=``<tr><td>${persona.nombre}</td></tr>`
    })
    */
    nombres.forEach(nombre=>{
        contenido +=`<tr><td>${nombre}</td></tr>`
    })
    contenido += `</table>`
    document.getElementById('pantalla').innerHTML=contenido
})

mostrarEdades.addEventListener('click',calcularEdades)

function calcularEdades(){
    let adultosMayores = personas.filter(persona=>{
        return persona.edad>=50
    }).map(item=>item.nombre)
    let adultos = personas.filter(persona=>{
        return persona.edad>=18 && persona.edad<50
    }).map(item=>item.nombre)
    let ninos = personas.filter(persona=>{
        return persona.edad<18
    }).map(item=>item.nombre)
    let contenido = ''
    contenido = `<strong>Adultos Mayores</strong><br>`
    adultosMayores.forEach(nombre=>{
        contenido += `${nombre}<br>`
    })
    contenido += `<strong>Adultos</strong><br>`
    adultos.forEach(nombre=>{
        contenido += `${nombre}<br>`
    })
    contenido += `<strong>Niños</strong><br>`
    ninos.forEach(nombre=>{
        contenido += `${nombre}<br>`
    })
    document.getElementById('pantalla').innerHTML=contenido

}