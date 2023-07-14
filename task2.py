def calculate_sum_of_bonus(data):
  print("""獎金說明：
表現為平均者獎金為薪水的1成，表現高過平均者獎金為薪水的2成，表現低於平均者獎金為0。
所有獎金按照職等加成：CEO為1.5倍，Sales為1.4倍，Engineer為2倍。
公司獎金總預算為一萬元，若所有人加總超過一萬元，按等比例分配這一萬元
""")
  allBonus = 0
  exchange_rate = 30  
  ceo_bonus_rate = 1.5 
  sales_bonus_rate =  1.4
  engineer_bonus_rate =  2
  everyBonus =[]

  for item in data["employees"]:
    name = item["name"]
    salary = item["salary"]
    performance = item["performance"]
    role = item["role"]

    if isinstance(salary,str):
      salary = salary.replace("," , "")
      if "USD" in salary:
        salary=int(float(salary.replace("USD","")) * exchange_rate)
      else:
        salary=int(float(salary))
    salary=int(float(salary))
    
    
    bonus = 0
    if "average" in performance and "below" not in performance:
      bonus = int(salary*0.1)
      if "above average" in performance:
        bonus =int(salary*0.2)
      if "CEO" in role:
        bonus = int(bonus*ceo_bonus_rate)
      elif "Sales" in role:
        bonus = int(bonus*sales_bonus_rate)
      elif "Engineer" in role:
        bonus = int(bonus*engineer_bonus_rate)

    print(f"{name}是位{role}，薪水是{salary}NTD，他的表現{performance}。")
    print(f'他的獎金為：{bonus}NTD')
    everyBonus.append(bonus)

    print("")
    allBonus=allBonus+bonus  
  print(f"所有人獎金總和為{allBonus}NTD")
  newBonus =[]
  allNewBonus=0
  if allBonus>10000:
    for n in everyBonus:
      newBonus.append(str(int(n/allBonus*10000))+'元')
      allNewBonus+=int(n/allBonus*10000)
  for i,employee in enumerate(data["employees"]):
    name = employee["name"]
    newBonus.insert(i*2, name)
  print(f'因總獎金上限為10000元，按每人在總獎金中佔比調整為新獎金：{newBonus}')
  print(f'調整後所有人的獎金總額為：{allNewBonus}元')

calculate_sum_of_bonus({ "employees":[
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
]}) # call calculate_sum_of_bonus function
