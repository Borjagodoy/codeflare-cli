/*
 * Copyright 2022 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from "react"

type Props = {
  address: string
  jobId: string
}
const JobLogs = (props: Props) => {
  const { address, jobId } = props

  const [data, setData] = useState([""])
  const wsAddress = address.replace("http", "ws")
  console.log(wsAddress)
  // Crea una nueva conexión.
  const socket = new WebSocket(`${wsAddress}/api/jobs/${jobId}/logs/tail`)
  // Escucha por mensajes
  socket.addEventListener("close", async () => {
    console.log("ws closed")
  })
  socket.addEventListener("open", async () => {
    console.group("ws open")
  })
  socket.addEventListener("message", async (event) => {
    const response = await fetch(`${address}/api/jobs/${jobId}`)
    const jobData = await response.json()
    if (jobData.status === "RUNNING" || jobData.status === "PENDING") {
      setData((current) => [...current, event.data])
    } else {
      console.log("address", address)
      const response = await fetch(`${address}/api/jobs/${jobId}/logs`)
      const jobLogs = await response.json()
      setData(jobLogs.logs)
      socket.close()
    }
    document.querySelector("#bootom")?.scrollIntoView()
  })

  return (
    <pre>
      {data}
      <div id="bootom"></div>
    </pre>
  )
}

export default JobLogs
