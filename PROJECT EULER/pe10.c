#include <stdio.h>
#include "supplementary.h"

int main(){
	long int sum = 0;
    int limit;
    scanf("%d", &limit);
	for(int i = 2; i<limit; i = nextPrime(i)){
		sum = sum + (long int) i;
		printf("%ld %d\n", sum, i);
	}
	printf("\n\n%ld", sum);
}