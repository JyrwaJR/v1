import { cn } from '@src/lib/utils';
import React from 'react';
type Props = {
  className?: string;
};
const SocketIcon = ({ className }: Props) => {
  const style = cn('fill-current w-14 h-14', className);
  return (
    <svg
      width="57"
      height="56"
      className={style}
      viewBox="0 0 57 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_196_518)">
        <path
          d="M56.4894 27.3831C56.3372 18.0206 51.1169 8.90486 43.0406 4.10461C36.6777 0.141739 28.6399 -0.924886 21.4001 0.903864C10.5038 3.64699 1.81677 13.5152 0.712521 24.7625C-0.659479 35.385 4.71302 46.4327 13.8944 51.8805C22.8859 57.519 35.1158 57.2906 43.9069 51.3555C51.8318 46.2122 56.7467 36.8305 56.4807 27.391L56.4894 27.3831ZM30.0486 51.8437C17.3235 53.1011 5.01752 42.3194 4.67365 29.5557C3.71115 19.1931 10.5405 8.94424 20.2941 5.51511C33.9721 0.0288637 50.7739 10.1631 52.1835 24.8325C54.3938 38.0135 43.4213 51.4325 30.0486 51.8437ZM21.6749 26.5825L40.0761 11.5325L30.1327 26.6201C27.3134 26.6201 24.4941 26.621 21.6749 26.5825ZM26.8488 29.365L35.3065 29.4035L16.9053 44.4911L26.8488 29.365Z"
          fill="#010101"
        />
      </g>
      <defs>
        <clipPath id="clip0_196_518">
          <rect
            width="56"
            height="56"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SocketIcon;
