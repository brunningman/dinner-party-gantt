interface Step {
  _id: string;
  name: string;
  description: string;
  locale: string;
  duration: number;
  attention: number;
  level?: number;
  precedingStepIds?: string[];
}

export default Step