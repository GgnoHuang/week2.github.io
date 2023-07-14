function findAndPrint(messages){
  let arr =[];
  let keywords = [
    "I'm 18 years old",
    "I am of legal age",
    "I will vote",
    "I'm a college student"
  ]
  for (let person in messages) {//for in loop遍歷物件，person代表key，messages[person]代表value
    let message = messages[person];
    for (let i in keywords){//for in loop遍歷array，i代表index，keywords[i]代表資料
      let keyword = keywords[i]
      if (message.includes(keyword)){
        arr.push(person)
        break;
      }
    }
  }
  console.log(`這些人可能超過17歲： ${arr}`);
} 

findAndPrint({
"Bob":"My name is Bob. I'm 18 years old.", 
"Mary":"Hello, glad to meet you.",
"Copper":"I'm a college student. Nice to meet you.", 
"Leslie":"I am of legal age in Taiwan.",
"Vivian":"I will vote for Donald Trump next week",
"Jenny":"Good morning." });