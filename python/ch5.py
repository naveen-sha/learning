# chapter 5 is loops.
# loops in python..........
# loops are used to repeat instruction..
# loops are two type while loop and for loop.
# while condition :
    # some work.
    # some updation or not.
# while True :
#     print("nikku")
 # this works infinite..
# count=1# called iterators and any variable which help to start loop called iterators.
# while count<=5:# this value to change to write many times.
#     print("nikku")# called iteration.
#     count+=1
# print(count)
# i won't to print numbers from 1 to 5.
# i=1
# while i<=10:# we can also print reverse in loop.
#     print(i)
#     i=i+1

# print("loop ended")
# i=10
# while i>=1:
#     print(i)
#     i-=1
# print("loop ended")
# print number from 1 to 100.
# n=1
# while n <= 100 :
#     print(n)
#     n=n+1
# print("loop ended")
# print number from 100 to 1.
# n=100
# while n>=1:
#     print(n)
#     n= n-1
# print(" loop ended")
# print the multiplication teable of a number n.
# n=7
# while n<=70:
#     print(n)
#     n=n+7
# print("loop ended")
# easy way..
# i=int(input("enter the number:"))
# n=1
# while n <= 10:
#     print(n*i)
#     n+=1
# print("loop ended")
# print the elements of the following list using a loop:
# nums=[1,4,9,16,25,36,49,64,81,100]
# heroes =["ironman ","thor","spiderman","batman"]# traverse.
# idx=0
# while idx< len(heroes):
#     print(heroes[idx])
#     idx +=1
# search a number x using this loop:
# nums=(1,4,9,16,25,36,49,64,81,100)
# x=36
# i=0
# while i < len(nums):
#      if(nums[i]== x):
#         print("found at idx",i)
         
#      i=i+1
# in while loop we have study about (break and continue in loop)
# ist is break.......... used to terminate the loop when encountered.
# it work to break the loop and escape.
#  i = 1
#  while i<=5:
#     print(i)
#     if(i==3):
#         break
#     i+=1

# print("end of the loop")
# 2nd is continue...... terminates execution in the current iteration & continues execution of the loop the next iteration.
# i=0
# while  i <= 5:
#     if(i==3):
#         i+=1
#         continue # basically used for skip...
#     print(i)
#     i+=1
# for loops in python ..............
# for loops are used fro sequential traversal .for traversing list , string ,tuples eytc.
# for loops with ( in).
# nums=[1,2,3,4,5]
# for val in nums:
#     print(val)
# veggies =["potato","brinjal","ladyfinger"]
# for val in veggies:
#     print(veggies)
# in for loop (else)
# str="yesnsgamer"
# for char in str:
#     if(char=='g'):
#         print("o found")
#         break
#     print(char)
# else:# 'else use were we use break.
#     print("end")    
# let's practice
# print the elements of the following  list using a loop.[1,4,9,16,25,36,49,64,81,100]

    # nums=[1,4,9,16,25,36,49,64,81,100]
    # for el in nums:
    #    print (el)
    # print("loop ended")
# search for a number x in this loop:[1,4,9,16,25,36,49,64,81,100] this search is called leanear search.
# nums=(1,4,9,16,25,36,49,64,81,100,81)
# x=81
# i=0
# for el in nums:
#     if (el==x):
#         print("found a number",i)

#     i+=1
# range()...................
# range function returns a sequence of numbers,starting from 0 by default , and increment by  1 (by default), and stop befor a sepecified number .
# for i in range(100):# this is stoping condition:
#     print(i)

# for i in range(3,80):# this is ( start and stoping condition)
#     print(i)

# for i in range(3,80,3):#
#     print(i)
# let's practice...( using for & range())
# print number from 1 to 100.
# for i in range(1,101):
#     print(i)
# # print numbers from 100 to 1.
# for i in range(100,0,-1): # step size is negative when we try to decreasing in order.
#     print(i)
# print the multiplication table of a number n.. 
# n= int(input ("enter the number :")) 
# for i in  range(1,11):
#     print(i*n)

# funnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn


# Initialize the first number
num = 1
 ## Loop to perform calculations
for _ in range(64): 
    # # You can adjust the range for more iterations
  result = num + num
print(f"{num} + {num} = {result}")
num = result
print("YOUR WORK IS DONE SIR...")

# pass statement in loop.......
# pass is a null statement  that does nothing .it is used as a placeholder for future code..
# for i in range(5):
#     pass
## if i>5:
 #    pass
# print("some useful works ")
