#include <stdio.h>

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

int nextPrime(int num){
    if(num == 2){
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


int nthPrime(int n){
    if(n == 1){
        return 2;
    }
    return nextPrime(nthPrime(n-1));
}

int main(){
    printf("%d\n", nthPrime(10001));
}