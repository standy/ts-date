Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz x12
>node -v
v16.19.0

moment.js@2.29.4
date-fns@2.29.3

Adding fixed amount of days
---------------------------------------------------------------
moment             870,685 op/s  ± 4.31%   (79 samples)   1.00x
moment cached    1,569,374 op/s  ± 2.00%   (85 samples)   1.80x
dayjs              393,550 op/s  ± 4.03%   (77 samples)   0.45x
date-fns         2,982,718 op/s  ± 8.32%   (67 samples)   3.43x
ts-date          3,202,196 op/s  ± 9.18%   (67 samples)   3.68x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment           1,335,744 op/s  ± 1.08%   (91 samples)   1.00x
moment cached    2,364,756 op/s  ± 1.44%   (88 samples)   1.77x
dayjs            1,046,463 op/s  ± 3.16%   (84 samples)   0.78x
date-fns         5,381,880 op/s  ± 1.21%   (91 samples)   4.03x
ts-date         11,672,889 op/s  ± 1.63%   (92 samples)   8.74x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             927,327 op/s  ± 1.64%   (83 samples)   1.00x
moment cached    1,375,893 op/s  ± 2.31%   (83 samples)   1.48x
dayjs               74,494 op/s  ± 3.18%   (81 samples)   0.08x
date-fns           529,217 op/s  ± 3.46%   (81 samples)   0.57x
ts-date          3,296,565 op/s  ± 3.18%   (83 samples)   3.55x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             992,242 op/s  ± 1.61%   (88 samples)   1.00x
moment cached    1,495,883 op/s  ± 2.12%   (85 samples)   1.51x
dayjs               75,676 op/s  ± 3.04%   (84 samples)   0.08x
date-fns         4,878,252 op/s  ± 1.59%   (86 samples)   4.92x
ts-date         79,072,042 op/s  ± 1.00%   (92 samples)  79.69x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             193,655 op/s  ± 1.93%   (85 samples)   1.00x
moment cached      212,704 op/s  ± 1.81%   (83 samples)   1.10x
dayjs               69,001 op/s  ± 4.15%   (79 samples)   0.36x
date-fns           648,102 op/s  ± 2.23%   (83 samples)   3.35x
ts-date          5,643,710 op/s  ± 5.71%   (68 samples)  29.14x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment             119,631 op/s  ± 3.75%   (83 samples)   1.00x
moment cached      137,322 op/s  ± 1.63%   (89 samples)   1.15x
dayjs              136,577 op/s  ± 1.77%   (85 samples)   1.14x
date-fns           147,283 op/s  ± 1.31%   (90 samples)   1.23x
ts-date          1,092,954 op/s  ± 1.61%   (89 samples)   9.14x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             384,121 op/s  ± 1.65%   (83 samples)   1.00x
moment cached      483,041 op/s  ± 3.00%   (83 samples)   1.26x
dayjs            1,031,112 op/s  ± 2.61%   (78 samples)   2.68x
date-fns         1,270,626 op/s  ± 2.97%   (80 samples)   3.31x
ts-date          2,823,202 op/s ± 17.43%   (62 samples)   7.35x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              88,106 op/s  ± 6.25%   (85 samples)   1.00x
date-fns           331,619 op/s  ± 1.81%   (83 samples)   3.76x
dayjs              885,646 op/s  ± 3.54%   (79 samples)  10.05x
ts-date          1,136,305 op/s  ± 4.73%   (80 samples)  12.90x
Fastest is ts-date
---------------------------------------------------------------
```
