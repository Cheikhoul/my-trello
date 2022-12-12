import { Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource }) {
  return (    
    <Image source={placeholderImageSource} />
  );
}


