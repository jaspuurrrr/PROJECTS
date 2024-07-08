#include <stdio.h>

long int factor(long int num, int order){
	int i = 0;
	int factor = 0;
	while(i != order){
		factor++;
		if(num % factor == 0){
			i++;
		}
		else if(factor > num/2){
			return 1;
		}
	}
	return num/factor;
}

int isPrime(int num){
    if(num == 1 || num == 0){
        return 0;
    }
    int factorCount = 0;
    for(int i=1; i<=num/2; i++){
        if(num%i == 0){
            factorCount++;
        }
    }
    if(factorCount == 1){
        return 1;
    }
    else{
        return 0;
    }
}

int main(){
	int i = 0;
	int order = 0;
	while(i == 0){
		i = isPrime(factor(600851475143, ++order));
	}
	printf("%ld", factor(600851475143, order));
}


