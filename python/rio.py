
# name= "nikku" #string only in double cout
# age=16 # in this the value of right side is store into left side.and this assignment operator. 
# price=25.99
# print("name")
# print(name)
# print(age)
# print("my name is:",name)
# print("my age is :",age)
# price2=(price)
# print(price2)
# print(type(name))
# print(type(age))
# print(type(price))
# old=False # only capital letters.. otherwise their is error.
# a=None
# print(type(old))
# print(type(a))
# #arithmetic operators.....
# a=5
# b=2
# sum=(a+b)
# print(sum) 
# print(a-b)
# print(a*b)
# print(a/b)#  divide is always in flosting no.
# print(a%b)# it means to find remainder
# print(a**b)#a^b it means power
# #relational operators ......
# a=7
# b=3
# print(a==b) #false
# print(a!=b)#true
# print(a>=b)#true
# print(a>=b)#true
# print(a<=b)# false
#assignment operators.....
# num= 10
# num=num+10   #10+10=>20
# num-=10 
# num*=10
# num%=10 
# num**=6
# print("num:",num)#1000000
# # logical operators
# a=40
# b=30
# print(not False)
# print(not (a>b))
# val1=False
# val2=True
# print("and operator:",val1 and val2)#in this operator when the both value are not true then it is not give true
# print("or  operator:",a==b or a<b)#in this operator when one value is true and second value is not true then it gives true
#type conversion.................................
#two type of converion .
#1=type conversion(automatically) 
#2=type casting(manually)
#float is superior value as compare to int.
#and string is nor allow to add in float value.
#()->paranthasis.
# a=2
# b=5.6
# sum=a+b#2+5.6==>7.6
# print(sum)
# #type casting.....
# a=int("2")
# b=5.8
# print(type(a))
# print(a+b)
# a=4.9
# a=str(a)
# print(type(a))
# input in python................
# input is also like as print
# name= input("enter your name :")
# print("welcome",name)  
# name2=input("enter your age :") 
# print("thats good",name2)
# val=input("enter some value :")
# print(type(val),val)
# in input this convert all the value in string .. 
# int("5")
# val=float(input("enter some value:"))
# print(type(val),val)
# any input is enter by this 
# name =input("enter your name :")
# age =int(input("enter you age :"))
# marks =float(input("enter your marks:"))
# print("your name is:",name)
# print("your age is: ",age)
# # print("your marks is: ",marks)
# #lets practice ==write a program to imput 2 numbers &print their sum
# first=int(input("enter first:")) 
# second=int(input("enter second :"))
# print("sum",first+second)
# #wap to input side of a square &print its area
# side=float(input("enter square side"))
# print("area",side**2)
# #wap to input 2 floating point numbers &print their average
# a=float(input("enter first") )
# b=float(input("enter secondt"))
# # print("avg=",(a+b)/2)
# wap  to input 2 int numbers,a and b.print true if a is greater than or equal to b.if not print false. 
# a=int(input("enter first:"))
# b=int(input("enter second:"))
# print(a>=b)
# chapter 2................................................................
# in this chapter we read about strings and conditional statement.
# final_string=str1=str2..
# print final string.
# str1="hello"
# str2="world"
# final_string=str1 +str2
# print(final_string)
# print(len(final_string))
# #in length special characters and space are also count
# #indexing....................................... 
# str="naveen."
# ch=str[3]
# print(ch)
# we can directally access also..
# print(str[2])
# #slicing................................
# print(str[2:6])
# we can also write print(str[3:len(str)]) and one more thing about  slicing we can also do (str[5:])
# print(str[:4])# this line means is we try to go 0 to 4
# print(str[-2:-4])
# str="i am studying python from nikku"
# str=str.capitalize()
# print(str.capitalize())
# print(str.replace("python","jvascript"))
# print(str.find("n"))#int this a specific index means no. of position gives.
# but in this when we write a no. which is not in line the -1 in output
# let's practice................................................
# show=input("whats $ your$$$ name:")
# print("lenght of your name is", len(show))
# str="hi$am a $devellper $999999"
# print(str.count("$"))
#          conditional statements..................................
#if-elif-else(syntex)
#if(condition):statement1
#elise(condition):statement2
#else statementN
# it is for if...............
# age=25
# if(age>=18):
#     print("can vote ")
#     print("can drive")
# #elif.......
# light="green"
# if(light=="red"):
#     print("stop")
# if(light=="green"):
#     print("go")
# if(light=="yellow"):
#     print("wait") 
# print("for some moments")  
# elif statement is worked when if statement are wrong
# else:
#     print("light is broken") 
# marks=int(input("enter students marks:"))

# if(marks>=90):
#     grade="A"
# elif(marks>=80 and marks <90):
#     grade="B"
# elif(marks>=70 and marks<80):
#     grade="C"
# else:
#     grade="D"

# print("grade of the student->",grade)
# nesting=is that one statement into one more statement.............
# age=45
# if(age>=18):
#     if(age>80):
#         print("cannot drive")
#     else:
#         print("can drive")
# else:
#     print('cannot drive')
# let's practice .................
# wap to check if a number entered by the user is odd or even.
# num=int(input("enter you number:"))

#  if(num %2==0):
# #     print("even")
# else:
#     print("odd")
#wap to find the greatest of 4 numbers entered by the user.
# a=int(input("enter first number:"))
# b=int(input("enter second number:"))
# c=int(input("enter third number:"))
# d=int(input("entyer fourth number:"))
# if(a>b and a>c):
#     print("first number is greatest->",a)
# elif(b>d ):
#     print("second number is greatest->",b)
# else:
#     print("third number is largest->",c)
# # wap to check if a number is a multiple of 9 or not .
# a=int(input("enter your number:"))
# if(a%9==0):
#     print("multiple of 9")
# else:
#     print("not a multiple ")
import random

def number_guessing_game():
    # Step 1: Generate a random number
    number_to_guess = random.randint(1, 100)
    attempts = 0
    
    # Step 2: Prompt the user to guess
    while True:
        guess = int(input("Guess the number between 1 and 100: "))
        attempts += 1
        
        # Step 3: Give feedback
        if guess < number_to_guess:
            print("Too low! Try again.")
        elif guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Correct! The number was {number_to_guess}. It took you {attempts} attempts.")
            break

# Start the game
number_guessing_game()
 

  







