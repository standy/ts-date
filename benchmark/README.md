Performance test compared to `momentjs` and `date-fns`
 
```
>node -v
v8.11.1
```

```
Adding fixed amount of days
---------------------------------------------------------------
moment             403,713 op/s  ± 2.01%   (86 samples)   1.00x
moment cached      723,429 op/s  ± 0.91%   (92 samples)   1.79x
date-fns         3,361,571 op/s  ± 2.25%   (89 samples)   8.33x
ts-date          3,364,003 op/s  ± 2.33%   (86 samples)   8.33x
Fastest is date-fns,ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment             766,279 op/s  ± 1.34%   (89 samples)   1.00x
moment cached    1,736,484 op/s  ± 0.27%   (94 samples)   2.27x
date-fns         3,750,536 op/s  ± 0.58%   (93 samples)   4.89x
ts-date          6,476,659 op/s  ± 0.47%   (93 samples)   8.45x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             629,668 op/s  ± 0.86%   (90 samples)   1.00x
moment cached    1,118,435 op/s  ± 1.09%   (92 samples)   1.78x
date-fns           686,129 op/s  ± 0.64%   (91 samples)   1.09x
ts-date          2,378,361 op/s  ± 0.64%   (92 samples)   3.78x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             656,953 op/s  ± 0.51%   (91 samples)   1.00x
moment cached    1,125,201 op/s  ± 1.17%   (88 samples)   1.71x
date-fns         3,650,063 op/s  ± 0.33%   (93 samples)   5.56x
ts-date         50,489,703 op/s  ± 0.51%   (90 samples)  76.85x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment              93,108 op/s  ± 1.08%   (82 samples)   1.00x
moment cached      106,790 op/s  ± 1.18%   (92 samples)   1.15x
date-fns           794,059 op/s  ± 0.49%   (89 samples)   8.53x
ts-date          7,509,694 op/s  ± 0.63%   (91 samples)  80.66x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment              60,374 op/s  ± 0.35%   (88 samples)   1.00x
moment cached       65,728 op/s  ± 1.02%   (90 samples)   1.09x
date-fns           132,244 op/s  ± 0.81%   (93 samples)   2.19x
ts-date            896,945 op/s  ± 0.90%   (87 samples)  14.86x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             191,197 op/s  ± 0.36%   (92 samples)   1.00x
moment cached      271,260 op/s  ± 1.03%   (91 samples)   1.42x
date-fns           184,121 op/s  ± 0.35%   (95 samples)   0.96x
ts-date            722,069 op/s  ± 0.30%   (90 samples)   3.78x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              45,104 op/s  ± 1.25%   (94 samples)   1.00x
date-fns           430,012 op/s  ± 0.36%   (92 samples)   9.53x
ts-date            977,591 op/s  ± 0.70%   (90 samples)  21.67x
Fastest is ts-date
---------------------------------------------------------------
```
