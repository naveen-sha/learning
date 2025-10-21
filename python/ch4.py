# # chpate 4 in (about dictionary and sets.)
# # dictinary in python.
# # dictionaries are used to store data values in key:value pairs .
# # they are un ordered, mutable (changeabke)& don't allo duplicate keys.
# info={
#     "key":"vlaue",
#     "name":"naveen",
#     "learning":"coding",
#     "age":16,
#     "is_adult":True,
#     "marks":33.4
# }
# info["name"]="nikku"
# print(info)
# # print(info)
# # we can store all data type in dictionary.( integers,float,string, boolean etc)
# # we can also store lists and tuples in dictionary.
# info2={
#     "subjects":["python","c","java"],
#     "topics":("dict","set")
# }
# print(info2["topics"])
# # we can also add a new value i dict.
# # info=["name"] = "nikku"
# # print(info)
# # and we add a key value.
# # we can also create null (empty dictionsry).
# null_dict={}
# null_dict["name"]="naveen"
# print(null_dict)
# # nested dictionaris........  
# student={
#     "name":"naveen jangra",
#     "subjects":{
#         "phy":70,
#         "chem":75,
#         "matths":99
#     }
#     }

# # print(student["subjects"]["chem"])
# # nested dictionary...
# # methods in dictionary.......
# # ist method is in dictionary is (keys).#return all keys .
# print(len(student))
# print(student.keys())
# # we also do this in form of list and tuples.
# # 2nd method is (values).# return all values.
# print(list(student.values()))
# # 3rd method is (items)# return all (key,val)pairs as tuple .
# pairs=list(student.items())
# print(pairs[0])
# 4th method is (get)#return the keys according the value
# student={
#     "name":"naveen",
#     "subject":{
#         "phy":98,
#         "chem":99,
#         "maths":99
#     }
# }
# print(student["name2"])#error
# print(student.get("name2"))# no error ->none
# and when one line get error then other line automatically get errored.
# this is why methods are nccessory in code.
# 5th method is update method .# insert the specific items to the dictionary...
# student.update({"city":"delhi"})
# new_dict={"city":"delhi"}
# student.update(new_dict)# this method is long. but the value is update
# print(student)
# set in python....................................................
# we can store all  values in set except list and dictionary.
# collection={1,2,3,4,5,"hello","world"}# it ignore duplicate values.
# print(collection)
# print(type(collection))# we also print length.
# collection=set()
# collection.add(1)
# collection.add(2)
# print(collection)
# in set sets are mutable but uder the sets elements are immutable.
# it is similliar to dictionar , list tuples.
# union method in set.
# set1={1,2,3}
# set2={2,3,4}
# print(set1.union(set2))
# # in this the comman values are return.
# print(set1.intersection(set2))
# store following word meaning in a python dictionary.
# dictionary={
#     "table":("a piece of furniture","list of facts & figures"),
#     "cat":"a small animal"
# }
# print(dictionary)
# you are given a list of subjects for students. assume one classroom is required for 1subject .how many classrooms are needed by all students.
# subjects={"python","java","c++","python","javascript","java","python","java","c++","c"}
# print(len(subjects))
# wp to enter marks of 3 subjects from the user and store them in a dictionary. start withan empty dictionary& add one by one. use subjects name as key & marks as value.
# marks={}
# x=int(input("enter phy :"))
# marks.update({"phy":x})
# x=int(input("enter maths :"))
# marks.update({"maths":x})
# x=int(input("enter chem:"))
# marks.update({"chem":x})
# print(marks)
# figure out a way to store 9&9.0 as a seperate  values in the set.(you can help of built-in data types.)
# values={9,"9.0",8,8.0}
# print(values)
# after using built-in data type .
# values={
#     ("float",9.0),
#     ("int",9)
# }
# print(values)