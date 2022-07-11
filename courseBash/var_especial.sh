#¡bin/bash

#$1
#$9
#${10}

echo "el primer parametro es $1"
echo "el segundo parametro es $2"

echo "el numero de parametros es $#"
echo "los parametros ingresados son = $*"

echo "el nombre del scrip es $0"
echo "id del proceso $$"
echo "tiempo en ejecucion $SECONDS"
echo "num lineas $LINENO"
echo "user $USER O $USERNAME"
echo "shell en uso : $SHELL"
echo "los binarios se encuentran en = $PATH"
echo "numero aleatorio $RANDOM"
echo "el codigo de retorno es 0(noerror)/4(error) = $?"
echo "ruta de home $HOME"
#mas variables consultar "env" en terminal

