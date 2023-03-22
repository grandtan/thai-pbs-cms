import { Button, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react'
import { Image } from 'components/image/Image'
import logoWhite from 'img/layout/logoWhite.png'

export default function SidebarDocs () {
  const bgColor = 'linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
  const borderColor = useColorModeValue('white', 'navy.800')

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      me='20px'
      position='relative'
    >
     
     
      {/* <Link href='https://horizon-ui.com/pro'>
        <Button
          bg='whiteAlpha.300'
          _hover={{ bg: 'whiteAlpha.200' }}
          _active={{ bg: 'whiteAlpha.100' }}
          mb={{ sm: '16px', xl: '24px' }}
          color={'white'}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'
        >
          Upgrade to PRO
        </Button>
      </Link> */}
    </Flex>
  )
}
