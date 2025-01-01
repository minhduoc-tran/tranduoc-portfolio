import React from 'react'

import { CircleDot } from 'lucide-react'

import Wrapper from '@/components/common/wapper'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { jobList } from '@/constants/job-list'

const WorkExperience = () => {
  return (
    <Wrapper style="min-h-[70vh] flex items-center justify-center px-2 md:p-4 lg:p-8">
      <div className="w-full">
        <h2 className="text-center text-3xl font-semibold md:text-4xl lg:text-5xl">
          Work Experience
        </h2>
        <div className="mt-2 w-full">
          {jobList.map((job, index) => {
            return (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                key={job.startDate}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="py-4 text-xl font-extrabold text-[#0077b6]">
                    <div className="flex items-center gap-x-2">
                      <CircleDot />
                      {job.title} at {job.company}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4">
                      <span className="text-lg font-bold">{job.position}</span>
                      <span>Location: {job.location}</span>
                      <span>
                        Time: {job.startDate} - {job.endDate}
                      </span>
                      <p>Description: {job.description}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default WorkExperience
