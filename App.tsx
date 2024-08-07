import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import InstagramService from './src/services/InstagramService';
import PostCard from './src/components/PostCard';
import Separator from './src/components/Separator';
import Post from './src/models/Post';

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      let _posts = await InstagramService.getPosts();
      setPosts(_posts ?? []);
    } catch (e: any) {
      setPosts([]);
      setError(e);
    }
    setIsLoading(false);
  };

  const onLike = useCallback(
    (id: string) => {
      let newPosts = posts.map(post => {
        if (post.id === id) {
          return {...post, liked: !post.liked};
        }
        return post;
      });
      setPosts(newPosts);
    },
    [posts],
  );

  const onSave = useCallback(
    (id: string) => {
      let newPosts = posts.map(post => {
        if (post.id === id) {
          return {...post, saved: !post.saved};
        }
        return post;
      });
      setPosts(newPosts);
    },
    [posts],
  );

  const ListSeparatorComponent = useCallback(
    () => <Separator height={15} />,
    [],
  );

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator color={'white'} size={'large'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <>
          <Text style={styles.text}>Error retrieving data, please</Text>
          <TouchableOpacity onPress={getPosts}>
            <Text style={[styles.text, styles.bold]}>Try again</Text>
          </TouchableOpacity>
        </>
      ) : (
        <FlatList
          style={styles.flatlist}
          data={posts}
          renderItem={({item}) => (
            <PostCard post={item} onLike={onLike} onSave={onSave} />
          )}
          ItemSeparatorComponent={ListSeparatorComponent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  flatlist: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default App;
