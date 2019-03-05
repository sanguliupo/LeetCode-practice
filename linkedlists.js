// 1->10->99->5->16
class Node{
  constructor(value){
    this.value=value;
    this.next=null;
    this.previous=null;
  }
}

class LinkedList{
  constructor(value){
    this.head={
      value: value,
      next:null,
      previous:null
    }
  
  this.tail=this.head;
  this.length=1;
  }
  
  append(value){
    const newNode= new Node(value);
    // newNode.previous=this.tail;
    this.tail.next=newNode;
    this.tail=newNode;
    this.length++;
  }


  prepend(value){
    const newNode= new Node(value);
    newNode.next=this.head;
    this.head.previous=newNode;
    this.head=newNode;
    this.length++;
  }
  printList(){
    const array=[];
    let currentNode=this.head;
    while (currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value){
    //check params
    if (index>this.length){
      this.append(value);
    }
    const newNode= new Node(value);
    if (index<1){
      const second=this.head;
      this.head=newNode;
      newNode.next= second;
    }else{
      const leader=this.traverseToIndex(index-1);
      const holdingPointer=leader.next;
      leader.next=newNode;
      newNode.next=holdingPointer;
    }
    this.length++;
  }

  remove(index){
    if (index>this.length){
      return LinkedList;
    }
    if (index<1){
      this.head=this.head.next;
    }else{
      const leader=this.traverseToIndex(index-1);
      leader.next=leader.next.next;
    }
    this.length--;
  }
  

  traverseToIndex(index){
    let counter=0;
    let currentNode=this.head;
    while(counter !==index){
      currentNode=currentNode.next;
      counter++;
    } 
    return currentNode;
  }
}

const myLinkedList= new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

// myLinkedList.prepend(1);
// myLinkedList.insert(0,77);
// myLinkedList.printList();
console.log(myLinkedList);