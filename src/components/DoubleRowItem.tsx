import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DoubleRowItem = ({ children }: Props) => {
  return (
    <div className="flex w-full gap-4 flex-col sm:flex-row">{children}</div>
  );
};

export default DoubleRowItem;
