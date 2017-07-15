Performance test compared to `momentjs` and `date-fns`
 
```
>node -v
v8.1.4
```

```
Adding fixed amount of days
-------------------------------------------------------
moment             114,945 op/s  ± 1.37%   (83 samples)
moment cached      270,926 op/s  ± 0.65%   (81 samples)
date-fns         1,288,915 op/s  ± 0.86%   (83 samples)
ts-date          1,358,724 op/s  ± 0.60%   (82 samples)
Fastest is ts-date
-------------------------------------------------------
Difference in days between two dates
-------------------------------------------------------
moment             127,569 op/s  ± 1.77%   (82 samples)
moment cached      211,526 op/s  ± 0.89%   (78 samples)
date-fns           231,451 op/s  ± 1.32%   (80 samples)
ts-date          9,676,062 op/s  ± 0.47%   (85 samples)
Fastest is ts-date
-------------------------------------------------------
Format by custom pattern "Do MMMM YYYY, dddd"
-------------------------------------------------------
moment             106,770 op/s  ± 1.79%   (82 samples)
moment cached      272,730 op/s  ± 0.48%   (84 samples)
date-fns            91,567 op/s  ± 1.19%   (83 samples)
ts-date            974,110 op/s  ± 0.71%   (85 samples)
Fastest is ts-date
-------------------------------------------------------
Format as ISO 8601 string
-------------------------------------------------------
moment              49,043 op/s  ± 1.97%   (81 samples)
moment cached       73,429 op/s  ± 1.46%   (80 samples)
date-fns            49,222 op/s  ± 0.53%   (85 samples)
ts-date            300,343 op/s  ± 0.96%   (83 samples)
Fastest is ts-date
-------------------------------------------------------
Parse from ISO 8601 string
-------------------------------------------------------
moment              14,433 op/s  ± 0.75%   (80 samples)
date-fns           183,077 op/s  ± 1.65%   (83 samples)
ts-date            450,084 op/s  ± 0.55%   (83 samples)
Fastest is ts-date
-------------------------------------------------------
```
