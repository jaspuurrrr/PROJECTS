#include <stdio.h>
#include <math.h>

#define DIV pow((double) 10, (double) 10)

double selfpower(int n){
	double x = (double) n;
	for(int i = 0; i<n-1; i++){
		x = x * (double) n;
		while(x > DIV){
			x = x - DIV;
		}
	}
	return x;
}

int main(){
	double n = 0;
	for(int i = 0; i < 1000; i++){
		n = n + selfpower(i);
		while(n > DIV){
			n = n - DIV;
		}
	}
	printf("%lf", n);
	return n;
}