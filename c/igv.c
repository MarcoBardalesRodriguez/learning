# include <stdio.h>

float igv(float);
float monto, montoFinal, resultado;

int main(){

  printf("INGRESA EL MONTO\n");
  scanf("%f", &monto);
  
  montoFinal = igv(monto);
  printf("\nMONTO MAS IGV: %1.1f\n\n", montoFinal);


  return 0;
}

float igv(float cantidad){

  resultado = cantidad * 1.18;
  return resultado;
}
