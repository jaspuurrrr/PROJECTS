#include <stdio.h>
#include "supplementary.h"

int main()
{
    int limit = 100000000, sum=0, ff, lf, psum, pcount=0, count=0;
    for(int j=2; sum+j<limit; j = nextPrime(j)){
        count++;
        sum=sum+j;
        if(isPrime(sum) && count>pcount){
            psum = sum;
            pcount = count;
            ff = 2;
            lf = j;
        }
    }

    int tff = ff, tlf = lf, lfh, sumh;
    count = pcount;
    sum = psum;
    
    while(sum - tff + nextPrime(tlf)<limit){
        count = pcount;
        sum = sum - tff + nextPrime(tlf);
        tff = nextPrime(tff);
        tlf = nextPrime(tlf);
        lfh = tlf;
        sumh = sum;
        while(sumh+nextPrime(lfh)<limit){
            lfh = nextPrime(lfh);
            sumh = sumh + lfh;
            count++;
            if(isPrime(sumh)&&count>pcount){
                psum = sumh;
                sum = sumh;
                pcount = count;
                ff = tff;
                lf = lfh;
                tlf = lf;
            }
        }
    }
    
    printf("\n%d", psum);
    return 0;
}
