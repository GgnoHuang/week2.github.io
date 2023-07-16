def findIndexOfCar(seats, status, number):
  ans = -1
  availableNum=[] 
  for i,seat in enumerate(seats):
    if status[i]==1 and seat>=number:
      availableNum.append(seat)     #找出可供應、並且人數大於等於乘客的座位，放入陣列

  if len(availableNum)>0:     #防止availableNum為空使用min()時的報錯
    minAvailable = min(availableNum); #找到這之中座位最少者
    for i in range(len(seats)):       #找到其在所有座位中的index
      if seats[i]==minAvailable:
        ans=i
        break

  print(ans)


findIndexOfCar([3, 1, 5, 4, 2], [0, 1, 0, 1, 1], 2); #  print 4 
findIndexOfCar([1, 0, 5, 1, 3], [0, 1, 0, 1, 1], 4); # print -1 
findIndexOfCar([4, 6, 5, 8], [0, 1, 1, 1], 4); #  print 2

findIndexOfCar([5, 8, 15, 7, 12], [0, 1, 0, 1, 0], 5); # print 3
findIndexOfCar([5, 8, 15, 7, 12], [1, 1, 1, 0, 1], 12);# print 4
findIndexOfCar([5, 8, 15, 7, 12], [1, 1, 1, 0, 0], 12); #  print 2
findIndexOfCar([5, 8, 15, 7, 12], [1, 1, 1, 0, 0], 16); #  print -1