function calculateSumOfBonus(data){
  console.log(`獎金說明：表現為平均獎金為薪水的1成，表現高過平均獎金為薪水的2成，表現低於平均獎金為0。
所有獎金按照職等加成：CEO為1.5倍，Sales為1.4倍，Engineer為2倍\n`);
  const exchangeRate = 30  
  const ceoBonusrate = 1.5 
  const salesBonusrate =  1.4
  const engineerBonusrate =  2
  let allBounus = 0

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

    let exceedBonus = bonus;
    if(bonus>10000){
      bonus = 10000;
      console.log(`${name}是一位${role}，薪水為${salary}NTD，他的表現${performance}，獎金為${exceedBonus}NTD。
${name}的獎金因為超出上限10000NTD，獎金調整為10000NTD`)
    }else{
      console.log(`${name}是一位${role}，薪水為${salary}NTD，他的表現${performance}，獎金為${bonus}NTD。`)
    }
    allBounus+=bonus;
    console.log('');
  }
  console.log(`所有人獎金總和為${allBounus}NTD`)
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



