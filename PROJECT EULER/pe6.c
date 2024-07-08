#include <stdio.h>

int sumOfSquares(int first, int last){
	int sum = 0;
	for(int i = first; i<=last; i++){
		sum = sum + i * i;
	}
	return sum;
}

int sumOfNumbers(int first, int last){
	int sum = 0;
	for(int i = first; i<=last; i++){
		sum = sum + i;
	}
	return sum;
}

int main(){
	int x = sumOfNumbers(1,100);
	int y = sumOfSquares(1,100);
	int z = x * x - y;
	printf("%d %d %d", x, y, z);
}