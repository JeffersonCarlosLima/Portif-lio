let text = document.getElementById("letreiro").innerHTML;
let textArr = text.split("");
let newText = textArr[0];

for (let i = 0; i < textArr.length; i++) {
    (function(i) {
        setTimeout(function() { console.log(i); 
        document.getElementById("letreiro").innerHTML = newText;
                               newText = newText + textArr[i+1];

                              
                              
                              
                              }, 300 * i);
    })(i);
}