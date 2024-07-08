#include <stdio.h>
#include "supplementary.h"

int main(){
	char ch;
	char huhu[20];
	FILE *ptr;

	
	ptr = fopen("/Users/jaspuurrrr/PROJECT EULER/list.txt", "r");

	if(ptr == NULL){
		printf("No such file");
		return 0;
	}

	while(fscanf(ptr, "%c", huhu)>=0){
		printf("%s\n", huhu);
		fscanf(ptr,"%*c%c",&ch);
	}

	/*while(fscanf(ptr, "%*c%[^\"]s", huhu)>=0){
		printf("%s\n", huhu);
		fscanf(ptr,"%*c%c",&ch);
	}*/
	return 0;
}