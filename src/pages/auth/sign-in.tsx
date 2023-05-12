import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import {
  Box,
  FormLabel,
  Heading,
  useColorModeValue,
  Text,
  Button as ButtonCus,
} from '@chakra-ui/react';
import { HSeparator } from 'components/separator/Separator';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const textColor = useColorModeValue('navy.700', 'white');

  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '14px 17px 40px 4px rgba(112, 144, 176, 0.06)'
  );
  const [show, setShow] = React.useState(false);

  const onFinish = (values: any) => {
    setLoading(true);

    // ตรวจสอบข้อมูลการ Login
    if (values.username === 'admin@gmail.com' && values.password === '1234') {
      message.success('Login successful');
      router.push('/admin/default');
    } else {
      message.error('Incorrect username or password');
    }

    // setLoading(false);
  };
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)';
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // ตั้งค่าความสูงเป็น 100% ของ viewport height
      }}
    >
      <div
        style={{
          borderRadius: 4,
          width: 1000,
          height: 600,
          backgroundColor: '#FDFDFD',
          boxShadow: shadow,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            width: '35%',
            background: bgColor,
            borderRadius: '4px 0px 0px 4px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              padding: 40,
              color: 'white',
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            WELCOME TO
          </div>
        </div>
        <div style={{ width: '65%', padding: 100 }}>
          {' '}
          <Box me='auto'>
            <Heading color={textColor} fontSize='36px' mb='10px'>
              Sign In
            </Heading>
            <HSeparator />
          </Box>
          <Form form={form} onFinish={onFinish} style={{ marginTop: 24 }}>
            <Form.Item
              label=''
              name='username'
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input size='large' />
            </Form.Item>

            <Form.Item
              label=''
              name='password'
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password size='large' />
            </Form.Item>

            <Form.Item>
              <div style={{ textAlign: 'center' }}>
                <ButtonCus
                  onClick={() => form.submit()}
                  fontSize='sm'
                  variant='brand'
                  fontWeight='500'
                  w={200}
                  h='50'
                  // mb='24px'
                >
                  Sign In
                </ButtonCus>
              </div>
            </Form.Item>
          </Form>
        </div>

        {/* <h1>Sign in</h1> */}
      </div>
    </div>
  );
};

export default LoginPage;
