function calculateSumOfBonus(data){
  console.log(`獎金說明：
表現為平均者獎金為薪水的1成，表現高過平均者獎金為薪水的2成，表現低於平均者獎金為0。
所有獎金按照職等加成：CEO為1.5倍，Sales為1.4倍，Engineer為2倍。
公司獎金總預算為一萬元，若所有人加總超過一萬元，按等比例分配這一萬元\n`);
  const exchangeRate = 30  
  const ceoBonusrate = 1.5 
  const salesBonusrate =  1.4
  const engineerBonusrate =  2
  let allBonus = 0
  let everyBonus =[]

  for (i = 0; i < data.employees.length; i++) {
    let employee = data.employees[i];
    let name = employee.name;
    let salary = employee.salary; 
    let performance =employee.performance;
    let role = employee.role;

    if(typeof salary === "string"){
      salary = salary.replace(',', '');
      salary = salary.includes("USD")
      ? Math.floor(parseFloat(salary,10) * exchangeRate)
      : parseInt(salary,10)
    }else{
      salary = Math.floor(salary)

    } // 全部薪水轉換為數字，並且移除掉USD和逗號，且薪水單位轉為台幣
    
    let bonus = 0;
    bonus = performance.includes("above")? Math.floor(salary*0.2)
    : !performance.includes("below")? Math.floor(salary*0.1)
    : 0

    bonus = role.includes("CEO")? Math.floor(bonus*ceoBonusrate)
    : role.includes("Sales")? Math.floor(bonus*salesBonusrate)
    : role.includes("Engineer")?Math.floor(bonus*engineerBonusrate)
    : bonus

    console.log(`${name}是一位${role}，薪水為${salary}NTD，他的表現${performance}。`)
    console.log(`他的獎金為：${bonus}NTD。`)
    everyBonus.push(bonus);
    allBonus+=bonus;
    console.log('');
  }
  console.log(`所有人獎金總和為${allBonus}NTD`)
  console.log(`所有人獎金分別為：${everyBonus}`)
  let newBonus =[];
  let allNewBonus=0;
  if(allBonus>10000){
    everyBonus.forEach(n=>{
      newBonus.push(Math.floor(n/allBonus*10000)+"元")
      allNewBonus+=Math.floor(n/allBonus*10000);
    })
  }
  for(i=0;i<data.employees.length;i++){
    let employee = data.employees[i];
    let name = employee.name;
    newBonus.splice(i*2, 0,name);
  }
  console.log("");
  console.log(`因總獎金上限為10000元，按每人在總獎金中佔比調整為新獎金：
『${newBonus}』`)
  console.log(`所有人的新獎金總額為：『${allNewBonus}元』`)
} 




calculateSumOfBonus({
  "employees":[ 
    {
      "name":"小白", 
      "salary":"999.99USD", 
      "performance":"average", 
      "role":"Engineer"
    }, 
    { 
      "name":"小李", 
      "salary":'1,234.5678USD', 
      "performance":"above average", 
      "role":"CEO"
    },
    {
      "name":"John",
      "salary":"1000USD",
      "performance":"above average",
      "role":"Engineer"
    },
    {
      "name":"Bob",
      "salary":60000,
      "performance":"average",
      "role":"CEO"
    },
    {
      "name":"Jenny",
      "salary":"50,000",
      "performance":"below average",
      "role":"Sales"
    } 
  ]
});



