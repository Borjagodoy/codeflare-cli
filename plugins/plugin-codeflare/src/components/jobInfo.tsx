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

import React from "react"

import {
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  Badge,
} from "@patternfly/react-core"

import "../../web/scss/components/jobs/Summary.scss"

type Props = {
  job: any
  jobId: string
}
const JobInfo = (props: Props) => {
  const { job, jobId } = props

  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>JobId</DescriptionListTerm>
        <DescriptionListDescription>{jobId}</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Status</DescriptionListTerm>
        <DescriptionListDescription>
          <Badge isRead>{job.status}</Badge>
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Entry point</DescriptionListTerm>
        <DescriptionListDescription>{job.entrypoint}</DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Start at</DescriptionListTerm>
        <DescriptionListDescription>
          {new Date(job.start_time).toDateString()} - {new Date(job.start_time).toLocaleTimeString()}
        </DescriptionListDescription>
      </DescriptionListGroup>
      <DescriptionListGroup>
        <DescriptionListTerm>Dir</DescriptionListTerm>
        <DescriptionListDescription>{job.runtime_env.working_dir}</DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  )
}

export default JobInfo
