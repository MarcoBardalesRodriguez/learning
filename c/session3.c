//CONDITIONALS

#include <stdio.h>

int main(){
  int a, b, c, d;
  int numX = 23;

  printf("INGRESE CUATRO VALORES");
  printf("\nINGRESE AL VALOR 1: ");
  scanf("%d", &a);
  printf("\nINGRESE AL VALOR 2: ");
  scanf("%d", &b);
  printf("\nINGRESE AL VALOR 3: ");
  scanf("%d", &c);
  printf("\nINGRESE AL VALOR 4: ");
  scanf("%d", &d);
  printf("\na = %d", a);
  printf("\nb = %d", b);
  printf("\nc = %d", c);
  printf("\nd = %d\n", d);

  //if - else & if anidados
  if (a != b) {
    printf("a es difente de b\n");
  }else {
    printf("a y b coinciden\n");
  }
  
  if (c < b) {
    printf("c es menor que b\n");
  }else if (c > b) {
    printf("c es mayor que b\n");
  }else {
    printf("c y b son iguales\n");
  }

  //switch
  printf("x = %d\n", numX);

  switch (numX) {
    case 5: 
      printf("x es igual a 5\n");
      break;
    case 10: 
      printf("x es igual a 10\n");
      break;
    case 20: 
      printf("x es igual a 20\n");
      break;
    default:
      printf("x es diferente de 5,10, 20\n");
      break; 
  }

  return 0;
}
