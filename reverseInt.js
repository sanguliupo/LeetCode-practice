var reverse = function(x) {
    let positiveX;
    if (x<0){
         positiveX = -x;
    }else{
        positiveX = x;
    }
     console.log(positiveX);
     
    let temp = positiveX.toString().split('').reverse().join('');
    let num = parseInt(temp);
   

    
    if (num > 2147483647 || -num <-2147483648 ){
        return 0;
    }else if ( x > 0){
        return num;
    }else{
        return -num;
    }
};


console.log(reverse(-901000))