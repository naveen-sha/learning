#chaper 3 = lists and tuple..........
#in lists it is a data type that stores set of value...
# it can store elements of different type like (intege ,sting,floating etc.)
# for example..
# marks=[87.5,98.4,49.7,97.4]
# print((marks[1]))
# print(len(marks))
# print(type(marks[3]))
# #we store multiple things in a list like (string ,integer, float.)..
# student=["nikku","age:",16,"live in bahadurgarh."]
# print(student)
# # in python lists are mutable.. it means uder the thigs of lists can change...
# student=["nikku",16,80.8,"bahadurgarh"]
# print(student[0])
# student[0]="naveen"
# print(student)
# in lists we also have slicing in lists [1:4]
# marks=[65,745,93,84,35,]
# print(marks[1:4])
# in this also have negative. like stings....[-3:-5]
# now we starts methods of lists , function............
# this methods are specific and it work only in lists.
# 1st methodd in list we use (append.) this means mutating the list...
# list=[1,67,3]
# list.append(4)
# print(list.sort()) 
# print(list)
# 2nd method  is (sort.)#this work is sort in (right order) (asending and descending) in order.(1,2,3,4,5)
# list=[6,3,7,]
# print(list.sort(reverse=True))
# print(list)
# it is also apply on strings.
# but in  strings that us only apply on 1st letter of word in order of (abcd)
# 3rd method is (reverse.) in lists...
# list=["d","g","hd","ghdu","ydy",]
# list.reverse()
# print(list)
# 4th method is (insert) this works is ensert the element on index.
# list=[2,1,3]
# list.insert(1,6)
# print(list)
# 5th method is (remove).remove first occurrence of element.[2,1,3]
# 6th method is (pop). it remove the perticuler value on index.[2,3]
# list=[3,2,4,3]
# list.pop(2)
# print(list)
# tuples in python......................................
# tuples is also like lists like it is a brother of lists.....
# tuples is a immutable in python(no change.).just like strings....
# in tuples we use paranthasis() without using square brackits[].
# all thigs are similiar in tuples like lists
# but in tuples there is not support item assignment.
# tup=(1,)# cooma (,) is neccessory to defined tuple.
# print(tup)
# print(type(tup))
# slicing is same in tuple..
# tuples methods .................. 
#tup=(2,1,3,1)
#1st methods is in tuple is (index) to find position.
# 2nd method is in tuple is (count) how many times come element in box..
# tup=(1,2,3,2,1,2,2,3,2,)
# print(tup.count(2))
# let's practice..............................
# wap to ask  the user to enter names of their 3 favorite movies &store them in alist..
# movies=[]
# mov1=input("enter your first movie name: ")
# mov2=input('enter your second movie name :')
# mov3=input("enter your third movie name :")
# # movies.append(mov1)
# # movies.append(mov2)
# # movies.append(mov3)
# print(movies) 
# wap to check if a list containa palindrome of elements. (hint:use copy() methods)# palindrome means a letter is a and ends with a like (racecar)[1,2,3,2,1]
# list1=[1,2,1]
# list2=[1,2,3]
# copy_list1=list1.copy()
# copy_list1.reverse()
# if(copy_list1 == list1):
#     print("palindrome")
# else:
#     print("not palindrome")
#wap to count the number of students with the "A"grade in the  following tuple...
# grade=("c","d","a","a","b","b","a")
# print(grade.count("b"))
# list=["c","a","d","b"]
# list.sort()
# print(list)
a=20
b=30
sum =(a+b)
print(sum)
print("this is your answer")