def get_number(index):
  if(index%2==0):
    print(int(index / 2)*3)
  elif(not index%2==0):
    print(4+int(index / 2)*3)
  
get_number(1) # print 4 
get_number(5) # print 10 
get_number(10)# print 15

