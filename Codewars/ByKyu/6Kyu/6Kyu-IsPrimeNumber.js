function isPrime(num) {
    //TODO
    if(num === 2)
    {
      return true;
    }
    
    const maxDiv = Math.sqrt(num) + 1;
  
    for (let i = 2; i  < maxDiv; i++) {
      if(num % i === 0)
      {
        return false;
      }
    }  
    
      return num > 1;
  }