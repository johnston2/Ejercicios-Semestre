var n=20; //número de filas  
 var texto='';  
 //creamos las matrices A(n) y B(n)  
 var A=new Array(n);   //vector antiguo, es el previo  
 var B=new Array(n);   //vector nuevo  
 //convertimos en cero todos los elementos del vector A(n)  
 for(var k=0;k<=n;k++){  
  A[k]=0;  
 }   
 //alimentamos la matriz  
 A[1]=1; //El primer 1 del vértice del triángulo  
 texto=A[1]+'<br>';      //imprimimos el vértice  
 for(var i=2;i<=n;i++){    //i nos da la fila  
  for(var j=1;j<=i;j++){   //j nos da la columna  
   B[j]=A[j-1]+A[j];    //los elementos de B se forman sumando 2 elementos de A  
   texto+=B[j]+" ";     //imprimimos un elemento  
  }   
  for(j=1;j<=i;j++){  
   A[j]=B[j];        //el vector B se convierte en antiguo  
  }  
 texto+= "<br>";      //salto para una nueva fila  
 }
 document.getElementById("triangulo").innerHTML = texto;