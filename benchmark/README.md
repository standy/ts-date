Performance test compared to `momentjs` and `date-fns`
 
```
>node -v
v8.1.4
```

```
Adding fixed amount of days
-------------------------------------------------------
moment             115,330 op/s  ± 1.80%   (80 samples)
moment cached      280,008 op/s  ± 0.34%   (84 samples)
date-fns         1,501,110 op/s  ± 2.07%   (82 samples)
ts-date          1,623,747 op/s  ± 1.07%   (82 samples)
Fastest is ts-date
-------------------------------------------------------
Adding fixed amount of hours
-------------------------------------------------------
moment             162,703 op/s  ± 1.47%   (85 samples)
moment cached      652,581 op/s  ± 0.56%   (85 samples)
date-fns         1,598,355 op/s  ± 1.36%   (86 samples)
ts-date          3,117,205 op/s  ± 1.58%   (81 samples)
Fastest is ts-date
-------------------------------------------------------
Difference in days between two dates
-------------------------------------------------------
moment             138,498 op/s  ± 1.59%   (85 samples)
moment cached      236,089 op/s  ± 0.43%   (82 samples)
date-fns           235,738 op/s  ± 1.32%   (85 samples)
ts-date            819,335 op/s  ± 0.26%   (80 samples)
Fastest is ts-date
-------------------------------------------------------
Difference in hours between two dates
-------------------------------------------------------
moment             131,006 op/s  ± 1.63%   (80 samples)
moment cached      228,234 op/s  ± 0.32%   (81 samples)
date-fns         1,098,729 op/s  ± 1.31%   (84 samples)
ts-date          8,031,313 op/s  ± 0.34%   (84 samples)
Fastest is ts-date
-------------------------------------------------------
Difference in years between two dates
-------------------------------------------------------
moment              29,565 op/s  ± 1.29%   (84 samples)
moment cached       32,898 op/s  ± 0.40%   (82 samples)
date-fns           283,048 op/s  ± 1.37%   (83 samples)
ts-date          1,652,798 op/s  ± 0.14%   (81 samples)
Fastest is ts-date
-------------------------------------------------------
Format by custom pattern "dddd, MMMM Do YYYY, [escaped], h:mm:ss a"
-------------------------------------------------------
moment              21,277 op/s  ± 1.54%   (82 samples)
moment cached       25,851 op/s  ± 0.44%   (80 samples)
date-fns            38,003 op/s  ± 1.19%   (85 samples)
ts-date            495,445 op/s  ± 0.36%   (83 samples)
Fastest is ts-date
-------------------------------------------------------
Format as ISO 8601 string
-------------------------------------------------------
moment              47,513 op/s  ± 1.69%   (83 samples)
moment cached       71,812 op/s  ± 1.37%   (82 samples)
date-fns            49,467 op/s  ± 0.41%   (85 samples)
ts-date            317,591 op/s  ± 1.03%   (82 samples)
Fastest is ts-date
-------------------------------------------------------
Parse from ISO 8601 string
-------------------------------------------------------
moment              14,416 op/s  ± 0.59%   (82 samples)
date-fns           179,599 op/s  ± 1.95%   (80 samples)
ts-date            465,495 op/s  ± 0.65%   (82 samples)
Fastest is ts-date
-------------------------------------------------------
```
