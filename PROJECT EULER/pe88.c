#include <stdio.h>

int ps(int prod, int fact, int num, int size){
	int success = 0;
	if(size != 1){
		int i = 0;
		while(!success){
			int nprod = fact * prod;
			success = ps(nprod, i+1, num, size - 1);
			if(fact + 1 > i + 2){
				nprod = nprod / fact;
				fact--;
				i++;
			}
			else if(fact + 1 > i + 1){
				if(i == 0){
					break;
				}
				else{
					nprod = nprod / fact;
					fact--;
					i++;
				}
			}
			else{
				break;
			}
		}
	}
	else{
		if(prod * fact == num){
			return 1;
		}
		else{
			return 0;
		}
	}
	return success;
}

int main(){
	//printf("%d",ps(1,3,4,2));
	for(int size=2; size<100; size++){
		int n = size;
		int success = 0;
		while(!success){
			success = ps(1, n+1-size, n, size);
			if(success){
				break;
			}
			else{
				n++;
			}
		}
		printf("%d: %d\n", size, n);
	}
}