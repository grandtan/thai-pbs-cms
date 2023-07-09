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
import React, { useEffect, useState } from 'react';
import { DatePicker, Form, notification, Spin, Switch } from 'antd';
import { listGenres, listSeason } from 'utils/list';
import { LoadingOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import Upload from 'views/admin/profile/components/Upload';
import Download from 'views/admin/profile/components/Download';
import axios, { AxiosInstance } from 'axios';
import https from 'https';
import { Input as InputAntd, Select as SelectAntd } from 'antd';
import {
  FormUpdate,
  MetadataAssetsRespone,
  NotificationType,
  SearchByNameRespone,
} from 'types/default';

interface Value {
  userName: string;
  name: string;
  phone: string;
}

export default function CreateUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [formUpdate] = Form.useForm();

  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const textTitle = (text: string) => (
    <Text color={textColorPrimary} fontWeight='500' fontSize='md' mb='4px'>
      {text}
    </Text>
  );

  const openNotificationWithIcon = (status: NotificationType, text: string) => {
    api[status]({
      message: '',
      description: textTitle(text),
    });
  };

  const onFinish = (value: Value) => {
    console.log(value);
  };

  return (
    <AdminLayout>
      {contextHolder}

      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        <Spin
          tip=''
          size='large'
          spinning={isLoading}
          indicator={
            <LoadingOutlined style={{ fontSize: 60, color: '#422AFB' }} spin />
          }
        >
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
                  {'Create User'}
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
                      name='userName'
                      label={textTitle('User Name')}
                      rules={[
                        {
                          required: true,
                          message: 'User Name is required',
                        },
                      ]}
                    >
                      <InputAntd size='large' />
                    </Form.Item>
                    <Form.Item
                      name='name'
                      label={textTitle('Name')}
                      rules={[
                        {
                          required: true,
                          message: 'Name is required',
                        },
                      ]}
                    >
                      <InputAntd size='large' />
                    </Form.Item>
                  </SimpleGrid>
                  <SimpleGrid
                    columns={{ base: 1, md: 2, xl: 2 }}
                    gap='20px'
                    mb='20px'
                  >
                    <Form.Item
                      name='phone'
                      label={textTitle('Phone')}
                      //   rules={[
                      //     {
                      //       required: true,
                      //       message: 'Phone is required',
                      //     },
                      //   ]}
                    >
                      <InputAntd size='large' />
                    </Form.Item>
                  </SimpleGrid>
                </Form>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
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
                    Submit
                  </Button>
                </div>
              </div>
            </Card>
          </SimpleGrid>
        </Spin>
      </Box>
    </AdminLayout>
  );
}
