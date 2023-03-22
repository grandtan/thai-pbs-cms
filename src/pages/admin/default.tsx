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
  Select,
} from '@chakra-ui/react';
// Assets
// Custom components
import { MdUpload } from 'react-icons/md';
import AdminLayout from 'layouts/admin';
import { Image } from 'components/image/Image';
import Usa from 'img/dashboards/usa.png';
import Card from 'components/card/Card';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import React from 'react';
import { Form } from 'antd';
import { listGenres, listSeason } from 'utils/list';
import SwitchField from 'components/fields/SwitchField';
import Dropzone from 'react-dropzone';
import Upload from 'views/admin/profile/components/Upload';
import Download from 'views/admin/profile/components/Download';

export default function UserReports() {
  const [formUpdate] = Form.useForm();

  const onFinish = (value: object) => {
    // setLoading(true);
    console.log('value', value);
  };

  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  // const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');

  const brandStars = useColorModeValue('brand.500', 'brand.400');

  const textTitle = (text: string) => (
    <Text color={textColorPrimary} fontWeight='500' fontSize='md' mb='4px'>
      {text}
    </Text>
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
                  {'Upload Video'}
                </Text>
              </Flex>
              <Flex
                justifyContent='space-between'
                align='center'
                mb='24px'
              ></Flex>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <a
                  target='_blank'
                  href='https://ingestprogram.thaipbs.or.th/sharing/brFaHySol'
                  rel='noopener noreferrer'
                >
                  <Button
                    onClick={() => formUpdate.submit()}
                    fontSize='sm'
                    variant='brand'
                    fontWeight='500'
                    w={200}
                    h='50'
                    mb='24px'
                  >
                    Click Upload
                  </Button>
                </a>
              </div>
            </Card>
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
                  {'Upload & Download'}
                </Text>
              </Flex>

              <div style={{ display: 'flex' }}>
                <Download
                  gridArea={{
                    base: '3 / 1 / 4 / 2',
                    lg: '1 / 3 / 2 / 4',
                  }}
                  // minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
                  pe='20px'
                  pb={{ base: '100px', lg: '20px' }}
                />
                <Upload
                  gridArea={{
                    base: '3 / 1 / 4 / 2',
                    lg: '1 / 3 / 2 / 4',
                  }}
                  // minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
                  pe='20px'
                  pb={{ base: '100px', lg: '20px' }}
                />
              </div>
            </Card>
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
                  {' Meta Data'}
                </Text>
              </Flex>

              <div style={{ padding: 40 }}>
                <Form
                  form={formUpdate}
                  name='basic'
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  style={{ width: '100%' }}
                  autoComplete='off'
                  layout='vertical'
                  onFinish={onFinish}
                >
                  <SimpleGrid
                    columns={{ base: 1, md: 3, xl: 3 }}
                    gap='20px'
                    mb='20px'
                  >
                    <Form.Item
                      name='clipName'
                      label={textTitle('Clip Name')}
                      rules={[
                        {
                          required: true,
                          message: 'Clip name is required',
                        },
                      ]}
                    >
                      <Input
                        size='md'
                        borderRadius='16px'
                        // isInvalid
                      />
                    </Form.Item>

                    <Form.Item
                      name='titleThai'
                      label={textTitle('Title Thai')}
                      rules={[
                        {
                          required: true,
                          message: 'Title thai is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('File Type')} name='fileType'>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Frame Rate')} name='frameRate'>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Video Codec')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      label={textTitle('Audio File Type')}
                      name='audioFileType'
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      label={textTitle('Audio Bit Depth')}
                      name='audioBitDepth'
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      label={textTitle('Audio Sample Rate')}
                      name='audioSampleRate'
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Audio CH1')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Audio CH2')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Audio CH3')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Audio CH4')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Duration')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Title English')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Artist')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Audio Description')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Close Caption')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Sign Language')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Episode No.')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Episode Title')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Season')}>
                      <Select size='md' borderRadius='16px'>
                        {listSeason.map((e) => (
                          <option value={e.value} key={e.value}>
                            {e.label}
                          </option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label={textTitle('Synopsis Episode')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Tags')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Genres')}>
                      <Select size='md' borderRadius='16px'>
                        {listGenres.map((e) => (
                          <option value={e.value} key={e.value}>
                            {e.label}
                          </option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label={textTitle('Sub genres')}>
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item label={textTitle('Start Date')}>
                      <Input size='md' borderRadius='16px' type='date' />
                    </Form.Item>
                    <Form.Item label={textTitle('Expire Date')}>
                      <Input size='md' borderRadius='16px' type='date' />
                    </Form.Item>
                    <Form.Item label={textTitle('Expire Date')}>
                      <Input size='md' borderRadius='16px' type='date' />
                    </Form.Item>
                    <Form.Item label={textTitle('Synopsis')}>
                      {/* aear */}
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>

                    <div></div>

                    <Form.Item label='' valuePropName='checked'>
                      <SwitchField
                        isChecked={true}
                        reversed={true}
                        fontSize='sm'
                        mb='20px'
                        id='1'
                        label='ON VIPA'
                      />
                    </Form.Item>
                    <Form.Item label='' valuePropName='checked'>
                      <SwitchField
                        isChecked={true}
                        reversed={true}
                        fontSize='sm'
                        mb='20px'
                        id='1'
                        label='ON THAIPBS'
                      />
                    </Form.Item>
                    <Form.Item label='' valuePropName='checked'>
                      <SwitchField
                        isChecked={true}
                        reversed={true}
                        fontSize='sm'
                        mb='20px'
                        id='1'
                        label='ON ALTV'
                      />
                    </Form.Item>
                  </SimpleGrid>
                </Form>
              </div>

              <Flex
                justifyContent='space-between'
                align='center'
                mb='24px'
              ></Flex>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  onClick={() => formUpdate.submit()}
                  fontSize='sm'
                  variant='brand'
                  fontWeight='500'
                  w={200}
                  h='50'
                  mb='24px'
                >
                  Submit
                </Button>
              </div>
            </Card>
          </SimpleGrid>
        </>
      </Box>
    </AdminLayout>
  );
}
