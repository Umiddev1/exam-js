let login = 'foreverr';
let parol = '12345678';
let reslogin = 0;
let resparol = 0;
let strlog = '';
let strpar = '';
let arrlogin = [...login];
let arrparol = [...parol];

for(let i = 0; i < arrlogin.length;i++) {
  reslogin++;
  strlog += arrlogin[i];
}
for(let j = 0;j < arrparol.length;j++) {
  resparol++;
  strpar += arrparol[j];
}
// console.log(resparol);
if(resparol < 8 ) {
  console.log("Parol kamida 8ta belgidan iborat bolishi kerak");
}
else if(reslogin < 3) {
  console.log("Login kamida 3ta belgidan koproq bolishi kerak...");
}
else  {
  console.log(`Siz muvafaqqiyatli ro'yhatdan o'tdingiz \n {
    Login: ${strlog} 
    Parol:  ${strpar}
  }`);
  }






