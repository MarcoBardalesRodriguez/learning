#FILES MANAGEMENT

# w+ sobreescribe el archivo
# a+ concatena al final
# r  lee el contenido

file = open('archivo.txt','w+')

file.write('michi dice hola')
#contenido = file.read()

file.close()
