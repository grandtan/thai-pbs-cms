/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Progress,
  Select,
  SimpleGrid,
  useColorModeValue,
  Text,
  Button,
  FormControl,
  Link,
  InputRightElement,
  InputGroup,
  Input,
  Checkbox,
} from '@chakra-ui/react';
// Assets
// Custom components

import AdminLayout from 'layouts/admin';
import { Image } from 'components/image/Image';
import Usa from 'img/dashboards/usa.png';
import Card from 'components/card/Card';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import React from 'react';

export default function UserReports() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  // const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');

  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' }
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' }
  );

  return (
    <AdminLayout>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <>
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 1, '2xl': 1 }}
            gap='20px'
            mb='20px'
          >
            <Card
              flexDirection='column'
              w='100%'
              px='0px'
              overflowX={{ sm: 'scroll', lg: 'hidden' }}
            >
              <Flex px='25px' justify='space-between' mb='10px' align='center'>
                <Text
                  color={textColor}
                  fontSize='22px'
                  fontWeight='700'
                  lineHeight='100%'
                >
                  {'Upload & Meta Data'}
                </Text>
              </Flex>

              <Flex
                px='25px'
                zIndex='2'
                direction='column'
                w={{ base: '100%', md: '420px' }}
                maxW='100%'
                background='transparent'
                borderRadius='15px'
                mx={{ base: 'auto', lg: 'unset' }}
                me='auto'
                mt='25px'
                mb={{ base: '20px', md: 'auto' }}
              >
                <FormControl>
                  <FormLabel
                    display='flex'
                    ms='4px'
                    fontSize='sm'
                    fontWeight='500'
                    color={textColor}
                    mb='8px'
                  >
                    Email<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <Input
                    isRequired={true}
                    variant='auth'
                    fontSize='sm'
                    ms={{ base: '0px', md: '0px' }}
                    type='text'
                    placeholder='mail@simmmple.com'
                    mb='24px'
                    fontWeight='500'
                    size='lg'
                  />
                  <FormLabel
                    ms='4px'
                    fontSize='sm'
                    fontWeight='500'
                    color={textColor}
                    display='flex'
                  >
                    Password<Text color={brandStars}>*</Text>
                  </FormLabel>
                  <InputGroup size='md'>
                    <Input
                      isRequired={true}
                      fontSize='sm'
                      placeholder='Min. 8 characters'
                      mb='24px'
                      size='lg'
                      type={ 'text' }
                      variant='auth'
                    />
                    <InputRightElement
                      display='flex'
                      alignItems='center'
                      mt='4px'
                    >
                      <Icon
                        color={textColorSecondary}
                        _hover={{ cursor: 'pointer' }}
                        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                        onClick={handleClick}
                      />
                    </InputRightElement>
                  </InputGroup>

                  <Flex
                    justifyContent='space-between'
                    align='center'
                    mb='24px'
                  ></Flex>
                  <Button
                    fontSize='sm'
                    variant='brand'
                    fontWeight='500'
                    w='100%'
                    h='50'
                    mb='24px'
                  >
                    Submit
                  </Button>
                </FormControl>
              </Flex>
            </Card>
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  );
}
