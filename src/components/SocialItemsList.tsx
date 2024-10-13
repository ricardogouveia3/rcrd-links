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

  const featuredItems = sortedItems.filter((item) => item.featured);
  const regularItems = sortedItems.filter((item) => !item.featured);

  const isRegularItemsOdd = regularItems.length % 2 !== 0;

  return (
    <section className="p-8 sm:p-12 bg-quartz-d10">
      <nav className="flex flex-col gap-4">

        {featuredItems && (
          <div className="featured-container">
            {featuredItems.map((item) => (
              <SocialItem key={item.id} {...item} />
            ))}
          </div>
        )}

        {regularItems && (
          <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2">
            {regularItems.slice(0, isRegularItemsOdd ? -1 : undefined).map((item) => (
              <SocialItem key={item.id} {...item} />
            ))}
          </div>
        )}

        {isRegularItemsOdd && regularItems.length > 0 && (
          <div className="w-full">
            <SocialItem key={regularItems[regularItems.length - 1].id} {...regularItems[regularItems.length - 1]} />
          </div>
        )}
      </nav>
    </section>
  );
};

export default SocialList;