print('Welcome my first python code.!');
print(0.2+0.1);
my_dog = 1;
my_dog="asif";
print(my_dog);
print(type(my_dog));
my_str ="Hello World";
print(my_str[2:4]);
print('i like thses fruits {2} {0} {1}'.format("Apple","Babana", "Lemon"));
my_list = [1,2,3];
my_list=["asif", 100];
print(len(my_list));
# Tuples
t= (1,3,4,5) #() can not be change
mytt=[1,2,3]# [] and data can be change
print(type(t));
print(type(mytt))

# set - On order collections
mySet = set();
print(mySet);
mySet.add("Asif Khan");
print(mySet);
print(type(True))
print(set([1,1,2,3]))

#file system

# function
def simple():
    print("Hello")

simple()

#function
def plus_ten(a):
    return a*12;
print(plus_ten(10))
print(round(35.56789, 3))

def distance_from_zero(x):
    if type(x) == int:
        return abs(x)
    else:
        print ("Not possible")
        
distance_from_zero(-10)
#distance_from_zero("cat")
#list
participants = ["A","B","C"];
print(participants)
Numbers = [15, 40, 50, 100, 115, 140]
print(Numbers.sort(reverse=True));
# object examples
# tupes x= (1,2,3,4)

# dictinieris exmaple
Menu = {'meal_1':'Spaghetti', 'meal_2':'Fries', 'meal_3':'Cheeseburger', 'meal_4':'Lasagna', 'meal_5':'Soup'}
 
Price_list = {}
Price_list['Spaghetti'] = 10
Price_list['Fries'] = 5
Price_list['Cheeseburger'] = 8
Price_list['Lasagna'] = 12
Price_list['Soup'] = 5
print(Price_list)

#list range
print(list(range(0,10,2)))

for x in range(1,11):
    if x%2 ==1:
        print(x,end=" ")
    else:
        print("Even", end=" ")

# function
print("\n*******************")
def count(number):
    total=0
    for x in number:
        if x < 20:
            total+=1
    return total
print("Total count is: ",count([0,1,3,5,7,31,45,67,11]))

# iterating ovr dictionaries
prices = {
    "apple":100,
    "banae":100,
    "grapes":100
}
quantity = {
    "apple":2,
    "banae":3,
    "grapes":10
}
money_spent=0
for i in prices:
    money_spent = money_spent +(prices[i]*quantity[i])
    print(money_spent)

prices = {
    "box_of_spaghetti" : 4,
    "lasagna"  : 5,
    "hamburger" : 2
   }
quantity = {
    "box_of_spaghetti" : 6,
    "lasagna"  : 10,
    "hamburger" : 0
    }

money_spent = 0
for i in prices:
    if prices[i] >= 5 :
        money_spent +=prices[i] * quantity[i]
    else:
        money_spent = money_spent

print(money_spent)

#OOPs
# Floats
#Integer
#list
# Object = Data + Manipulations
# module + Package + python standard library
print("\n*******************")
products_on_sale = ['Chair_Type_1', 'Chair_Type_2', 'Chair_Type_3', 'Chair_Type_4']
sale_prices = [100, 120, 135, 150]
quantities = [1000, 1500, 1300]
 
sales_revenue = [[chair, price * qty]
                 for chair in products_on_sale
                 for price in sale_prices
                 for qty in quantities]
print(sales_revenue)

print("\n*******************")
range_number = range(1,10)
for x in range_number:
    if x % 2 ==0 :
        print([x])

# seond way to get only even number
print([num * 10 for num in range(1, 11) if num % 2 == 0])

# lmbd example
add = lambda a,b:a+b
print(add(100,200))
number_list43 = [2,3,4,5,6]
squares = list(map(lambda x: x * x,number_list43 ))
print(squares)

print((lambda x: x*10)(17))
