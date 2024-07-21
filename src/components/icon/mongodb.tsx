import { cn } from '@src/lib/utils';
import React from 'react';
type Props = {
  className?: string;
};
const MongoDbIcon = ({ className }: Props) => {
  const style = cn('fill-current w-14 h-14', className);
  return (
    <svg
      width="27"
      height="56"
      viewBox="0 0 27 56"
      fill="none"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_196_519)">
        <path
          d="M18.4584 6.24159C16.0977 3.45303 14.0648 0.62089 13.6495 0.0326784C13.6058 -0.0108928 13.5402 -0.0108928 13.4965 0.0326784C13.0812 0.62089 11.0483 3.45303 8.68764 6.24159C-11.5751 31.9704 11.879 49.3336 11.879 49.3336L12.0757 49.4643C12.2506 52.144 12.6877 56 12.6877 56H13.5621H14.4364C14.4364 56 14.8736 52.1657 15.0485 49.4643L15.2451 49.3119C15.267 49.3119 38.721 31.9704 18.4584 6.24159ZM13.5621 48.9414C13.5621 48.9414 12.5129 48.0482 12.2287 47.5907V47.5473L13.4965 19.5308C13.4965 19.4437 13.6277 19.4437 13.6277 19.5308L14.8954 47.5473V47.5907C14.6113 48.0482 13.5621 48.9414 13.5621 48.9414Z"
          className={style}
        />
      </g>
      <defs>
        <clipPath id="clip0_196_519">
          <rect
            width="26.0465"
            height="56"
            fill="white"
            transform="translate(0.440918)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MongoDbIcon;
