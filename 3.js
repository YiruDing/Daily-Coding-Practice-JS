// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

// For example, given the following Node class

// class Node:
//     def __init__(self, val, left=None, right=None):
//         self.val = val
//         self.left = left
//         self.right = right
// The following test should pass:

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

//Video Solution
var serialize = function(root){
    //pre order
    var recur = function(str,node){
        if(!node){
            return str += 'null,';
        }
        str = str + node.val + ',';
        str = recur(str,node.left);
        str = recur(str,node.right)

        return str
    }
    return recur('',root)
}

var deserialize = funciton(data){
    var list = data.split(',');
    var recur = function(list){
        if(list[0] == 'null'){
            list.shift();
            return null;
        }
        var node = new TreeNode(list[0]);
        list.shift();
        //take out the first element
        node.left = recur(list);
        node.right = recur(list)
        return node;
    }
    return recur(list);
}

// https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/?fbclid=IwAR1EyI6TU_rojybt66_KSjsHA0WRqUnSzjBGQpo8e0us51TTED-Ahmk_MeU
// https://www.cnblogs.com/grandyang/p/4913869.html?fbclid=IwAR0YNdvM5HP_YQsbywsvld1EeSfn75xEHX4F7FPYoRBgo9ZHgWD-Ep55sFo
