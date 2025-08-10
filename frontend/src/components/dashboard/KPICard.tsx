import React from 'react'

type KPICardProps = {
  title: string
  value: string | React.ReactNode
  subValue?: string
  icon?: React.ReactNode
  sparkline?: React.ReactNode
  className?: string
}

export function KPICard({
  title,
  value,
  subValue,
  icon,
  sparkline,
  className,
}: KPICardProps) {
  return (
    <div
      className={`bg-white rounded-xl p-5 border border-[#E2E8F0] shadow-sm ${className}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-[#475569]">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-light text-[#0F172A]">{value}</span>
            {subValue && (
              <span className="ml-1 text-sm text-[#94A3B8]">{subValue}</span>
            )}
          </div>
        </div>
        {icon && <div className="text-[#94A3B8]">{icon}</div>}
      </div>
      {sparkline && <div className="mt-3">{sparkline}</div>}
    </div>
  )
}
