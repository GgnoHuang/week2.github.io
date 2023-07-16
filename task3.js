function func(...persons){
  middles=persons.map(person=>person[1])
  console.log(`所有的middle name:${middles}`)
  let uniqueMiddles = [];//用來存放沒有重複的字
  middles.forEach(n =>{
    let cnt = 0;
    middles.forEach(m =>{
      if(n==m){
        cnt+=1
      }
    })
    if(cnt == 1){ //如果只有加一次代表只有加到他自己，所以他就是不重複的
      uniqueMiddles.push(n)
    }
  })// console.log(`沒重複的middle name：${uniqueMiddles}`)
  let isDuplicate = true;
  persons.forEach(person=>{
    for(let i = 0 ; i < uniqueMiddles.length; i++){
      if(person.includes(uniqueMiddles[i])){
        console.log(person);
        isDuplicate=false;
        break;
      }
    }
  })
  if(isDuplicate){
    console.log("沒有")
  }
  console.log('-------------------')
}

func("隋煬帝","宋明帝","宋文帝","梁武帝","漢武帝",'漢獻帝',"魏文帝",'汗腺帝'); 
func("彭大牆", "王明雅", "吳明"); 
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花"); 
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花");