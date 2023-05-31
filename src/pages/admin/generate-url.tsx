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
import copy from 'copy-to-clipboard';

export default function Generate() {
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [url, setUrl] = useState<string>('');
  const [isCopy, setIsCopy] = useState(false);

  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  useEffect(() => {
    if (!url) setIsCopy(false);
  }, [url]);

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

  const handleGenerate = () => {
    setIsCopy(true);
    copy('http://localhost:3000/auth/sign-in?id=' + url);
    openNotificationWithIcon('success', 'Generated');
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
                  {'Generate URL'}
                </Text>
              </Flex>

              <div style={{ padding: 40 }}>
                <InputAntd
                  size='large'
                  placeholder='Please Enter a URL'
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  onClick={() => handleGenerate()}
                  fontSize='sm'
                  variant='brand'
                  fontWeight='500'
                  w={200}
                  h='50'
                  mb='24px'
                  disabled={url ? false : true}
                >
                  {isCopy ? 'Copied' : 'Generate'}
                </Button>
              </div>
            </Card>
          </SimpleGrid>
        </Spin>
      </Box>
    </AdminLayout>
  );
}
