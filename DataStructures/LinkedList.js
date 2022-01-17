// -A linked list is a linear data structure
// -Ordered Collection of data, not sequential
// -Each node has data and a pointer to the next node
// -The first node is the head and the last is the tail
// -The tail points to null

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0;
    }


//insert first node
insertFirst(data){
    this.head = new Node(data, this.head);

}
//inser last node

//insert at index

//get index

//remove at index

//clear list

//print list data

}


const ll = new LinkedList();
ll.insertFirst(100)

console.log(ll)