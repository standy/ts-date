Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz x12
>node -v
v14.15.1

moment.js@2.25.3
date-fns@2.13.0

Adding fixed amount of days
---------------------------------------------------------------
moment             920,508 op/s  ± 2.68%   (82 samples)   1.00x
moment cached    1,652,590 op/s  ± 0.44%   (90 samples)   1.80x
date-fns         2,928,781 op/s  ± 8.93%   (68 samples)   3.18x
ts-date          3,256,484 op/s  ± 9.75%   (67 samples)   3.54x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment           1,280,752 op/s  ± 0.43%   (98 samples)   1.00x
moment cached    2,414,483 op/s  ± 0.33%   (96 samples)   1.89x
date-fns         5,985,117 op/s  ± 0.36%   (96 samples)   4.67x
ts-date         12,946,177 op/s  ± 0.36%   (92 samples)  10.11x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             919,437 op/s  ± 1.64%   (88 samples)   1.00x
moment cached    1,290,694 op/s  ± 2.10%   (83 samples)   1.40x
date-fns           552,775 op/s  ± 5.72%   (72 samples)   0.60x
ts-date          3,129,603 op/s  ± 4.99%   (77 samples)   3.40x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             951,288 op/s  ± 1.31%   (88 samples)   1.00x
moment cached    1,455,175 op/s  ± 1.52%   (92 samples)   1.53x
date-fns         5,489,405 op/s  ± 1.19%   (91 samples)   5.77x
ts-date         76,588,922 op/s  ± 0.48%   (96 samples)  80.51x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             180,136 op/s  ± 1.59%   (87 samples)   1.00x
moment cached      196,055 op/s  ± 1.76%   (89 samples)   1.09x
date-fns           671,784 op/s  ± 1.40%   (89 samples)   3.73x
ts-date          5,365,918 op/s  ± 9.35%   (33 samples)  29.79x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment             124,859 op/s  ± 0.88%   (91 samples)   1.00x
moment cached      139,676 op/s  ± 0.60%   (94 samples)   1.12x
date-fns           147,931 op/s  ± 1.12%   (90 samples)   1.18x
ts-date          1,334,660 op/s  ± 0.57%   (94 samples)  10.69x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             397,272 op/s  ± 0.98%   (87 samples)   1.00x
moment cached      516,797 op/s  ± 0.79%   (93 samples)   1.30x
date-fns              0.00 op/s  ± 0.00%    (0 samples)   0.00x
ts-date          4,727,834 op/s  ± 4.46%   (75 samples)  11.90x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment              98,392 op/s  ± 0.51%   (91 samples)   1.00x
date-fns           427,014 op/s  ± 1.30%   (92 samples)   4.34x
ts-date          1,303,502 op/s  ± 4.90%   (82 samples)  13.25x
Fastest is ts-date
---------------------------------------------------------------
```
