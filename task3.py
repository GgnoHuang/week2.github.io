def func(*persons):
  middles = []
  for item in persons:
    middles.append(item[1])
  print(f'所有的middle name:{middles}')
  uniqueMiddles=[]
  for n in middles:
    cnt = 0
    for m in middles:
      if n==m:
        cnt+=1
    if cnt==1:
      uniqueMiddles.append(n)
  isDuplicate = True
  for person in persons:
    for uniqueMiddle in uniqueMiddles:
      if uniqueMiddle in person:
        print(person)
        isDuplicate=False
        break
  if isDuplicate:
    print('沒有')
  print('-------------------')


func("隋煬帝","宋明帝","宋文帝","梁武帝","漢武帝",'漢獻帝',"魏文帝",'哈哈哈')
func("彭大牆", "王明雅", "吳明") 
func("郭靜雅", "王立強", "林靜宜", "郭立恆", "林花花") 
func("郭宣雅", "林靜宜", "郭宣恆", "林靜花") 