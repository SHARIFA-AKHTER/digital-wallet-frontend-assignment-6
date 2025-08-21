
import clsx from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 sm:p-6 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;