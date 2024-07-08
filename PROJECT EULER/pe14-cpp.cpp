#include <iostream>
#include "supplementary.h"
using namespace std;

int cache(long int num, int *arr){
	int count;
	long int nextNum;
	if(num == 1){
		arr[num] = 1;
		return 1;
	}
	else{
		nextNum = nextCollatz(num);
		if(nextNum < (long int)1000000){
			if(arr[nextNum] != 0){
				count = 1 + arr[nextNum];
			}
			else{
				count = 1 + cache(nextNum, arr);
			}
		}
		else{
			count = 1 + cache(nextNum, arr);
		}
	}
	if(num < 1000000){
		arr[num] = count;
	}
	return count;
}

int main(){
	int arr[1000000] = {0};
	int max = 0, curr, ans;
	for(int i = 1; i < 1000000; i++){
		curr = cache((long int)i, arr);
		if(curr > max){
			max = curr;
			ans = i;
		}
	}
	cout << ans;
	return 0;
}