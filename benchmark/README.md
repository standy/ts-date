Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz x12
>node -v
v14.15.1

moment.js@2.29.1
date-fns@2.19.0

Adding fixed amount of days
---------------------------------------------------------------
moment             955,523 op/s  ± 2.47%   (87 samples)   1.00x
moment cached    1,626,951 op/s  ± 0.66%   (95 samples)   1.70x
date-fns         3,100,391 op/s  ± 8.76%   (71 samples)   3.24x
ts-date          3,215,167 op/s ± 10.02%   (68 samples)   3.36x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment           1,268,558 op/s  ± 0.72%   (94 samples)   1.00x
moment cached    2,436,201 op/s  ± 0.25%   (97 samples)   1.92x
date-fns         5,921,286 op/s  ± 0.77%   (97 samples)   4.67x
ts-date         12,972,216 op/s  ± 0.70%   (97 samples)  10.23x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             998,102 op/s  ± 1.08%   (92 samples)   1.00x
moment cached    1,443,308 op/s  ± 1.76%   (84 samples)   1.45x
date-fns           519,254 op/s  ± 4.90%   (76 samples)   0.52x
ts-date          3,387,820 op/s  ± 3.76%   (78 samples)   3.39x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             999,999 op/s  ± 1.15%   (91 samples)   1.00x
moment cached    1,440,792 op/s  ± 1.82%   (89 samples)   1.44x
date-fns         5,613,188 op/s  ± 0.60%   (94 samples)   5.61x
ts-date         50,702,192 op/s  ± 1.90%   (87 samples)  50.70x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             191,714 op/s  ± 1.41%   (89 samples)   1.00x
moment cached      207,603 op/s  ± 1.20%   (87 samples)   1.08x
date-fns           660,981 op/s  ± 1.71%   (91 samples)   3.45x
ts-date          5,216,812 op/s  ± 7.44%   (62 samples)  27.21x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment             131,072 op/s  ± 0.29%   (94 samples)   1.00x
moment cached      139,271 op/s  ± 0.35%   (97 samples)   1.06x
date-fns           154,033 op/s  ± 0.48%   (92 samples)   1.18x
ts-date          1,327,427 op/s  ± 0.39%   (96 samples)  10.13x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             403,835 op/s  ± 1.05%   (85 samples)   1.00x
moment cached      527,522 op/s  ± 0.54%   (89 samples)   1.31x
date-fns              0.00 op/s  ± 0.00%    (0 samples)   0.00x
ts-date          4,633,689 op/s  ± 3.95%   (79 samples)  11.47x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              99,486 op/s  ± 0.42%   (93 samples)   1.00x
date-fns           400,909 op/s  ± 1.03%   (92 samples)   4.03x
ts-date          1,281,795 op/s  ± 5.50%   (77 samples)  12.88x
Fastest is ts-date
---------------------------------------------------------------
```
