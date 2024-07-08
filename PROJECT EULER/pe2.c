#include <stdio.h>

int fibonacci(int num){
	if(num == 1 || num == 2){
		return num;
	}
	else{
		return fibonacci(num-1) + fibonacci(num-2);
	}
}

int main(){
	int sum = 0;
	for(int i; fibonacci(i)<4000000; i++){
		if(fibonacci(i) % 2 == 0){
			sum = sum + fibonacci(i);
			printf("%d\n", sum);
		}
	}
	printf("%d", sum);
}