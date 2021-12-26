let sum = 0;
let num = 2;
let num1 = 32;
for(let i = num; i <= num1;i++){
  let bool = false
  for(let j = 2; j <= i;j++) {
    if(i%j === 0 && j != i) {
      bool = true;
      console.log(i,j);
    }
  }
  if(bool === false) {
    sum ++;
  }
}
console.log(sum);