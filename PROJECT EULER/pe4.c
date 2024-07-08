#include <stdio.h>
#include "supplementary.h"

int is3by3(int num){
	int yes = 0;
	int div = 100;
	while(yes == 0 && div<1000){
		if(num % div != 0){
			div++;
			continue;
		}
		else if((num/div)<1000 && (num/div)>99){
			yes = 1;
			break;
		}
		else{
			div++;
		}
	}
	return yes;
}

int main(){
	for(int i = 999999; i>=10000; i = prevPalindrome(i)){
		if(is3by3(i)){
			printf("%d", i);
			break;
		}
		else
			continue;
	}
	//printf("%d %d %d %d", is3by3(1), is3by3(10000), is3by3(10201), is3by3(160000));
	//printf("%d", prevPalindrome(99));
	return 0;
}