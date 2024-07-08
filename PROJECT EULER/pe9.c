#include <stdio.h>
#include "supplementary.h"

int main(){
	int x, y, z;
	for(x = 1; x<500; x++){
		for(y = 1; y<500; y++){
			z = 1000 - x - y;
			if(isPythagorean(x, y, z)){
				printf("%d", x*y*z);
				break;
			}
		}
		if(isPythagorean(x, y, z)){
			break;
		}
	}
	printf(" %d %d %d", x, y, z);
}