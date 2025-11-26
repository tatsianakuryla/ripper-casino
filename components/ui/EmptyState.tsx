import type { JSX } from 'react';

interface EmptyStateProperties {
  message?: string;
  className?: string;
}

export const EmptyState = ({
  message = 'No data available',
  className = '',
}: EmptyStateProperties): JSX.Element => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-[80px] px-[24px] ${className}`}
    >
      <div className="text-center">
        <h3 className="text-[24px] font-display text-text-main opacity-60 uppercase">
          {message}
        </h3>
      </div>
    </div>
  );
};
