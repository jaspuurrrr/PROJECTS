#include <stdio.h>
#include <stdlib.h>

typedef struct node{
    int digit;
    struct node *next;
}dgt;

int countdgt(dgt *num); //counts the digits
dgt* add(dgt* dh1, dgt* dh2); //adds two numbers (list)

int main()
{
    dgt *num1 = (dgt*) malloc(sizeof(dgt)), *num2 = (dgt*) malloc(sizeof(dgt));

    num1->digit = 1;
    num1->next = NULL;

    //digit holders for the two numbers
    dgt *dh1 = (dgt*) malloc(sizeof(dgt)), *dh2 = (dgt*) malloc(sizeof(dgt));

    for(int i = 0; i<1000; i++){
    	dh1 = num1;
    	num2 = add(dh1, dh1);
    	free(num1);
    	num1 = num2;
    }

    dh2 = num1;
    int sum = 0;
    while(dh2->next != NULL){
    	sum = sum + dh2->digit;
    	dh2 = dh2->next;
    }
    sum = sum + dh2->digit;
    printf("\n%d", sum);
    return 0;
}

int countdgt(dgt *num){
    int size = 1;
    if(num->next != NULL){
        int x = countdgt(num->next);
        size = size*(num->digit != 0 || x != 0) + x;
    }
    else{
        if(num->digit == 0){
            size = 0;
        }
    }
    return size;
}

dgt* add(dgt* dh1, dgt* dh2){
    dgt *sum = (dgt*) malloc(sizeof(dgt)), *sh;
    sh = sum;
    sh->digit = 0;
    int size = (countdgt(dh1)>=countdgt(dh2))*countdgt(dh1) + (countdgt(dh1)<countdgt(dh2))*countdgt(dh2);
    int counter = 0;
    while(counter < size){
        sh->next = (dgt*) malloc(sizeof(dgt));
        sh->next->digit = (sh->digit + dh1->digit + dh2->digit > 9);
        sh->digit = (sh->digit + dh1->digit + dh2->digit) % 10;
        if(dh1->next != NULL){
            dh1 = dh1->next;
        }
        else{
            dh1->next = (dgt*) malloc(sizeof(dgt));
            dh1->next->digit = 0;
            dh1->next->next = NULL;
            dh1 = dh1->next;
        }
        if(dh2->next != NULL){
            dh2 = dh2->next;
        }
        else{
            dh2->next = (dgt*) malloc(sizeof(dgt));
            dh2->next->digit = 0;
            dh2->next->next = NULL;
            dh2 = dh2->next;
        }
        counter++;
        sh = sh->next;
    }
    return sum;
}