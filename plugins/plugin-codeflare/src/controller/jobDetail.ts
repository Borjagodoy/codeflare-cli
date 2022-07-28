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

import { Arguments } from "@kui-shell/core"

import "../../web/scss/components/helloExample/_index.scss"

export default function helloExample(args: Arguments) {
  const jobID = args.parsedOptions["jobId"]
  console.log(jobID)
  process.env.JOBID = jobID
  const address = args.parsedOptions["address"]
  process.env.LOGDIR = address
  console.log(jobID)
  return args.REPL.qexec("commentary --readonly -f /kui/client/job-detail.md")
}
