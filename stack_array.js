
let stack = [];


  peek() {
    return stack[stack.length-1];
  }


  push(value){
    stack[stack.length]=value;
    return stack;
  }


  pop(){
    delete stack[stack.length-1];
    return stack;
    
  }

}


stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.peek();
