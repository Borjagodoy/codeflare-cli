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
  Card,
  CardTitle,
  CardBody,
  Badge,
} from "@patternfly/react-core"

import "../../web/scss/components/Jobs/Summary.scss"

type Props = {
  summary: any
}
const Summary = (props: Props) => {
  const { summary } = props

  return (
    <DescriptionList isAutoColumnWidths isFluid>
      {summary.map((item: any, index: number) => (
        <Card>
          <CardTitle>Node {index + 1}</CardTitle>
          <CardBody>
            <DescriptionListGroup key={index}>
              <DescriptionListTerm>State</DescriptionListTerm>
              <DescriptionListDescription>
                <Badge>{item.raylet.state}</Badge>
              </DescriptionListDescription>
              <DescriptionListTerm>HostName</DescriptionListTerm>
              <DescriptionListDescription>{item.hostname}</DescriptionListDescription>
              <DescriptionListTerm>IP</DescriptionListTerm>
              <DescriptionListDescription>{item.ip}</DescriptionListDescription>
              <DescriptionListTerm>CPU usage</DescriptionListTerm>
              <DescriptionListDescription>{item.cpu} %</DescriptionListDescription>
              <DescriptionListTerm>Memory usage</DescriptionListTerm>
              <DescriptionListDescription>{item.disk["/"].percent} %</DescriptionListDescription>
            </DescriptionListGroup>
          </CardBody>
        </Card>
      ))}
    </DescriptionList>
  )
}

export default Summary
