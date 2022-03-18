function tabuada() {
    var n = document.getElementById('txtn').value;
    var r = document.getElementById('rs');
  

    if (n == 0 ) {
        alert('O campo número deve ser preenchido')
    }else{
        var num = n
        r.innerHTML = ""  // Limpa a caixa do select para os demais calculos

        for(var c = 1; c <=10; c++){
       
           var item = document.createElement('option') // Cria o option do select no lado JS
           item.text = `${num} x ${c} = ${num*c}`
           r.appendChild(item)
    
        }
    }

   

    
    
}