interface ProgressBarProps {
    percentage: number
    label: string
  }
  
  export function ProgressBar({ percentage, label }: ProgressBarProps) {
    return (
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>{label}</span>
          <span>{percentage}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full">
          <div
            className="h-full bg-pink-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
  
  