#include <stdio.h>
# include <stdlib.h>
// #include <windows.h>

/*
FILE * nombre de variable

r abre un fichero para lectura
w abre un fichero para su escritura
a abre un fichero para agregar datos al final 

+ abre un fichero para lectura y escritura
b coloca en tipo binario
t coloca el fichero en tipo texto

*/
int option;
char finish = 'N';



struct agenda{
    char name[100];
    char phone[30];
    char relation[50];
    int id;
};
struct agenda myAgenda;

void clrscr(  );
void beginning();
void add();
void list();
void edit();
void ending();


int main(){

    beginning();

    return 0;
}

void clrscr(){
    system("@cls||clear");
}

void beginning(){
    while (finish == 'N') {
        
        fflush(stdin);
        clrscr();
        printf("\t\tBienvenido a tu agenda\n\n");
        printf("\t\t\t[1] Contacto nuevo\n");
        printf("\t\t\t[2] Mi lista de contactos\n");
        printf("\t\t\t[3] Editar un contacto\n");
        printf("\t\t\t[4] Salir de mi agenda\n");

        printf("\n\n\t\t\tIngresa la opcion deseada: ");
        scanf("%d", &option);

        switch (option) {
            case 1:
                add();
                break;

            case 2:
                list();
                break;
            
            case 3:
                edit();
                break;
            
            case 4:
                ending();
                finish = 'Y';

                break;
            
            default:
                printf("La opcion no fue reconocida --- ");
                break;
        }
    }
}

void add(){

    FILE * save;
    fflush(stdin);

    printf("Ingresa el ID del contacto: ");
    scanf("%d",&myAgenda.id);
    fflush(stdin);

    printf("Ingresa el nombre del contacto: ");
    gets(myAgenda.name);
    fflush(stdin);

    printf("Ingresa el telefono del contacto: ");
    gets(myAgenda.phone);
    fflush(stdin);

    printf("Ingresa el parentesco del contacto: ");
    gets(myAgenda.relation);
    fflush(stdin);

    save = fopen("agenda.txt", "a+");

    if (save == NULL) {
        printf("Error en la apenda, no se pudo encontrar ");
    }
    else{
        fwrite(&myAgenda,sizeof(myAgenda), 1, save);
        fclose(save);
    }

    Sleep(1000);
}

void list(){

    clrscr();
    FILE* show;

    show = fopen("agenda.txt", "a+");

    printf("ID\tNOMBRE\t\t\t\tTELEFONO\t\tPARENTESCO");
    fread(&myAgenda, sizeof(myAgenda), 1, show);

    while (!feof(show)){
        printf("%d\t%s\t\t\t%s\t\t%s\n", myAgenda.id, myAgenda.name, myAgenda.phone, myAgenda.relation);

        fread(&myAgenda,sizeof(myAgenda), 1, show);
    }

    fclose(show);
    printf("\n\npresiona una tecla para continuar");
    getch();

}

void edit(){

    clrscr();
    fflush(stdin);
    FILE* tempex;
    FILE* temp;

    int found = 0;
    int remove1;
    int rename1;
    int ID;

    printf("Ingrese el ID del contacto a modificar: ");
    scanf("%d", &ID);

    tempex = fopend("agenda.txt", "r+");

    if (tempex == NULL) {
        printf("No se puede abrir el archivo");
    }

    temp = fopen("Temp.txt", "a+");
    if (temp == NULL) {
        printf("No se puede abrir el archivo");
    }

    fread(&myAgenda, sizeof(myAgenda), 1, tempex);

    while (!feof(tempex)) {
        
        if (myAgenda.id == ID) {

            fflush(stdin);
            printf("Ingresa el nombre del contacto: ");
            gets(myAgenda.name);
            fflush(stdin);

            printf("Ingresa el telefono del contacto: ");
            gets(myAgenda.phone);
            fflush(stdin);

            printf("Ingresa el parentesco del contacto: ");
            gets(myAgenda.relation);
            fflush(stdin);

            fwrite(&myAgenda, sizeof(myAgenda), 1, temp);
            found = 1;

        }
        else {
            fwrite(&myAgenda, sizeof(myAgenda), 1, temp);
        }

        fread(&myAgenda, sizeof(myAgenda), 1, tempex);
    }

    fclose(temp);
    fclose(tempex);

    remove1 = remove("agenda.txt");
    printf("removido");
    rename1 = rename("Temp.txt", "agenda.txt");
    printf("renombrado");

    if (found == 0) {
        printf("No existe ese ID");
    }
    else {
        printf("Actualizacion exitosa");
    }

    printf("Presiona una tecla para continuar");
    getch();
}



void ending(){
    clrscr();
    printf("\n\t\tFue un placer que usaras esta agenda");
    printf("\n\t\tEspero verte nuevamente\n");
}

