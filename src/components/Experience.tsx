import React from "react";
import { Timeline } from "antd";

import * as data from "../../data/vaish_resume.json";

const Experience = (): JSX.Element => {
  const experiences = JSON.parse(data.work);

  return (
    <Timeline mode="left">
      {experiences.forEach((exp) => {
        const workingDates = exp.startDate + " to " + exp.endDate;
        <Timeline.Item label={workingDates}>
          {exp.position}, {exp.company}
        </Timeline.Item>;
      })}
    </Timeline>
  );
};

export default Experience;
