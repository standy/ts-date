Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i5-3570K CPU @ 3.40GHz x4
>node -v
v10.15.3

moment.js 2.24.0
date-fns 1.30.1

Adding fixed amount of days
---------------------------------------------------------------
moment             370,563 op/s  ± 2.40%   (83 samples)   1.00x
moment cached      801,759 op/s  ± 1.50%   (86 samples)   2.16x
date-fns         1,646,231 op/s  ± 8.42%   (63 samples)   4.44x
ts-date          1,704,877 op/s  ± 8.69%   (60 samples)   4.60x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment             616,321 op/s  ± 0.46%   (89 samples)   1.00x
moment cached    1,336,985 op/s  ± 1.16%   (85 samples)   2.17x
date-fns         3,299,174 op/s  ± 0.80%   (91 samples)   5.35x
ts-date          7,040,790 op/s  ± 0.26%   (91 samples)  11.42x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             525,399 op/s  ± 1.54%   (84 samples)   1.00x
moment cached      918,264 op/s  ± 0.42%   (93 samples)   1.75x
date-fns           495,795 op/s  ± 1.02%   (90 samples)   0.94x
ts-date          1,922,708 op/s  ± 0.29%   (92 samples)   3.66x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             432,573 op/s  ± 1.87%   (83 samples)   1.00x
moment cached      735,122 op/s  ± 1.36%   (83 samples)   1.70x
date-fns         3,447,449 op/s  ± 0.25%   (91 samples)   7.97x
ts-date         84,339,126 op/s  ± 0.30%   (92 samples) 194.97x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             100,464 op/s  ± 0.35%   (89 samples)   1.00x
moment cached      109,957 op/s  ± 1.09%   (90 samples)   1.09x
date-fns           557,351 op/s  ± 0.40%   (89 samples)   5.55x
ts-date          4,114,107 op/s  ± 0.94%   (92 samples)  40.95x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment              70,812 op/s  ± 1.67%   (85 samples)   1.00x
moment cached       87,352 op/s  ± 0.48%   (92 samples)   1.23x
date-fns           156,468 op/s  ± 1.29%   (89 samples)   2.21x
ts-date            696,789 op/s  ± 0.35%   (90 samples)   9.84x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             233,175 op/s  ± 1.33%   (91 samples)   1.00x
moment cached      381,792 op/s  ± 0.44%   (92 samples)   1.64x
date-fns           205,732 op/s  ± 0.40%   (90 samples)   0.88x
ts-date          4,492,499 op/s  ± 0.52%   (92 samples)  19.27x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              43,344 op/s  ± 0.42%   (89 samples)   1.00x
date-fns           226,715 op/s  ± 0.97%   (92 samples)   5.23x
ts-date            808,096 op/s  ± 0.37%   (90 samples)  18.64x
Fastest is ts-date
---------------------------------------------------------------
```
