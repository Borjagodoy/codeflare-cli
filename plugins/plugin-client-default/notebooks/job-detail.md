---
title: Job Detail
layout:
    1:
        position: default
        maximized: true
        inverseColors: true
    2:
        position: default
        maximized: true
---

=== "Job detail"

    ```shell
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    codeflare jobDetailInfo --address "$LOGDIR" --jobId "$JOBID"
    ```
---
=== "List of Jobs"

    ```shell
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    codeflare jobLog --address "$LOGDIR" --jobId "$JOBID"
    ```