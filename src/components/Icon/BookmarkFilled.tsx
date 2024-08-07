import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from './types';

const BookmarkFilled: React.FC<IconProps> = ({size, color = '#ffffff'}) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill="none">
      <G id="SVGRepo_bgCarrier" stroke-width="0" />
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M15.75 3.25H8.24999C7.52064 3.25 6.82117 3.53973 6.30545 4.05546C5.78972 4.57118 5.49999 5.27065 5.49999 6V20C5.49898 20.1377 5.53587 20.2729 5.60662 20.391C5.67738 20.5091 5.77926 20.6054 5.90112 20.6695C6.02298 20.7335 6.16012 20.7627 6.2975 20.754C6.43488 20.7453 6.56721 20.6989 6.67999 20.62L12 16.91L17.32 20.62C17.4467 20.7063 17.5967 20.7516 17.75 20.75C17.871 20.7486 17.9903 20.7213 18.1 20.67C18.2203 20.6041 18.3208 20.5072 18.3911 20.3894C18.4615 20.2716 18.499 20.1372 18.5 20V6C18.5 5.27065 18.2103 4.57118 17.6945 4.05546C17.1788 3.53973 16.4793 3.25 15.75 3.25Z"
          fill={color}
        />
      </G>
    </Svg>
  );
};

export default BookmarkFilled;