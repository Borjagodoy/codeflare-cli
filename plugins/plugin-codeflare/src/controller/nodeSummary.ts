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

async function rayNodeSummary(args: Arguments) {
  const address = args.parsedOptions["address"]
  process.env.LOGDIR = address
  const response = await fetch(`${address}/nodes?view=summary`)

  const data = await response.json()
  console.log(data)
  const summary: [] = data.data?.summary
  console.log(summary)
  const React = await import("react")
  const Summary = await import("../components/summary")

  return {
    react: React.createElement(Summary.default, { summary }),
  }
}
export default function registerDescriptionCommands(registrar: Registrar) {
  registrar.listen("/codeflare/nodeSummary", rayNodeSummary, { needsUI: true })
}
