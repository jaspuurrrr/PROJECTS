#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int isPrime(int num){
	if(num==0 || num==1){
		return 0;
	}
	for(int i=2; i<=num/2; i++){
		if(num % i == 0){
			return 0;
		}
	}
	return 1;
}

int nextPrime(int num){
	do{
		if(num%2 == 0){
			num++;
		}
		else{
			num = num + 2;
		}
	}while(!isPrime(num));
	return num;
}

int factorial(int num){
	if(num == 1 || num == 0){
		return 1;
	}
	else{
		num = num * factorial(num - 1);
		return num;
	}
}

int perm(int num){
	int digits = 0;
	while(pow((double) 10, (double) digits) <= num){
		digits++;
	}
	int digit[digits];
	for(int i=0; i<digits; i++){
		digit[i] = num % 10;
		num = num / 10;
	}
	int perm = factorial(digits), n=0;
	for(int i=0; i<10; i++){
		for(int j=0; j<digits; j++){
			if(digit[j] == i){
				n++;
			}
		}
		perm = perm / factorial(n);
		n = 0;
	}
	return perm;
}

int countPrime(int *arr, int size){
	int count = 0;
	for(int i=0; i<size; i++){
		count = count + isPrime(*(arr+i));
	}
	return count;
}

void filterPrime(int *arr, int *newArr, int count){
	int i = 0, j = 0;
	while(i < count){
		if(isPrime(*(arr+j))){
			*(newArr+i) = *(arr+j);
			i++;
		}
		j++;
	}
}

void sort(int *arr, int size){
	int temp;
	for(int i=0; i<size - 1; i++){
		if(arr[i] > arr[i+1]){
			temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			i = -1;
		}
	}
}

void warp(int num, int *arr){
	int digits = 0, size = perm(num), count = 0;
	while(pow((double) 10, (double) digits) <= num){
		digits++;
	}
	int digit[digits];
	for(int i=0; i<digits; i++){
		digit[i] = num % 10;
		num = num / 10;
	}
	sort(digit, digits);
	int log[digits][digits];
	bool conflict = false;
	for(int i = 0; i<digits; i++){
		for(int j = 0; j<digits; j++){
			log[i][j] = 0;
		}
	}
	log[0][0] = 1;
	int stack[digits], index = 0;
	for(int i=0; i<digits; i++){
		stack[i] = -1;
	}
	stack[index] = 0;
	while(count < size){
		for(int i=index - 1; i>=0; i--){
			if(log[stack[index]][index] == log[stack[index]][i]){
				conflict = true;
			}
		}

		if(conflict){
			if(stack[index] < digits-1){
                log[stack[index]][index]=0;
                log[++stack[index]][index]=1;
                conflict = false;
            }
            else{
                //removes the queen from the current column
                log[stack[index]][index] = 0;
                stack[index] = -1;
                index--;
            }
		}
		else if(!conflict && index == digits-1){
			int wnum = 0;
			for(int i=0; i<digits; i++){
				wnum = wnum + pow((double) 10, (double) digits - (i + 1)) * digit[stack[i]];
			}
			bool duplicates = false;
			if(count == 0){
				arr[count] = wnum;
            	count++;
			}
			else{
				for(int i=count-1; i>=0; i--){
					if(wnum == arr[i]){
						duplicates = true;
					}
				}
				if(!duplicates){
					if(arr[count-1] != num){
					arr[count] = wnum;
            		count++;
					}
				}
			}
            conflict = true;
        }
        else{
            log[0][index+1] = 1;
            index++;
            stack[index] = 0;
        }
	}
}

void printArithmetic(int *arr, int size){
	for(int i=0; i<size-2; i++){
		for(int j=1; j<size-1; j++){
			if(i >= j){
				continue;
			}
			for(int k=2; k<size; k++){
				if(j >= k){
					continue;
				}
				if(arr[k]-arr[j] == arr[j]-arr[i]){
					printf("%d%d%d\n", arr[i], arr[j], arr[k]);
				}
			}
		}
	}
}

int main(){
	for(int num = nextPrime(1000); num<10000; num = nextPrime(num)){
		int arr[perm(num)];
		warp(num, arr);
		int prime = countPrime(arr, perm(num));
		if(prime >= 3){
			int arrPrime[prime];
			filterPrime(arr, arrPrime, prime);
			printArithmetic(arrPrime, prime);
		}
		else{
			continue;
		}
	}
}