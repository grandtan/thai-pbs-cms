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
import React, { useEffect } from 'react';
import { Form } from 'antd';
import { listGenres, listSeason } from 'utils/list';
import SwitchField from 'components/fields/SwitchField';
import Dropzone from 'react-dropzone';
import Upload from 'views/admin/profile/components/Upload';
import Download from 'views/admin/profile/components/Download';
import axios, { AxiosInstance } from 'axios';
import https from 'https';

export default function UserReports() {
  const [formUpdate] = Form.useForm();

  const onFinish = (value: object) => {
    // setLoading(true);
    console.log('value', value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const axiosInstance: AxiosInstance = axios.create({
        baseURL: 'https://172.16.81.13:8006/api/v2/',
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
        auth: {
          username: 'tan',
          password: '54nudge54',
        },
      });

      const response = await axiosInstance.get('search', {
        params: {
          filename: 'V0003172-AIR.mxf',
        },
      });
      console.log('ddd: ', response.data);
    } catch (error) {
      console.error('error :', error);
    }
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
                    columns={{ base: 1, md: 2, xl: 2 }}
                    gap='20px'
                    mb='20px'
                  >
                    <Form.Item
                      name='clipName'
                      label={textTitle('Clip Name(ID)')}
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
                  </SimpleGrid>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, xl: 2 }}
                    gap='20px'
                    mb='20px'
                  >
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
                    <Form.Item
                      name='episodeTitle'
                      label={textTitle('Episode Title')}
                      rules={[
                        {
                          required: true,
                          message: 'Episode title is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      name='episodeNo'
                      label={textTitle('Episode No.')}
                      rules={[
                        {
                          required: true,
                          message: 'Episode No. is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      name='season'
                      label={textTitle('Season')}
                      rules={[
                        {
                          required: true,
                          message: 'Season is required',
                        },
                      ]}
                    >
                      <Select size='md' borderRadius='16px'>
                        {listSeason.map((e) => (
                          <option value={e.value} key={e.value}>
                            {e.label}
                          </option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name='titleEnglish'
                      label={textTitle('Title English')}
                      rules={[
                        {
                          required: true,
                          message: 'Title english is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      name='synopsis'
                      label={textTitle('Synopsis')}
                      rules={[
                        {
                          required: true,
                          message: 'Synopsis is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: 'Synopsis episode is required',
                        },
                      ]}
                      name='synopsisEpisode'
                      label={textTitle('Synopsis Episode')}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      name='genres'
                      label={textTitle('Genres')}
                      rules={[
                        {
                          required: true,
                          message: 'Genres is required',
                        },
                      ]}
                    >
                      <Select size='md' borderRadius='16px'>
                        {listGenres.map((e) => (
                          <option value={e.value} key={e.value}>
                            {e.label}
                          </option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name='tage'
                      label={textTitle('Tags')}
                      rules={[
                        {
                          required: true,
                          message: 'Tage is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' />
                    </Form.Item>
                    <Form.Item
                      name='startDate'
                      label={textTitle('Start Date')}
                      rules={[
                        {
                          required: true,
                          message: 'Start Date is required',
                        },
                      ]}
                    >
                      <Input size='md' borderRadius='16px' type='date' />
                    </Form.Item>
                    <Form.Item
                      name='expireDate'
                      label={textTitle('Expire Date')}
                    >
                      <Input size='md' borderRadius='16px' type='date' />
                    </Form.Item>
                  </SimpleGrid>

                  <SimpleGrid
                    columns={{ base: 1, md: 3, xl: 3 }}
                    gap='1px'
                    mb='20px'
                  >
                    <Form.Item
                      name='isvipa'
                      label='ON VIPA'
                      valuePropName='checked'
                    >
                      <SwitchField
                        // isChecked={true}
                        reversed={true}
                        fontSize='sm'
                        mb='20px'
                        id='1'
                      />
                    </Form.Item>
                    <Form.Item
                      name='isThaipbs'
                      label='ON THAIPBS'
                      valuePropName='checked'
                    >
                      <SwitchField
                        // isChecked={true}
                        reversed={true}
                        fontSize='sm'
                        mb='20px'
                        id='1'
                      />
                    </Form.Item>
                    <Form.Item
                      name='isAltv'
                      label='ON ALTV'
                      valuePropName='checked'
                    >
                      <SwitchField
                        // isChecked={true}
                        reversed={true}
                        fontSize='sm'
                        mb='20px'
                        id='1'
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
