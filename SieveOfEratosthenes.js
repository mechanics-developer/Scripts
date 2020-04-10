// What is Sieve of Eratosthenes algorithm?
// In order to analyze it, let’s take a number n and the task is to print the prime numbers less than n. Therefore, by definition of Sieve of Eratosthenes, for every prime number, it has to check the multiples of the prime and mark it as composite. This process continues until a value p which is the highest prime number less than n

let n = 2000000;
let prime = [];

for(let i = 0; i<n; i++){
  prime.push(true);
}

for(let p = 2; p*p <= n; p++){
  if(prime[p]===true){
    for(let i = p*p; i<n;i+=p){
      prime[i] = false;
    }
  }
}

for(let i = 2; i < n; i++){
  if(prime[i]===true){
    console.log(i);
  }
}


//TODO: First, generate a list of integers from 2 to 30
//TODO: The first number in the list is 2; cross out every 2nd number in the list after 2 by counting up from 2 in increments of 2 (these will be all the multiples of 2 in the list)
//TODO: The next number in the list after 2 is 3; cross out every 3rd number in the list after 3 by counting up from 3 in increments of 3 (these will be all the multiples of 3 in the list)
//TODO: The next number not yet crossed out in the list after 3 is 5; cross out every 5th number in the list after 5 by counting up from 5 in increments of 5 (i.e. all the multiples of 5)
//TODO:The next number not yet crossed out in the list after 5 is 7; the next step would be to cross out every 7th number in the list after 7, but they are all already crossed out at this point, as these numbers (14, 21, 28) are also multiples of smaller primes because 7 × 7 is greater than 30. The numbers not crossed out at this point in the list are all the prime numbers below 30

//and so on and so forth if we have larger set of primes...
//Time Complexity: n*log(log(n))