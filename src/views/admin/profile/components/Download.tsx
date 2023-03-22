// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
// Assets
import { MdUpload, MdDownload } from 'react-icons/md';
import Dropzone from 'views/admin/profile/components/Dropzone-download';

export default function Upload(props: {
  used?: number;
  total?: number;
  [x: string]: any;
}) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const textColorSecondary = 'gray.400';
  return (
    <Card {...rest} alignItems='center' p='20px'>
      <Flex h='200' direction={'column'}>
        <Dropzone
          w={400}
          me='36px'
          maxH={{ base: '60%', lg: '50%', '2xl': '100%' }}
          // minH={{ base: '60%', lg: '50%', '2xl': '100%' }}
          content={
            <Box>
              <Icon as={MdDownload} w='80px' h='80px' color={brandColor} />
              <Flex justify='center' mx='auto' mb='12px'>
                <Text fontSize='xl' fontWeight='700' color={brandColor}>
                  Download Excel Files
                </Text>
              </Flex>
              <Text fontSize='sm' fontWeight='500' color='secondaryGray.500'>
                Example template for upload meta data file
              </Text>
            </Box>
          }
        />
      </Flex>
    </Card>
  );
}
