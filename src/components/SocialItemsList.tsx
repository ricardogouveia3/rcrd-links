import { useMemo } from "react";
import SocialItem from "./SocialItem";
import { SocialLink } from "../types/SocialLink";

interface SocialListProps {
  data: SocialLink[];
}

const SocialList = ({ data }: SocialListProps) => {
  const sortedItems = useMemo(() => {
    return data.filter((item) => item.isEnabled).sort((a, b) => a.order - b.order);
  }, [data]);

  return (
    <section className="p-8 sm:p-12 bg-quartz-d10">
      <nav className="max-w-xl mx-auto flex flex-col gap-4">
        {sortedItems.map((item) => (
          <SocialItem key={item.id} {...item} />
        ))}
      </nav>
    </section>
  );
};

export default SocialList;
