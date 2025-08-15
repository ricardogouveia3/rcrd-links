import {FeaturedItem, TFeaturedItem} from "./FeaturedItem.tsx";

interface FeaturedItemListProps {
  data?: TFeaturedItem[];
}

export const FeaturedItemList = ({ data = [] }: FeaturedItemListProps) => {
  return (
    <>
      {data?.map((item, index) => (
      (item?.active &&
          <FeaturedItem
            key={item.id || `item-${index}`}
            item={item}
        />)
      ))}
    </>
  );
};