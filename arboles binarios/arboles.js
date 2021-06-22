const chalk = require("chalk");

class Node {
    constructor(data,nombre,cantidad,costo)
    {
        this.data = data;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.left = null;
        this.right = null;
        this.counter = 0;
    }
}

class BinarySearchTree{
    constructor(data){
        this.root = null;
    }

    insert(data,nombre,cantidad,costo)
    {
        let newNode = new Node(data,nombre,cantidad,costo);

        if(this.root === null)
        {
            this.root = newNode;
        }else
        {
             this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode)
    {
        if(newNode.data < node.data)
        {
            if(node.left === null)
            {
                node.left = newNode;
            }
            else 
            {
                this.insertNode(node.left, newNode);
            }
        }
        else 
        
        {
            if(node.right === null)
            {
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }
    }


    inorder(node)
    {
        if(node !== null)
        {
            this.inorder(node.left);
            console.log(chalk.bold.blue(node.data));
            this.inorder(node.right);
        }
    }

    preorder(node)
    {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node)
    {
        if(node !== null)
        {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    searchNode(node, datatobefound)
    {
        if(node === null)
        {
            return null;
        }
        else if (datatobefound < node.data){
          return  this.searchNode(node.left, datatobefound);
        }
        else if(datatobefound > node.data){
          return  this.searchNode(node.right, datatobefound);
        }
        else
        {
            return node;
            
        }

    }

    getrootnode()
    {
        return this.root;
    }

}



const BST = new BinarySearchTree();


BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

const root = BST.getrootnode();
BST.inorder(root);
