import ButtonLink from "./ButtonLink";
import {getImage} from "../assets/images.ts";

export interface TFeaturedItem {
  id?: string;
  active: boolean;
  description?: string;
  background?: {
    color?: string;
    type?: string;
  };
  logo?: {
    key?: string;
    alt?: string;
  };
  button?: {
    text: string;
    link: string;
  };
}

interface FeaturedItemProps {
  item: TFeaturedItem,
  key?: string
}

export const FeaturedItem = ({item, key}: FeaturedItemProps) => {
  const bgColor = item?.background?.color || '#161616';
  const image = item?.logo?.key ? getImage(item.logo.key) : null;

  return (
    <section
      className="p-8 sm:p-12 flex flex-col gap-6"
      style={{backgroundColor: bgColor}}
      test-id={key}
    >
      <div className="flex flex-col items-center gap-4">
        {item?.logo?.key && (
          <img
            src={image as string}
            className="mx-auto sm:w-[120px] w-28 mb-2"
            alt={item.logo.alt || ''}
          />
        )}
        {item?.description && (
          <p className="text-white text-sm font-bold">{item.description}</p>
        )}
        {item?.button && (
          <ButtonLink
            text={item.button.text}
            link={item.button.link}
          />
        )}
      </div>
    </section>
  );
};