def sort(l):
    l.sort()
    print("sorted list:",l)
def reverse(l):
    l.reverse()
    print("reversed list:",l)
def count(l):
    c=len(l)
    print("count=",c)

my_l=[5,2,9,1,5,6]
print("original:",my_l)
sort(my_l)
reverse(my_l)
count(my_l)