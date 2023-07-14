function getNumber(index){
  if(index%2==0){
    console.log(Math.floor(index / 2)*3)
  }else if(!index%2==0){
    console.log(4+Math.floor(index / 2)*3)
  }
}

getNumber(1); // print 4 
getNumber(5); // print 10 
getNumber(10); // print 15
