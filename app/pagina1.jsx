import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Box } from 'expo-router';

export default function Pagina1() {
  return (
      <Box className='flex-1' justifyContent='center' alignItems='center'>
        <Text className= 'uppercase font-extrabold'>página um</Text>
      </Box>
  );
}

