// Chakra imports
import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
// Assets
import { useDropzone } from 'react-dropzone';
import useDownloader from 'react-use-downloader';
function Dropzone(props: { content: JSX.Element | string; [x: string]: any }) {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const { content, ...rest } = props;
  const { getRootProps, getInputProps } = useDropzone();
  const bg = useColorModeValue('gray.100', 'navy.700');
  const borderColor = useColorModeValue('secondaryGray.100', 'whiteAlpha.100');

  const fileUrl = '/robots.txt';
  const filename = 'robots.txt';

  return (
    <Flex
      align='center'
      justify='center'
      bg={bg}
      border='1px dashed'
      borderColor={borderColor}
      borderRadius='16px'
      w='100%'
      h='max-content'
      minH='100%'
      cursor='pointer'
      onClick={() => download(fileUrl, filename)}
      // {...getRootProps({ className: 'dropzone' })}
      {...rest}
    >
      {/* <input {...getInputProps()} /> */}
      <Button variant='no-effects'>{content}</Button>
    </Flex>
  );
}

export default Dropzone;
