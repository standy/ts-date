Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i5-3570K CPU @ 3.40GHz x4
>node -v
v10.15.3

moment.js 2.24.0
date-fns 1.30.1

Adding fixed amount of days
---------------------------------------------------------------
moment             379,260 op/s  ± 2.19%   (82 samples)   1.00x
moment cached      834,917 op/s  ± 1.51%   (88 samples)   2.20x
date-fns         1,872,121 op/s  ± 7.82%   (71 samples)   4.94x
ts-date          2,017,820 op/s  ± 8.53%   (72 samples)   5.32x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment             647,599 op/s  ± 0.31%   (88 samples)   1.00x
moment cached    1,420,766 op/s  ± 1.28%   (91 samples)   2.19x
date-fns         3,278,631 op/s  ± 0.28%   (92 samples)   5.06x
ts-date          6,829,998 op/s  ± 1.59%   (90 samples)  10.55x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             484,986 op/s  ± 0.89%   (81 samples)   1.00x
moment cached      768,600 op/s  ± 1.36%   (82 samples)   1.58x
date-fns           391,429 op/s  ± 3.90%   (74 samples)   0.81x
ts-date          1,500,372 op/s  ± 2.62%   (80 samples)   3.09x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             501,757 op/s  ± 2.14%   (87 samples)   1.00x
moment cached      826,022 op/s  ± 1.88%   (82 samples)   1.65x
date-fns         3,369,194 op/s  ± 1.17%   (89 samples)   6.71x
ts-date         84,224,230 op/s  ± 0.30%   (89 samples) 167.86x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             102,286 op/s  ± 0.96%   (89 samples)   1.00x
moment cached      114,314 op/s  ± 0.96%   (89 samples)   1.12x
date-fns           532,387 op/s  ± 2.72%   (81 samples)   5.20x
ts-date          3,543,726 op/s  ± 6.60%   (68 samples)  34.65x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment              71,092 op/s  ± 0.40%   (92 samples)   1.00x
moment cached       82,780 op/s  ± 1.52%   (91 samples)   1.16x
date-fns           157,489 op/s  ± 0.52%   (89 samples)   2.22x
ts-date            717,712 op/s  ± 1.42%   (85 samples)  10.10x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             255,814 op/s  ± 0.67%   (87 samples)   1.00x
moment cached      348,802 op/s  ± 2.01%   (80 samples)   1.36x
date-fns           200,390 op/s  ± 0.82%   (91 samples)   0.78x
ts-date          3,301,511 op/s  ± 4.37%   (77 samples)  12.91x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              43,593 op/s  ± 0.73%   (86 samples)   1.00x
date-fns           203,264 op/s  ± 3.37%   (84 samples)   4.66x
ts-date            645,601 op/s  ± 3.93%   (81 samples)  14.81x
Fastest is ts-date
---------------------------------------------------------------
```
