/**
 * Copyright (c) 2022,2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    kits: [
        {
            type: 'category',
            label: 'Demand and Capacity Management KIT',
            link: {
                type: 'doc',
                id: 'kits/Demand and Capacity Management Kit/adoption-view/overview',
           },
           collapsed: true,
           items: [
               'kits/Demand and Capacity Management Kit/changelog',
               {
                   type: 'category',
                   label: 'Adoption View',
                   link: {
                        type: 'doc',
                        id: 'kits/Demand and Capacity Management Kit/adoption-view/overview',
                   },
                   items: [
                    'kits/Demand and Capacity Management Kit/adoption-view/glossary',
                       {
                           type: 'category',
                           label: 'Use Case',
                           link: {
                               type: 'generated-index',
            },
            collapsed: true,
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/Demand and Capacity Management Kit/adoption-view/use-case'
            }
        ]
    },
    'kits/Demand and Capacity Management Kit/adoption-view/onboarding',
    'kits/Demand and Capacity Management Kit/adoption-view/qna',
    'kits/Demand and Capacity Management Kit/adoption-view/foss-app',
]
},
{
type: 'category',
label: 'Development View',
link: {
     type: 'doc',
     id: 'kits/Demand and Capacity Management Kit/development-view/overview',
},
items: [
    'kits/Demand and Capacity Management Kit/development-view/model-WeekBasedMaterialDemand',
    'kits/Demand and Capacity Management Kit/development-view/model-WeekBasedCapacityGroup',
    'kits/Demand and Capacity Management Kit/development-view/model-IdBasedRequestForUpdate',
    'kits/Demand and Capacity Management Kit/development-view/model-IdBasedComment',
    'kits/Demand and Capacity Management Kit/development-view/api-WeekBasedMaterialDemand',
    'kits/Demand and Capacity Management Kit/development-view/api-WeekBasedCapacityGroup',
    'kits/Demand and Capacity Management Kit/development-view/api-IdBasedRequestForUpdate',
    'kits/Demand and Capacity Management Kit/development-view/api-IdBasedComment',
    'kits/Demand and Capacity Management Kit/development-view/api-aas',
    'kits/Demand and Capacity Management Kit/development-view/test-customer',
    'kits/Demand and Capacity Management Kit/development-view/test-supplier',
]
},
{
type: 'category',
label: 'Architecture View',
link: {
     type: 'doc',
     id: 'kits/Demand and Capacity Management Kit/architecture-view/overview',
},
items: [
    'kits/Demand and Capacity Management Kit/architecture-view/dependencies',
]
},
                'kits/Demand and Capacity Management Kit/operation-view',
                        ]
        },
    ]
};
module.exports = sidebars;
