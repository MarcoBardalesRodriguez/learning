#FUNCTIONS

def suma(a,b):
    return a +b 

result = suma(100,34)
print(result)

result  = suma(b=89,a=23)
print(result)

def sumatoria(arg):
    result  = 0
    for i in arg:
        result += arg[i]
    return result

lista = [i for i in range(20)]
print(lista)
result = sumatoria(lista)
print(result)


def producto(*arg):
    result = 1
    for i in arg:
        result *= i
    return result

print(producto(1,2,3,4))
