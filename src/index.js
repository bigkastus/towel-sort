
// You should implement your task here.

module.exports = function towelSort (matrix = []) {           
        let myMatrix = [];
      
        if(matrix.length !== 0) {
          for (let i = 0; i < matrix.length; i++) {
            if(i === 0 || i%2===0) {
              myMatrix.push(matrix[i])
            } else if(i%2!==0) {
              myMatrix.push(matrix[i].reverse())
            }
          } myMatrix = myMatrix.flat();
        }return myMatrix; 
}       
