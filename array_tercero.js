x = prompt("De que dimension es x?:  "); //3
y = prompt("De que dimension es y?:  "); //4

let completo = new Array(y);

t=1;
num=0;

for (let i=0  ; i < y; i++){

let base = new Array(x);
  for (let j=0 ; j < x; j++){
    base[j] = num;
    num=num+4;
}

num=num-11;
      completo[i]=base;
      t++;
}
 for (let l=0 ; l < y; l++){
    console.log(completo[l]);
}
