// creamos una funcion para jugar cn lod elemntos del form

function ValidarForm(){
    const combo = document.getElementById('inputcombo').value;
    const cantidad = document.getElementById('inputnumber').value;
    const nombre = document.getElementById('inputname').value;

    if (combo === '' || cantidad === '' || nombre === ''){
        alert ('Debes completar todos los campos');
        return false;
    }

    return true;

}

//lectura de datos

function leerData(){
    let listPedido;
    if (localStorage.getItem('listPedido')== null){
        listPedido = [];
    }else{
        listPedido = JSON.parse(localStorage.getItem('listPedido'));
    
    }

    // creo la tabla y utilozo un forEach para alistar los pedidos

    var html= '';
    listPedido.forEach(function(element, index){
          
          html += "<td>"+ element.combo + "</td>";
          html += "<td>"+ element.cantidad + "</td>";
          html += "<td>"+ element.nombre + "</td>";
          html += '<td> <button onclick="deleteData(' + index + ')" class ="btn btn-danger" >Eliminar Dato</button>  <button onclick="editData(' + index + ')" class ="btn btn-warning" >Editar Dato</button>';
          html += "</tr>";

    });

    document.querySelector('#datatable').innerHTML = html;

}

//para que nos cargue todos lod datos en la tabla
document.onload = leerData();
function AddData(){
 if (ValidarForm()== true){

    const combo = document.getElementById('inputcombo').value;
    const cantidad = document.getElementById('inputnumber').value;
    const nombre = document.getElementById('inputname').value;

    var listPedido;
      
      if(localStorage.getItem('listPedido')== null){
        listPedido = [];

      }else{
        listPedido = JSON.parse(localStorage.getItem('listPedido'));   
          
      }

      //subimos los datos con el push
      listPedido.push({
          combo: combo,
          cantidad: cantidad,
          nombre: nombre

      });

      localStorage.setItem('listPedido', JSON.stringify(listPedido));
      leerData();

      document.getElementById('inputcombo').value = "";
      document.getElementById('inputnumber').value = "";
      document.getElementById ('inputname').value = "";
 }


}

//funcion para el boton eliminar 

function deleteData(index){
    let listPedido;
    if (localStorage.getItem('listPedido')== null){
        listPedido = [];
    }else{
        listPedido = JSON.parse(localStorage.getItem('listPedido'));
    
    }

    listPedido.splice(index, 1);
    localStorage.setItem('listPedido', JSON.stringify(listPedido));
     
    leerData();
}

// funcion para editar la info de los pedidos

function editData(index){

    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById ('btnUpdate').style.display = 'block';

    let listPedido;
    if (localStorage.getItem('listPedido')== null){
        listPedido = [];
    }else{
        listPedido = JSON.parse(localStorage.getItem('listPedido'));
    
    }

    document.getElementById('inputcombo').value = listPedido[index].combo;
    document.getElementById('inputnumber').value = listPedido[index].cantidad;
    document.getElementById('inputname').value = listPedido[index].nombre;

    document.querySelector('#btnUpdate').onclick = function (){

       if (ValidarForm() == true) {
              
        listPedido[index].combo = document.getElementById('inputcombo').value;
        listPedido[index].cantidad = document.getElementById('inputnumber').value;
        listPedido[index].nombre = document.getElementById('inputname').value;

        localStorage.setItem('listPedido', JSON.stringify(listPedido));
        leerData();
        
        document.getElementById('inputcombo').value = "";
        document.getElementById('inputnumber').value = "";
        document.getElementById('inputname').value = "";

        document.getElementById('btnAdd').style.display = 'block';
        document.getElementById('btnUpdate').style.display = 'none';

       }
    }

}
