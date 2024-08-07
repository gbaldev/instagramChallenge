import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {View} from 'react-native';
import Post from '../../models/Post';
import {getTimeElapsed} from '../../utils/datesUtils';
/*
  By using FastImage, we aim to resolve the 403 errors and improve overall image
  loading reliability and performance in our app, particularly for IPFS-sourced images.
  It was a necessity since <Image /> would never display the avatar image on Android
  due to network restrictions.
    * FastImage also offers several advantages:
      * 1. Better handling of redirects, which are common with IPFS/Cloudflare setups.
      * 2. Improved caching mechanisms, reducing load times for previously viewed images.
      * 3. More robust error handling and retry logic for failed image loads.
      * 4. Performance optimizations, especially noticeable with large image sets.
*/
import FastImage from 'react-native-fast-image';
import {notFoundImage, profileBackgroundImage} from '../../utils/consts';
import {Separator, Icon} from '../';

interface PostProps {
  post: Post;
  onLike: (id: string) => void;
  onSave: (id: string) => void;
}

const PostCard: React.ComponentType<PostProps> = ({post, onLike, onSave}) => {
  const [image, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    /*
      It's not a direct link; the image URI is being randomly generated.
      We then have to retrieve it and use it with the <FastImage /> component.
      The <FastImage /> nor the component doesn't handle redirections by itself.
    */

    const fetchImageUrl = async () => {
      try {
        const response = await fetch(post.image);
        setImageUrl(response.url);
      } catch (error) {
        console.log('Error fetching image URL:', error);
        setImageUrl(null);
      }
    };

    fetchImageUrl();
  }, [post.avatar, post.image]);

  return (
    <View style={styles.container}>
      <View style={styles.headerAndSubheader}>
        <View style={styles.profileContainer}>
          <ImageBackground
            source={profileBackgroundImage}
            style={styles.background}
            imageStyle={styles.profileImageContainer}>
            <FastImage
              source={{uri: post.avatar}}
              style={styles.profileImage}
              onError={() => {
                console.error('Avatar load failed', post.avatar);
              }}
            />
          </ImageBackground>
          <Separator width={10} />
          <View>
            <Text style={styles.bold}>
              {post.name}
              {'  '}
              <Text style={styles.grayNormal}>
                • {getTimeElapsed(post.createdAt)}
              </Text>
            </Text>
            <Text style={styles.normal}>{post.location}</Text>
          </View>
        </View>
        <Icon name="dots" />
      </View>
      <FastImage
        source={image ? {uri: image} : notFoundImage}
        resizeMode="contain"
        style={styles.image}
        onError={() => {
          console.error('Image load failed', post.image);
        }}
      />
      <View style={styles.headerAndSubheader}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => onLike(post.id)}>
            <Icon name={post.liked ? 'heartFilled' : 'heart'} size={26} />
          </TouchableOpacity>
          <Separator width={5} />
          <Icon name={'message'} size={26} />
          <Separator width={5} />
          <Icon name={'send'} size={26} />
        </View>
        <TouchableOpacity onPress={() => onSave(post.id)}>
          <Icon name={post.saved ? 'bookmarkFilled' : 'bookmark'} size={26} />
        </TouchableOpacity>
      </View>
      <Text style={styles.bold}>
        {post.likes} <Text style={styles.normal}>Me gusta</Text>
      </Text>
      <Separator height={8} />
      <Text style={styles.bold}>
        {post.name} <Text style={styles.normal}>{post.description}</Text>
      </Text>
      <Separator height={8} />
      <Text style={styles.grayNormal}>Ver los {post.comments} comentarios</Text>
    </View>
  );
};

export default PostCard;
