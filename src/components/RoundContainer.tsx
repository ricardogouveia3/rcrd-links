import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RoundContainer = ({ children }: Props) => {
  return (
    <div className="overflow-hidden shadow-lg md:rounded-lg">{children}</div>
  );
};

export default RoundContainer;
