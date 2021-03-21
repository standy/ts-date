Performance test compared to `momentjs` and `date-fns`
 
```
Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz x12
>node -v
v14.15.1

moment.js@2.29.1
date-fns@2.19.0

Adding fixed amount of days
---------------------------------------------------------------
moment             940,132 op/s  ± 2.59%   (86 samples)   1.00x
moment cached    1,619,020 op/s  ± 0.60%   (93 samples)   1.72x
dayjs              534,172 op/s  ± 5.81%   (78 samples)   0.57x
date-fns         3,236,383 op/s  ± 8.33%   (73 samples)   3.44x
ts-date          3,419,192 op/s  ± 9.92%   (70 samples)   3.64x
Fastest is ts-date
---------------------------------------------------------------
Adding fixed amount of hours
---------------------------------------------------------------
moment           1,235,898 op/s  ± 0.35%   (96 samples)   1.00x
moment cached    2,369,046 op/s  ± 0.62%   (93 samples)   1.92x
dayjs            1,290,607 op/s  ± 4.12%   (85 samples)   1.04x
date-fns         6,017,870 op/s  ± 0.37%   (92 samples)   4.87x
ts-date         12,932,091 op/s  ± 0.35%   (95 samples)  10.46x
Fastest is ts-date
---------------------------------------------------------------
Difference in days between two dates
---------------------------------------------------------------
moment             968,175 op/s  ± 1.24%   (90 samples)   1.00x
moment cached    1,452,383 op/s  ± 1.67%   (88 samples)   1.50x
dayjs               87,029 op/s  ± 3.72%   (82 samples)   0.09x
date-fns           531,424 op/s  ± 4.17%   (77 samples)   0.55x
ts-date          3,371,047 op/s  ± 3.56%   (79 samples)   3.48x
Fastest is ts-date
---------------------------------------------------------------
Difference in hours between two dates
---------------------------------------------------------------
moment             977,264 op/s  ± 1.22%   (88 samples)   1.00x
moment cached    1,423,577 op/s  ± 1.62%   (89 samples)   1.46x
dayjs               86,449 op/s  ± 3.50%   (82 samples)   0.09x
date-fns         5,587,465 op/s  ± 0.61%   (95 samples)   5.72x
ts-date         47,624,579 op/s  ± 3.84%   (82 samples)  48.73x
Fastest is ts-date
---------------------------------------------------------------
Difference in years between two dates
---------------------------------------------------------------
moment             188,563 op/s  ± 1.32%   (90 samples)   1.00x
moment cached      208,304 op/s  ± 1.33%   (85 samples)   1.10x
dayjs               84,674 op/s  ± 3.57%   (81 samples)   0.45x
date-fns           662,330 op/s  ± 1.59%   (90 samples)   3.51x
ts-date          5,482,503 op/s  ± 9.04%   (41 samples)  29.08x
Fastest is ts-date
---------------------------------------------------------------
Format by pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
---------------------------------------------------------------
moment             131,385 op/s  ± 0.29%   (95 samples)   1.00x
moment cached      145,237 op/s  ± 0.37%   (97 samples)   1.11x
dayjs              172,749 op/s  ± 1.15%   (87 samples)   1.31x
date-fns           149,705 op/s  ± 0.65%   (94 samples)   1.14x
ts-date          1,331,127 op/s  ± 0.52%   (92 samples)  10.13x
Fastest is ts-date
---------------------------------------------------------------
Format as ISO 8601 string
---------------------------------------------------------------
moment             397,842 op/s  ± 0.86%   (85 samples)   1.00x
moment cached      512,729 op/s  ± 1.03%   (88 samples)   1.29x
dayjs            1,297,093 op/s  ± 2.15%   (89 samples)   3.26x
date-fns         1,227,124 op/s  ± 1.94%   (90 samples)   3.08x
ts-date          4,597,276 op/s  ± 3.99%   (79 samples)  11.56x
Fastest is ts-date
---------------------------------------------------------------
Parse from ISO 8601 string
---------------------------------------------------------------
moment             101,087 op/s  ± 0.37%   (96 samples)   1.00x
date-fns           395,646 op/s  ± 1.11%   (92 samples)   3.91x
dayjs            1,168,389 op/s  ± 3.32%   (85 samples)  11.56x
ts-date          1,261,249 op/s  ± 5.08%   (77 samples)  12.48x
Fastest is ts-date
---------------------------------------------------------------
```
