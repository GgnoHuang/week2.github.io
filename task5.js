function findIndexOfCar(seats, status, number){
  let ans = -1;
  let ok=[];
  for(let i =0;i<seats.length;i++){
    if(status[i]==1 && seats[i]>=number){
      ok.push(i)
    }
  }
  let shortList = ok.map(i => seats[i]);
  let min= Math.min(...shortList);
  for(let i=0;i<seats.length;i++){
    if(seats[i]==min){
      ans=i;
      break;
    }
  }
  console.log(ans)
}


findIndexOfCar([3, 1, 5, 4, 2], [0, 1, 0, 1, 1], 2); // print 4 
findIndexOfCar([1, 0, 5, 1, 3], [0, 1, 0, 1, 1], 4); // print -1 
findIndexOfCar([4, 6, 5, 8], [0, 1, 1, 1], 4); // print 2

findIndexOfCar([5, 8, 15, 7, 12], [0, 1, 0, 1, 0], 5); // print 3
findIndexOfCar([5, 8, 15, 7, 12], [1, 1, 1, 0, 1], 12); // print 4
findIndexOfCar([5, 8, 15, 7, 12], [1, 1, 1, 0, 0], 12); // print 2
findIndexOfCar([5, 8, 15, 7, 12], [1, 1, 1, 0, 0], 16); // print -1