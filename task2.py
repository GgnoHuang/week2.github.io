def calculate_sum_of_bonus(data):
  print("""獎金說明：表現為平均獎金為薪水的1成，表現高過平均獎金為薪水的2成，表現低於平均獎金為0。
所有獎金按照職等加成：CEO為1.5倍，Sales為1.4倍，Engineer為2倍
  """)
  allBonus = 0
  exchange_rate = 30  
  ceo_bonus_rate = 1.5 
  sales_bonus_rate =  1.4
  engineer_bonus_rate =  2

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

    if bonus>10000:
      bonustop = bonus
      bonus=10000
      print(f"獎金為{bonustop}NTD，已經超出獎金上限，故調整為{bonus}NTD")
    else:
      print(f"獎金為{bonus}NTD")
    print("")
    allBonus=allBonus+bonus  
  print(f"所有人獎金總和為{allBonus}NTD")


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
