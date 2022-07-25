---
title: Hello Example
className: codeflare--welcome-guidebook
layout:
    2: 
        position: default
        maximized: true
        inverseColors: true
---

<!-- <img alt="CodeFlare Icon" src="@kui-shell/client/icons/svg/codeflare.svg" width="80" height="80" /> -->

=== "List of Jobs"

    ```shell
    ---
    execute: now
    maximize: true
    outputOnly: true
    ---
    ray job list --address "$LOGDIR"
    ```

