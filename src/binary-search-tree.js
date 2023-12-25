const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  node = null;
  root() {
    return this.node;  
  }

  add(data) {
    const newsNode = new Node(data); 

    if(!this.node) {           
      this.node = newsNode;      
      return;
    }
    
     let currentNode = this.node; 
     while (currentNode) { 
      if (newsNode.data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = newsNode;
            return; 
          }
          currentNode = currentNode.left;
        }
        else {               
          if(!currentNode.right) { 
            currentNode.right = newsNode;
            return;
          }
          currentNode = currentNode.right;
        }   
      }
  }

  has(data) {
    return searchWithIn(this.node, data);
    function searchWithIn (current, data) {
   
    if (!current) {
      return false;
    }

    if (current.data === data) {
      return true;
    }
    return data < current.data ?
    searchWithIn(current.left, data) :
    searchWithIn(current.right, data);

  }
  }

  find(data) {
    return findWithIn(this.node, data); 
		function findWithIn (current, data) { 
	   
		if (!current) {
		  return null;
		}
	
		if (current.data === data) {
		  return current;
		}
		return data < current.data ?
		findWithIn(current.left, data) :
		findWithIn(current.right, data);
	
	  }
  }

  remove(data) {
    this.node = removeNode(this.node, data); 
		function removeNode(current, data) {
		if (!current) { 
				return null;
			}

		if(data < current.data) {
			current.left = removeNode(current.left, data ); 
			return current;
		}

		if (data > current.data) {
			current.right = removeNode(current.right, data );
			return current;
			}


		else {
			if(!current.left && !current.right) {   
				return null;

			}  
			if (!current.left) {      
				current = current.right; 
				return current;       
			}              
			if (!current.right) {     
				current = current.left;  
				return current;   
			}              

			let minFromRight = current.right;
			while(minFromRight.left) { 
				minFromRight = minFromRight.left;
			
			}
			current.data= minFromRight.data;
			current.right = removeNode(current.right, minFromRight.data);
			return current;


		}
	}
  }

  min() {
    if (!this.node){
      return;
    }
  
    let current = this.node;
    while(current.left) { 
      current = current.left;
  
    }
    return current.data;
  }

  max() {
    if (!this.node){
      return;
    }
    let current = this.node; 
    while(current.right) { 
      current = current.right;
  
    }
    return current.data;
  
   
  }
}

module.exports = {
  BinarySearchTree
};