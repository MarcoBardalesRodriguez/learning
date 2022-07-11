#ESTRUCTURAS DE CONTROL
#CONDICIONAL if-else

num1 = 1
num2 = 10

if(num1 != num2):
    print("los valores son distintos")
else:
    print("los valores son iguales")

#BUCLE while

sessionTotals = 10
sessionComplets = 2

while sessionComplets < sessionTotals:
    sessionComplets += 1
    #USE str() for convert int/float to string
    print("sesiones a realizar: " + str(sessionComplets))
