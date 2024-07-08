#include <stdio.h>
#include "supplementary.h"

int main(){
	int num;
	scanf("%d", &num);
	int i = 1;
	int x = triangularNum(i);
	printf("%d %d %d\n", i, x, factor(x, 500));
	while(factor(x, 500) == 1){
		i++;
		x = triangularNum(i);
		printf("%d %d %d\n", i, x, factor(x, 500));
	}
	printf("%d", i);
}