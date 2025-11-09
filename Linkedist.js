// Node structure
function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  // Creating nodes manually
  const node1 = new Node(10);
  const node2 = new Node(20);
  const node3 = new Node(30);
  
  // Linking nodes
  node1.next = node2;
  node2.next = node3;
  
  console.log(node1.value)
  console.log(node1.next.next.value)
  console.log(node2.value)
  // Traversing the list
  let current = node1;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
  