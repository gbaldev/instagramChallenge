import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from './types';

const Message: React.FC<IconProps> = ({size, color = '#ffffff'}) => {
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
          d="M15.6953 19.2318L19.1027 20.3676C19.8845 20.6282 20.6282 19.8844 20.3676 19.1027L19.2318 15.6953M15.3 19.1C15.3 19.1 14.0847 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 14 19.1 15.3 19.1 15.3"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};

export default Message;
