import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Send from './Send';
import Heart from './Heart';
import Message from './Message';
import HeartFilled from './HeartFilled';
import Bookmark from './Bookmark';
import BookmarkFilled from './BookmarkFilled';
import Dots from './Dots';

export const IconMap = {
  send: Send,
  heart: Heart,
  message: Message,
  heartFilled: HeartFilled,
  bookmark: Bookmark,
  bookmarkFilled: BookmarkFilled,
  dots: Dots,
};

interface Props {
  style?: StyleProp<ViewStyle>;
  name: keyof typeof IconMap;
  size?: number;
  focused?: boolean;
  color?: string;
  horizontal?: boolean;
}

const Icon: React.FC<Props> = ({
  style,
  name,
  size = 24,
  focused = true,
  color,
  ...props
}) => {
  const IconComponent = IconMap[name];

  return (
    <IconComponent
      style={style}
      size={size}
      focused={focused}
      color={color}
      {...props}
    />
  );
};

export default Icon;
