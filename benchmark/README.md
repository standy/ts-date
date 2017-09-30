Performance test compared to `momentjs` and `date-fns`
 
```
>node -v
v8.6.0
```

```
Adding fixed amount of days
---------------------------------------------------------------
moment             433,654 op/s  ± 1.85%   (89 samples)   1.00x
moment cached      796,661 op/s  ± 0.28%   (92 samples)   1.84x
date-fns         3,269,186 op/s  ± 0.50%   (91 samples)   7.54x
ts-date          3,296,836 op/s  ± 0.14%   (93 samples)   7.60x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment             723,940 op/s  ± 1.62%   (90 samples)   1.00x
moment cached    1,612,912 op/s  ± 0.17%   (95 samples)   2.23x
date-fns         3,750,353 op/s  ± 0.63%   (91 samples)   5.18x
ts-date          6,714,164 op/s  ± 0.17%   (92 samples)   9.27x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             574,418 op/s  ± 1.79%   (90 samples)   1.00x
moment cached      954,747 op/s  ± 0.45%   (94 samples)   1.66x
date-fns           539,920 op/s  ± 0.61%   (94 samples)   0.94x
ts-date          1,833,738 op/s  ± 0.13%   (93 samples)   3.19x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             621,623 op/s  ± 1.74%   (93 samples)   1.00x
moment cached    1,054,091 op/s  ± 0.17%   (92 samples)   1.70x
date-fns         3,784,844 op/s  ± 0.55%   (93 samples)   6.09x
ts-date         53,773,982 op/s  ± 0.19%   (94 samples)  86.51x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment              75,112 op/s  ± 1.37%   (84 samples)   1.00x
moment cached       87,931 op/s  ± 0.24%   (92 samples)   1.17x
date-fns           685,156 op/s  ± 0.63%   (90 samples)   9.12x
ts-date          3,629,484 op/s  ± 0.24%   (93 samples)  48.32x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment              51,924 op/s  ± 0.91%   (92 samples)   1.00x
moment cached       60,266 op/s  ± 0.21%   (94 samples)   1.16x
date-fns           128,307 op/s  ± 1.05%   (89 samples)   2.47x
ts-date            864,078 op/s  ± 0.26%   (91 samples)  16.64x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             143,503 op/s  ± 0.88%   (92 samples)   1.00x
moment cached      191,923 op/s  ± 0.17%   (93 samples)   1.34x
date-fns           180,777 op/s  ± 0.89%   (92 samples)   1.26x
ts-date            724,224 op/s  ± 0.29%   (92 samples)   5.05x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              43,134 op/s  ± 0.90%   (90 samples)   1.00x
date-fns           418,242 op/s  ± 0.16%   (95 samples)   9.70x
ts-date          1,063,713 op/s  ± 0.76%   (92 samples)  24.66x
Fastest is ts-date
---------------------------------------------------------------
```
