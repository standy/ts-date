Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i5-8250U CPU @ 1.60GHz x8
>node -v
v13.12.0

moment.js@2.25.3
date-fns@2.13.0

Adding fixed amount of days
---------------------------------------------------------------
moment             708,409 op/s  ± 2.61%   (88 samples)   1.00x
moment cached    1,257,014 op/s  ± 0.34%   (92 samples)   1.77x
date-fns         2,053,457 op/s  ± 7.77%   (69 samples)   2.90x
ts-date          2,262,575 op/s  ± 8.43%   (70 samples)   3.19x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment             915,369 op/s  ± 0.26%   (96 samples)   1.00x
moment cached    1,821,309 op/s  ± 0.26%   (95 samples)   1.99x
date-fns         3,950,846 op/s  ± 0.32%   (96 samples)   4.32x
ts-date          8,292,591 op/s  ± 0.15%   (97 samples)   9.06x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             747,606 op/s  ± 1.10%   (90 samples)   1.00x
moment cached    1,078,447 op/s  ± 5.43%   (86 samples)   1.44x
date-fns           340,563 op/s  ± 4.57%   (69 samples)   0.46x
ts-date          1,779,987 op/s  ± 2.67%   (82 samples)   2.38x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             740,069 op/s  ± 2.58%   (91 samples)   1.00x
moment cached    1,122,335 op/s  ± 1.63%   (91 samples)   1.52x
date-fns         3,548,459 op/s  ± 0.38%   (92 samples)   4.79x
ts-date        107,465,480 op/s  ± 0.24%   (89 samples) 145.21x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             161,847 op/s  ± 1.44%   (85 samples)   1.00x
moment cached      178,713 op/s  ± 1.39%   (91 samples)   1.10x
date-fns           467,671 op/s  ± 1.44%   (91 samples)   2.89x
ts-date          4,842,537 op/s ± 12.51%   (29 samples)  29.92x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment             112,305 op/s  ± 0.40%   (95 samples)   1.00x
moment cached      124,971 op/s  ± 0.20%   (92 samples)   1.11x
date-fns           127,309 op/s  ± 0.49%   (93 samples)   1.13x
ts-date          1,059,869 op/s  ± 0.60%   (92 samples)   9.44x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             389,081 op/s  ± 0.68%   (95 samples)   1.00x
moment cached      415,708 op/s  ± 0.56%   (80 samples)   1.07x
date-fns              0.00 op/s  ± 0.00%    (0 samples)   0.00x
ts-date          3,981,460 op/s  ± 5.33%   (77 samples)  10.23x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              88,847 op/s  ± 0.23%   (94 samples)   1.00x
date-fns           320,444 op/s  ± 0.99%   (92 samples)   3.61x
ts-date            915,707 op/s  ± 3.99%   (83 samples)  10.31x
Fastest is ts-date
---------------------------------------------------------------
```
