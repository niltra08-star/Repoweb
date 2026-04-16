"use client";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-4 mb-12">
      <div className="flex items-center gap-3">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={index} className="flex items-center">
              <div 
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-body transition-all duration-500
                  ${isActive ? "bg-clay text-white scale-110" : 
                    isCompleted ? "bg-sand text-white" : "bg-stone text-charcoal/50"}
                `}
              >
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  stepNumber
                )}
              </div>
              
              {stepNumber < totalSteps && (
                <div 
                  className={`w-8 md:w-16 h-px mx-2 transition-colors duration-500 ${
                    isCompleted ? "bg-sand" : "bg-stone"
                  }`} 
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="font-body text-xs uppercase tracking-widest text-charcoal/50">
        Paso {currentStep} de {totalSteps}
      </p>
    </div>
  );
}
