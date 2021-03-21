Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz x12
>node -v
v14.15.1

moment.js@2.29.1
date-fns@2.19.0

Adding fixed amount of days
---------------------------------------------------------------
moment             912,892 op/s  ± 2.70%   (85 samples)   1.00x
moment cached    1,640,741 op/s  ± 0.43%   (96 samples)   1.80x
date-fns         3,252,296 op/s  ± 8.32%   (73 samples)   3.56x
ts-date          3,412,769 op/s  ± 8.90%   (73 samples)   3.74x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment           1,259,546 op/s  ± 0.69%   (95 samples)   1.00x
moment cached    2,447,900 op/s  ± 0.26%   (96 samples)   1.94x
date-fns         6,038,919 op/s  ± 0.28%   (95 samples)   4.79x
ts-date         12,992,522 op/s  ± 0.40%   (94 samples)  10.32x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             942,902 op/s  ± 1.15%   (92 samples)   1.00x
moment cached    1,388,865 op/s  ± 1.73%   (89 samples)   1.47x
date-fns           526,394 op/s  ± 4.58%   (78 samples)   0.56x
ts-date          3,344,869 op/s  ± 3.66%   (80 samples)   3.55x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             953,512 op/s  ± 1.05%   (90 samples)   1.00x
moment cached    1,387,353 op/s  ± 1.73%   (89 samples)   1.45x
date-fns         5,438,103 op/s  ± 0.40%   (94 samples)   5.70x
ts-date         49,061,577 op/s  ± 2.45%   (86 samples)  51.45x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             191,730 op/s  ± 1.31%   (90 samples)   1.00x
moment cached      210,846 op/s  ± 1.28%   (92 samples)   1.10x
date-fns           655,774 op/s  ± 1.70%   (88 samples)   3.42x
ts-date          5,700,110 op/s ± 10.18%   (39 samples)  29.73x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment             130,061 op/s  ± 0.61%   (96 samples)   1.00x
moment cached      144,273 op/s  ± 0.28%   (97 samples)   1.11x
date-fns           153,619 op/s  ± 0.42%   (94 samples)   1.18x
ts-date          1,343,848 op/s  ± 0.41%   (93 samples)  10.33x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             393,348 op/s  ± 0.74%   (89 samples)   1.00x
moment cached      537,321 op/s  ± 0.63%   (87 samples)   1.37x
date-fns         1,258,711 op/s  ± 1.88%   (91 samples)   3.20x
ts-date          4,552,134 op/s  ± 4.63%   (80 samples)  11.57x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              94,606 op/s  ± 0.38%   (92 samples)   1.00x
date-fns           407,264 op/s  ± 1.14%   (91 samples)   4.30x
ts-date          1,253,459 op/s  ± 4.75%   (81 samples)  13.25x
Fastest is ts-date
---------------------------------------------------------------
```
