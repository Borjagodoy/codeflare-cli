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
const onClick = (address: string, item: string, args: Arguments) => {
  args.REPL.qexec(`tab new --cmdline "codeflare jobDetail --address ${address} --jobId ${item}"`)
}
async function rayJobList(args: Arguments) {
  const address = args.parsedOptions["address"]
  process.env.LOGDIR = address
  const response = await fetch(`${address}/api/jobs/`)
  const data = await response.json()
  const jobsKeys = Object.keys(data)

  return {
    header: { name: "JobId", attributes: [{ value: "Status" }] },
    body: jobsKeys.map((item) => ({
      name: item,
      onclick: () => onClick(address, item, args),
      attributes: [{ value: data[item].status }],
    })),
  }
}
export default function registerDescriptionCommands(registrar: Registrar) {
  registrar.listen("/codeflare/jobsList", rayJobList, { needsUI: true })
}
