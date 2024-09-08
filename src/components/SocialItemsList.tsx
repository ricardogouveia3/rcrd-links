import React, { useMemo } from "react";
import SocialItem from "./SocialItem";
import DoubleRowItem from "./DoubleRowItem";
import SocialItemProps from "../types/SocialItemProps";

interface SocialItemData extends SocialItemProps {
  order: number;
  isEnabled: boolean;
  group: {
    isGrouped: boolean;
    groupOrder?: number;
  };
}

interface SocialListProps {
  data: SocialItemData[];
}

const groupAndSortItems = (items: SocialItemData[]) => {
  const grouped: { [key: number]: SocialItemData[] } = {};
  const allItems: (SocialItemData | { groupOrder: number })[] = [];

  items.forEach((item) => {
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
    const orderA = "order" in a ? a.order : grouped[a.groupOrder][0].order;
    const orderB = "order" in b ? b.order : grouped[b.groupOrder][0].order;
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
          <SocialItem
            key={`item-${groupItem.order}-${groupOrder}`}
            text={groupItem.text}
            link={groupItem.link}
            emoji={groupItem.emoji}
            image={groupItem.image}
          />
        ))}
      </DoubleRowItem>
    );
  };

  const renderUngroupedItem = (item: SocialItemData) => (
    <SocialItem
      key={`item-${item.order}`}
      text={item.text}
      link={item.link}
      emoji={item.emoji}
      image={item.image}
    />
  );

  return (
    <section className="p-8 sm:p-12 bg-[#434343]">
      <nav className="max-w-xl mx-auto flex flex-col gap-4">
        {allItems.map((item) =>
          "groupOrder" in item
            ? renderGroupedItems(item.groupOrder)
            : renderUngroupedItem(item)
        )}
      </nav>
    </section>
  );
};

export default SocialList;
