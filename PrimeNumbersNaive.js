//Check if number is prime
function isPrime(x){
  if(x<=1)
    return false;

  //Check from 2 to n-1
  for(let i = 2; i < x; i++){
    if(x%i==0)
      return false;
  }
  return true;
}

//First 100 prime numbers
let primeCounter = 0;
let number = 0;

while(primeCounter < 100){
  number++;
  if(isPrime(number) === true){
    console.log(number);
    primeCounter++;
  }
}