---
title: Hello Example
className: codeflare--welcome-guidebook
layout:
    1:
        position: default
        maximized: true
        inverseColors: true
    2:
        position: default
        maximized: true
---

=== "Nodes"

    ```shell
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    codeflare nodeSummary --address "$LOGDIR"
    ```
---
=== "List of Jobs"

    ```shell
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    codeflare jobsList --address "$LOGDIR"
    ```