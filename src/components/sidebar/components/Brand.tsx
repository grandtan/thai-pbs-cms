// Chakra imports
import { Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';
import { logoThaipbs } from 'utils/base64';
import Image from 'next/image';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems='center' flexDirection='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <div style={{ marginRight: 18 }}>
        <Image src={logoThaipbs} width='140' height='60' alt='logo' />
      </div>

      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
