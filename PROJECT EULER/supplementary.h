#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int isPrime(int num){
    if(num == 1 || num == 0){
        return 0;
    }
    int factorCount = 0;
    for(int i=2; i<=sqrt(num); i++){
        if(num%i == 0){
            factorCount++;
            if(factorCount == 1){
                break;
            }
        }
    }
    if(factorCount == 0){
        return 1;
    }
    else{
        return 0;
    }
}

int nextPrime(int num){
	if(num < 2){
		return 2;
	}
    else if(num == 2){
        return 3;
    }
    else if(num % 2 == 0){
        num--;
    }
    do{
    num = num + 2;
    }while(!isPrime(num));
    return num;
}

int prevPrime(int num){
    if(num == 2){
        return 2;
    }
    else if(num % 2 == 0){
        num++;
    }
    do{
    num = num - 2;
    }while(!isPrime(num));
    return num;
}

int nthprime(int n){
	int i = 0;
	for(int j = 0; j<n; j++){
		i = nextPrime(i);
	}
	return i;
}

int nthPrime(int n){
    if(n == 1){
        return 2;
    }
    return nextPrime(nthPrime(n-1));
}

int nextComposite(int num){
	if(num % 2 == 1){
		return num+1;
	}
	else{
		if(isPrime(num+1))
			return num+2;
		else
			return num+1;
	}
}

int prevComposite(int num){
	if(num % 2 == 1){
		return num-1;
	}
	else{
		if(isPrime(num-1))
			return num-2;
		else
			return num-1;
	}
}

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

int numdgtcount(int num){
	int size = 0;
	while(pow((double)10, (double) size) <= num){
		size++;
	}
	return size;
}

int reverseNum(int num){
	int arr[numdgtcount(num)];
	int x = num, y = 0;;
	for(int i=0; i<numdgtcount(num); i++){
		y = y + (x % 10) * pow((double)10, (double) numdgtcount(num) - (i + 1));
		x = x / 10;
	}
	return y;
}

int isPalindrome(int num){
	return (num == reverseNum(num));
}

int prevPalindrome(int num){
	do{
		num--;
	}while(!isPalindrome(num));
	return num;
}

int nextPalindrome(int num){
	do{
		num++;
	}while(!isPalindrome(num));
	return num;
}

int factor(int num, int order){
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

double pythagorean(int a, int b){
	int x = a*a + b*b;
	return pow((double) x, 0.5);
}

int isPythagorean(int a, int b, int c){
	if(a <= 0 || b <= 0 || c <= 0){
		return 0;
	}
	else if(c>a && c>b){
		return ( a*a + b*b == c*c );
	}
	else if(b>a && b>c){
		return ( a*a + c*c == b*b );
	}
	else if(a>b && a>c){
		return ( b*b + c*c == a*a );
	}
	else{
		return 0;
	}
}

int triangularNum(int order){
	int ret;
	ret = order * (order + 1) / 2;
	return ret;
}

int countDiv(int num){
	if(isPrime(num)){
		return 2;
	}
	else{
		int div = 1;
		int count = 0;
		while(div <= num/2){
			if(num % div == 0) count++;
			div++;
		}
		count++;
		return count;
	}
}

int isEven(int num){
	return (num % 2 == 0);
}

int isOdd(int num){
	return (num % 2 == 1);
}

int collatz(int start, int n){
	if(n == 1){
		return start;
	}
	else{
		if(isOdd(start)){
			int ret = collatz(3*start + 1, n - 1);
			return ret;
		}
		else{
			int ret = collatz(start/2, n - 1);
			return ret;
		}
	}
}

long int nextCollatz(long int num){
	if(num == 1){
		return 0;
	}
	else if(isOdd(num)){
		return 3*num + 1;
	}
	else{
		return num/2;
	}
}

void printCollatz(long int start, int n){
	if(n == 1){
		printf("%ld", start);
	}
	else if(n != 0){
		printf("%ld->", start);
		printCollatz(nextCollatz(start), n-1);
	}
	else{
		if(start != 1){
			printf("%ld->", start);
			printCollatz(nextCollatz(start), 0);
		}
		else{
			printf("1");
		}
	}
}

int countCollatz(int num){
	int count = 1;
	while(num != 1){
		num = nextCollatz(num);
		count++;
	}
	return count;
}


long int factorial(long int num){
	if(num == 1 || num == 0){
		return 1;
	}
	else{
		num = num * factorial(num - 1);
		return num;
	}
}

long int perm(long int num){
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

int filterPrime(int *arr, int *newArr, int count){
	int i = 0, j = 0;
	while(i < count){
		if(isPrime(*(arr+j))){
			*(newArr+i) = *(arr+j);
			i++;
		}
		j++;
	}
	return count;
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

void warp(long int num, int *arr){
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
