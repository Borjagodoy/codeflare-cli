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

import { Arguments, Registrar } from "@kui-shell/core"

async function jobDetailInfo(args: Arguments) {
  const address = args.parsedOptions["address"]
  const jobId: string = args.parsedOptions["jobId"]
  const response = await fetch(`${address}/api/jobs/${encodeURI(jobId)}`)

  const data = await response.json()
  console.log(data)
  const React = await import("react")
  const JobInfo = await import("../components/jobInfo")
  return {
    react: React.createElement(JobInfo.default, { job: data, jobId }),
  }
}
export default function registerDescriptionCommands(registrar: Registrar) {
  registrar.listen("/codeflare/jobDetailInfo", jobDetailInfo, { needsUI: true })
}
