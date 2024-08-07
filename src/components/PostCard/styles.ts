import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  headerAndSubheader: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  image: {
    flexGrow: 1,
    height: 300,
    width: '100%',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  background: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 2,
  },
  profileImageContainer: {
    borderRadius: 50,
  },
  profileImage: {
    height: 32,
    width: 32,
    borderRadius: 50,
  },
  bold: {
    color: 'white',
    fontWeight: 'bold',
  },
  normal: {
    color: 'white',
    fontWeight: 'normal',
  },
  grayNormal: {
    color: 'rgba(255,255,255,0.5)',
    fontWeight: 'normal',
  },
});
