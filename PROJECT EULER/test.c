#include <stdio.h>
#include "supplementary.h"

int main(){
	char ch;
	char huhu[100];
	FILE *ptr = fopen("p022_names.txt", "r");
	while(fscanf(ptr, "%*c%[^\"]s", huhu)!=EOF){
		printf("%s\n", huhu);
		fscanf(ptr,"%*c%c",&ch);
	}
}