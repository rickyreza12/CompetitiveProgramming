function findNb(m) {
    // your code
  let totalSums = 0;
  let n = 0;
  
  while(totalSums < m)
  {
    n += 1
    totalSums += n**3
  }
    return totalSums == m ? n : (-1)
}
