//OPERADORES

#include <stdio.h>

int main(){
  int a, b, c, d;
  int var1, var2;

  //ASSIGMENT
  // =   +=  -=  *=  /=  %=
  a = 5;
  b = 10;
  c = 15;
  d = 20;

  printf("a = %d\n", a);
  printf("b = %d\n", b);
  printf("c = %d\n", c);
  printf("d = %d\n", d);
  
  a += 10;
  b *= 2;
  c /= 3;
  d %= 4;

  printf("\na = %d\n", a);
  printf("b = %d\n", b);
  printf("c = %d\n", c);
  printf("d = %d\n", d);

  // COMPARISON
  // ==  !=  <=  >=  <   > 

  //LOGIC
  // true=1   false=0
  
  //CONDITIONALS
  // Y = &&  O = ||  NO = !
  
  var1 = a == b && c != d;
  var2 = a <= b || c >= d;
  printf("\nvar1 = %d\n", var1);
  printf("var2 = %d\n", var2);
  

  return 0;
}
