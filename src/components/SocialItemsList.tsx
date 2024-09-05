import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SocialItemsList = ({ children }: Props) => {
  return (
    <section className="p-8 sm:p-12 bg-[#434343]">
      <nav className="max-w-xl mx-auto flex flex-col gap-4">{children}</nav>
    </section>
  );
};

export default SocialItemsList;
