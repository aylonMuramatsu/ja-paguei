import React, { useEffect, useState } from "react";
import {
  ProgressPillsContainerUI,
  ProgressPillsUI,
} from "../styles/ProgressPillsUI";

export default function ProgressPills({
  value: initialValue = 20,
  height = 15,
  completeColor = "#1dd1a1",
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <ProgressPillsContainerUI height={height}>
      <ProgressPillsUI value={value} completeColor={completeColor} />
    </ProgressPillsContainerUI>
  );
}
