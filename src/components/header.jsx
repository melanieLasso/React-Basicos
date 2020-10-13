import React from 'react'; //Siempre hay que importa react ya que es una libreria

//Se declara el componente como una funcion
function Header({titulo}) {

    //Aqui se pueden declarar variables otras funciones etc
    //console.log(props); lo props se pueden definir asi y acceder a su valor asi {props.titulo}

    return ( //En el return va lo que se presenta en la pagina
        <h1 className="encabezado">{titulo}</h1>
    );
}

export default Header; //Exportas el componente Header