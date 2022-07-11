# LIST - ARRAYS - METHODS
animalList = ["perro","gato","raton"]

#BUCLE for
for animal in animalList:
    print(animal)
print("\n")

#LISTAS COMPRESAS
my_list = [[i,i*i]for i in range(10)]
print(my_list)

# .append agrega un elemento al final del array
animalList.append("chanchito")
for animal in animalList:
    print(animal)
print("\n")

# .extend agrega multiples elementos a un array
animalList.extend(["gato","loro","iguana"])
# .remove elimina el primer elemento coincidente de un array
animalList.remove("gato")
# .insert agrega un elemento en la posicion n de un array
animalList.insert(0,"monito")

for animal in animalList:
    print(animal)
print("\n")

#DICTIONARY
myDictionary = {"nombre":"Marco", "edad":"20", "genero":"masculino"}
myDictionary.update({"nacionalidad":"peruano"})

clave = myDictionary.keys()
valor = myDictionary.values()
longitug = myDictionary.items()
longitug2 = len(myDictionary)
longitug3 = enumerate(myDictionary)

for clave, valor in longitug:
    print(clave + ":" + valor)
