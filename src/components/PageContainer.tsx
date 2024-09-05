import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return (
    <div className="background-pattern">
      <div className="max-w-xl mx-auto">{children}</div>
    </div>
  );
};

export default PageContainer;
