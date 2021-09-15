// This problem was asked by Microsoft.

// Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.

// For example, given the following tree:

//     *
//    / \
//   +    +
//  / \  / \
// 3  2  4  5
// You should return 45, as it is (3 + 2) * (4 + 5).

// https://www.geeksforgeeks.org/expression-tree/
class Node{
    constructor(item){
        this.value = item;
        this.left = null;
        this.right = null
    }
}

class ExpresssionTree{
    isOperator(c){
        if(c == "+" || c == "-" || c == "/" || c == "*"){
            return true;
        }return false;
    }

    inorder(t){
        if(t != null){
            this.inorder(t.left);
            document.write(t.value + " ");
            this.inorder(t.right);
        }
    }

    constructorTree(postfix){
        var st = [];
        var t,t1,t2;
        for(var i = 0; i < postfix.length; i++){
            if(!this.isOperator(postfix[i])){
                t = new Node(postfix[i]);
                st.push(t);
            }else{
                t = new Node(postfix[i]);
                t1 = st.pop();
                t2 = st.pop();
                t.right = t1;
                t.left = t2;
                st.push(t);
            }
        }
        t = st[st.length - 1];
        st.pop();

        return t
    }
}

var et = new ExpresssionTree();
var postfix = "ab+ef*g*-";
var charArray = postfix.split("");
var root = et.constructorTree(charArray);
document.write("infix expresstion is <br>");
et.inorder(root)