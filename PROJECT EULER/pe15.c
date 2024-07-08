#include <stdio.h>
#include "supplementary.h"

//lmao this problem does not really have to be programmed.
//The answer is just 40C20. I made a pretty complicated function just to be able to calculate large combinations

long int choose(int n, int r){
	int num[n], den[r], den2[r];
	for(int i = 0; i<n; i++){
		num[i] = i + 1;
	}
	for(int i = 0; i<r; i++){
		den[i] = i + 1;
		den2[i] = i + 1;
	}

	for(int i = 0; i<r; i++){
		for(int j = 0; j<n; j++){
			if(num[j] % den[i] == 0){
				num[j] = num[j] / den[i];
				den[i] = 1;
				break;
			}
			else{
				continue;
			}
		}
	}

	for(int i = 0; i<r; i++){
		for(int j = 0; j<n; j++){
			if(num[j] % den2[i] == 0){
				num[j] = num[j] / den2[i];
				den2[i] = 1;
				break;
			}
			else{
				continue;
			}
		}
	}

	long int y;
	long int x = y = 1;
	for(int i = 0; i<n; i++){
		x = x * num[i];
	}
	for(int i = 0; i<r; i++){
		y = y * den[i];
		y = y * den2[i];
	}
	return x/y;
}
int main(){
	printf("%ld", choose(40,20));
}