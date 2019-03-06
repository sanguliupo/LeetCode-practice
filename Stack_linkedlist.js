class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if (this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    }else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }


  pop(){
    if (this.length === 0){
      return null;
    }if (this.length === 1){
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
    
  }
  //isEmpty
}

const myStack = new Stack();
myStack.push("google");
myStack.push(2);
myStack.push(3);
myStack.push(4);
// myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();


// console.log(myStack);




//Discord
//Udemy
//google