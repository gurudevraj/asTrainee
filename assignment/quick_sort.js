var input = prompt("Enter your numbers").split(",");

function quickSort(input, left, right){
   var len = input.length, 
   left=0, right=input.length,
   pivot,
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(input, pivot, left, right);
    
   //sort left and right
   quickSort(input, left, partitionIndex - 1);
   quickSort(input, partitionIndex + 1, right);
  }
  return input;
}
        
function partition(input, pivot, left, right){
   var pivotValue = input[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(input[i] < pivotValue){
      swap(input, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(input, right, partitionIndex);
  return partitionIndex;
}
      
function swap(input, i, j){
   var temp = input[i];
   input[i] = input[j];
   input[j] = temp;
}
        
alert(input);