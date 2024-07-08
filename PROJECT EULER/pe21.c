#include <stdio.h>
#include "supplementary.h"

int d(int num){
	int sum = 0;
	if(num == 1){
		return 0;
	}
	else{
		int i = 2;
		while(factor(num, i) != 1){
			sum = sum + factor(num, i);
			i++;
		}
		sum++;
		return sum;
	}
}

int main(){
	int sum = 0;
	for(int i = 2; i<10000; i++){
		if(i == d(d(i)) && i != d(i)){
			printf("%d: %d\n", i, 1);
			sum = sum + i;
		}
	}
	printf("\n%d", sum);
}