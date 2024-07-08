#include <stdio.h>

int lcm(int num1, int num2){
	for(int i=1; i<=num1*num2; i++){
		if(i%num1 == 0 && i%num2 == 0){
			return i;
		}
	}
	return num1*num2;
}

int xlcm(int num){
	if(num == 1 || num == 2)
		return num;
	return lcm(xlcm(num - 1), num);
}

int main(){
	printf("%d", xlcm(20));
}