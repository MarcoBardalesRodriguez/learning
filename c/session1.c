// INCLUDE 
# include <stdio.h>

//CONSTANTES
# define name "MARCO"
//GLOBAL VAR
int year;

int main(){
    year = 2022;
    //DATA TYPES
    int edad = 20;
    float estatura = 1.69;
    char sexo[2] = "m";

    char apellido[25];
    //INPUT - OUTPUT
    printf("BIENVENIDO\n");
    printf("DATOS - %d\n", year);
    printf("NOMBRE: %s\n", name);

    printf("Escriba sus apellidos sin espacio: ");
    scanf("%c", &apellido[25]);
    printf("APELLIDOS: %s\n", apellido);
    printf("EDAD: %d\n", edad);
    printf("ESTATURA: %1.1f\n", estatura);
    printf("SEXO: %s\n", sexo);
    
    //INCREASE - DECREMENT
    // name++   name--
    // ++name   --name
    

    char despedida[25] = "GRACIAS POR TU VISITA";
    printf("\n%s\n", despedida);


    return 0;
}
