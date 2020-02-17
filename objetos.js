//Ejercicio: mi primer objeto
/*Abrí la consola del chrome y crea un objeto que se llame nave.
Tal vez te resulte más fácil escribirlo en tu editor de texto (Visual Studio/Sublime/Atom/etc) y pegarlo en la consola.
El objeto nave debería tener las siguentes propiedades y valores:

tipo de nave: un string que diga "espacial" (ojo con los espacios en el nombre de la propiedad,
tenés que ponerlo entre comillas si tiene espacios)
país: un string que indique de qué país es la nave
cantidad de tripulantes: un número que indica la cantidad de tripulantes de la nave
(ojo con los espacios en el nombre de la propiedad)
tripulantes: un arreglo con los nombres de los tripulantes
estado: "usada"
despegar: un método (una función) que loguee en la consola "Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!"
y después tire un alert que diga "BOOOOM!!"

Ahora desde la consola extrae estos valores de las siguientes formas:
El país de la nave usando dot notation.
El tipo de nave usando bracket notation.
Extrae la cantidad de tripulantes usando dot notation… ¿se puede?
Extrae la cantidad de tripulantes usando bracket notation y guarda ese valor en una variable que se llame cantTrip.
Crea una variable que se llame test y guarda adentro un string que diga "estado".
Usa la variable test para extraer el valor dentro de la propiedad estado. Probá usando dot notation y bracket notation. ¿Cuál funciona?
Ejecutá el método (función) dentro de la propiedad despegar (tenés que extraerlo del objeto y agregar un () al final).*/

var nave = {
  tipo_nave:"espacial",
  país:"argentina",
  cantidad_tripulantes:5,
  tripulantes:["Juan","Lucas","Toni","Pancho","Ruso"],
  estado:"usada",
  despegar: function(){
    console.log("Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!")
    alert ("BOOOOM!!")
  }
}

var posts =[
  {
    usuario: "guilleasz",
    postContent: "Cada objeto es un post distinto",
    comments: [{
      username: "santiscanlan",
      commentContent: "Gran post!"
      }, {
        username: "toniTralice",
        commentContent:"Malisimo post!"
      }
    ]
  },
  {
    usuario: "tonitralice",
    postContent: "y estan todos ordenados dentro del arreglo",
    comments: [{
      username: "guilleasz",
      commentContent: "ya me quede sin ideas de comentarios"
      }, {
        username: "toniTralice",
        commentContent:"Si yo también"
      }
    ]
  }
]


//Ejercicio: extrayendo valores.

/*Copia el arreglo del ejemplo de arriba y pegalo en la consola. Ahora extraé los siguientes valores:

El valor de la propiedad usuario dentro del primer objeto. (es "guilleasz").
Extraé el valor que dice "Gran post!" (ayuda: 3. arreglo-objeto-arreglo-propiedad).
Extraé el valor que dice "santiscanlan".
Extraé el valor "Malísimo post!".
Extraé el valor "y están todos ordenados dentro del arreglo".
Extraé el valor de la última propiedad username.*/

var posts =[
  {
    usuario: "guilleasz",
    postContent: "Cada objeto es un post distinto",
    comments: [{
      username: "santiscanlan",
      commentContent: "Gran post!"
      }, {
        username: "toniTralice",
        commentContent:"Malisimo post!"
      }
    ]
  },
  {
    usuario: "tonitralice",
    postContent: "y estan todos ordenados dentro del arreglo",
    comments: [{
      username: "guilleasz",
      commentContent: "ya me quede sin ideas de comentarios"
      }, {
        username: "toniTralice",
        commentContent:"Si yo también"
      }
    ]
  }
]

posts[0].usuario
posts[0].comments[0].commentContent
posts[0].comments[0].username
posts[0].comments[1].commentContent
posts[1].postContent
posts[1].comments[1].username

//Ejercicio mi_auto

/*Crea una variable llamada mi_auto y asignale un objeto vació.
Asignale a mi_auto una propiedad marca, que debería contener un string
Agrega una propiedad año que tenga un entero
Agrega una propiedad nuevo que contenga un booleano
Crea una variable llamada property_key y asígnale el string "modelo"
Usa la variable property_key , no el string "modelo", para agregar la propiedad modelo al objeto mi_auto.
Crea una variable llamada anotherpropertykey y dale el valor "precio".
Usa la variable another_property_key, no la string "precio", para cuantificar el valor de tu auto.
Qué devuelve mi_auto[property_key] ?
Qué devuelve mi_auto["modelo"] ?
Asigna la string "color"a la variable next_property
Usa la variable next_property para añadir el color a tu auto
Qué devuelve mi_auto[next_property]?
Qué devuelve mi_auto["color"]?
Usa for in para iterar sobre el objeto mi_auto y muestra en la consola el key y el value de cada propiedad.*/

var mi_auto={}

mi_auto.marca="Fiat"
mi_auto.año=2015
mi_auto.nuevo=false

var property_key = "modelo"
mi_auto[property_key]="Fiat UNO"

var anotherpropertykey="precio"
mi_auto[anotherpropertykey]="$200.000"

//Qué devuelve mi_auto[property_key] ? Fiat UNO
//Qué devuelve mi_auto["modelo"] ? Fiat UNO

var next_property = "color"
mi_auto[next_property]="azul"

//Qué devuelve mi_auto[next_property]? azul
//Qué devuelve mi_auto["color"]? azul

for (var key in mi_auto){
  console.log(key)
}

//Ejerciicio Números Duplicados
//var numeros = [2, 4, 5, 37, 0]
//var numeros_duplicados = {}
// despues deberia quedar así { 0: 0, 2: 4, 4: 8, 5: 10, 37: 74}
/*Recorre el arreglo numeros y pone cada número (2, 4, 5, 37, 0) como una propiedad del objeto numeros_duplicados.
El valor de cada propiedad debería ser ese número multiplicado por dos.
(primero crea el objeto vacío antes de empezar a agregarle las propiedades y valores).

TIP: es fundamental dividir el problema en partes y avanzar paso a paso.
Podes empezar haciendo un for clásico para recorrer el arreglo números (no deberías usar "for in" para
recorrer arreglos). El console log está puesto sólo para mostrarte en la consola en qué se transforma i
en cada vuelta, pero no deberías usarlo para resolver el ejercicio. Sólo te ayuda a entender qué está pasando.

var numeros = [2, 4, 5, 37, 0]
for( var i = 0; i < numeros.length; i++) {
  console.log("valor del indice i es: " + i)
  console.log("valor dentro del indice " + i + " es: " + numeros[i])
}*/

var numeros_duplicados = {}
var numeros = [2, 4, 5, 37, 0]
for( var i = 0; i < numeros.length; i++) {
  numeros_duplicados[numeros[i]]=numeros[i]*2
}
numeros_duplicados

//Ejercicio Politicos
//Para resolver estos ejercicios repasemos conceptos que nos van a ayudar a resolverlo:

var greeting = "Hello and welcome!"
greeting[0] // "H"
var words = greeting.split(' ')
var favorites = []
var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt', 'ashton kutcher', 'mark whalberg',
'morgan freeman', 'mila kunis']
var obama_jobs = []
var politicos = {
  secretary_of_state: 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vice_prez: 'joe biden',
  gov_of_california: 'jerry brown'
}

/* Ahora itera sobre el arreglo famous y agrega a tu favoritos personas cuyos nombres empiecen con 'a'.
Itera sobre el objeto politicos y agregá sus nombres al arreglo famous .
Itera sobre el objeto politicos y agregá los nombres de los trabajos en el arreglo obama_jobs.*/

i=0
while (famous[i][0]=="a"){
  favorites.push(famous[i])
  i++
}

for (var key in politicos){
  famous.push(politicos[key])
}

for (var key in politicos){
  obama_jobs.push(key)
}

/*Crea un objeto vació llamado b_named_politicos.
Agrega como una propiedad del objeto b_named_politicos a cualquier politico cuyo nombre O apellido empiece con 'b'.
Usá su job title como key y su nombre como valor.*/

var b_named_politicos = {}
var nombreApellido
var nombreApellidoSplit = []
for (var key in politicos) {
    var nombreApellido = politicos[key]
    var nombreApellidoSplit = nombreApellido.split(" ")
    if (nombreApellidoSplit[0][0] === "b" || nombreApellidoSplit[1][0] === "b") {
        b_named_politicos[key] = politicos[key]
    } else console.log("Nada")
}
console.log (b_named_politicos)

//Crea un objeto vació llamado reverse_politico_lookup.
//Agrega políticos a este objeto usando su nombre como key y su job_title como valor.*/


var reverse_politico_lookup={}
for (i=0; i<politicos.length;i++){
  reverse_politico_lookup = [obama_jobs,politicos[key]]

}


// Ejercicio Base de datos de peliculas
/*Vamos a crear un arreglo de películas, cada película tiene que ser un objeto con las propiedades:
titulo, un rating, y loHasVisto. Usa un for loop para iterar sobre el arreglo e imprimir un resultado
en la consola que se vea como esto:
Has visto "Busqueda implacable" - 5 estrellas
No has visto "Norbit" - 3 estrellas
Has visto "Mini espías" - 2 estrellas
No has visto "La vida es bella" - 5 estrellas*/
//PUEDES USAR TUS PROPIAS PELICULAS

var pelis=[{
  titulo:"El padrino",
  rating:"5 estrellas",
  loHasVisto:true,
},
{
  titulo:"El irlandes",
  rating:"5 estrellas",
  loHasVisto:true,
},
{
  titulo:"El guason",
  rating:"4 estrellas",
  loHasVisto:false,
},
{
  titulo:"En la cocina del infierno",
  rating:"5 estrellas",
  loHasVisto:true,
},
{
  titulo:"La venganza de los giles",
  rating:"4 estrellas",
  loHasVisto:true,
}
]

/*for (var key in pelis){
  if (loHasVisto==true){
    console.log("Has visto "+titulo+"- "+pelis[rating])
  } else {
    console.log("No has visto "+titulo+"- "+pelis[rating])
  }

}*/

for (var key in pelis){
  if (pelis[key].loHasVisto==true){
    console.log("Has visto "+pelis[key].titulo+"- "+pelis[key].rating)
  } else {
    console.log("No has visto "+pelis[key].titulo+"- "+pelis[key].rating)
  }
}
