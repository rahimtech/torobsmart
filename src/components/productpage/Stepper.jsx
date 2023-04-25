import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "نوع محصول : خیلی خوب",
  },
  {
    label: "اندازه محصول : خیلی بزرگ",
  },
  {
    label: "وزن محصول : سنگین",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <Box className="w-full px-3 text-right flex justify-start my-3 rtl">
      <Stepper
        className="items-start pr-3"
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step) => (
          <Step className="relative right-min-30 " key={step.label}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
