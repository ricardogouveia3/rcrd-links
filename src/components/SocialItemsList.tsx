import React, { useMemo } from "react";
import DoubleRowItem from "./DoubleRowItem";
import { SocialLink } from "../types/SocialLink";
import SocialItem from "./SocialItem";

interface SocialListProps {
  data: SocialLink[];
}

const groupAndSortItems = (items: SocialLink[]) => {
  const grouped: { [key: number]: SocialLink[] } = {};
  const allItems: (SocialLink | { groupOrder: number })[] = [];

  items
    .filter((item) => item.isEnabled)
    .forEach((item) => {
      if (item.group.isGrouped) {
        const groupOrder = item.group.groupOrder as number;
        if (!grouped[groupOrder]) {
          grouped[groupOrder] = [];
          allItems.push({ groupOrder });
        }
        grouped[groupOrder].push(item);
      } else {
        allItems.push(item);
      }
    });

  Object.keys(grouped).forEach((groupOrder) => {
    grouped[parseInt(groupOrder)].sort((a, b) => a.order - b.order);
  });

  allItems.sort((a, b) => {
    const orderA =
      "order" in a
        ? a.order
        : grouped[(a as { groupOrder: number }).groupOrder][0].order;
    const orderB =
      "order" in b
        ? b.order
        : grouped[(b as { groupOrder: number }).groupOrder][0].order;
    return orderA - orderB;
  });

  return { grouped, allItems };
};

const SocialList: React.FC<SocialListProps> = ({ data }) => {
  const { grouped, allItems } = useMemo(() => groupAndSortItems(data), [data]);

  const renderGroupedItems = (groupOrder: number) => {
    const groupItems = grouped[groupOrder];
    return (
      <DoubleRowItem key={`group-${groupOrder}`}>
        {groupItems.map((groupItem) => (
          <SocialItem key={`item-${groupItem.id}`} {...groupItem} />
        ))}
      </DoubleRowItem>
    );
  };

  const renderUngroupedItem = (item: SocialLink) => (
    <SocialItem key={`item-${item.id}`} {...item} />
  );

  return (
    <section className="p-8 sm:p-12 bg-quartz-d10">
      <nav className="max-w-xl mx-auto flex flex-col gap-4">
        {allItems.map((item) =>
          "groupOrder" in item
            ? renderGroupedItems((item as { groupOrder: number }).groupOrder)
            : renderUngroupedItem(item)
        )}
      </nav>
    </section>
  );
};

export default SocialList;
