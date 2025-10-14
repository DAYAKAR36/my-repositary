import statistics
def average(n):
    if not n:
        return 0
    return sum(n)/len(n)
num=list(map(float,input().split()))
avg=average(num)
mean=statistics.mean(num)
med=statistics.median(num)
dev=statistics.stdev(num) if len(num)>1 else 0
print(f"\nNumbers:{num}")
print(f"average:{avg}")
print(f"mean:{mean}")
print(f"median:{med}")
print(f"std_dev:{dev}")