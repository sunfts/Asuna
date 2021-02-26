import { Heading, Icon, Stack, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { FaDatabase } from 'react-icons/fa';
import { RiDoorOpenFill, RiMoneyDollarBoxFill } from 'react-icons/ri';
import { SiFormstack } from 'react-icons/si';

import webRoutes from '../../helpers/webRoutes';
import CreationModal from './CreationModal';

const SingleMenuCard = forwardRef(
  (
    {
      onClick,
      href,
      headingText,
      description,
      icon,
      gradientStart,
      gradientEnd,
      gradientType,
      isClickable,
    },
    ref
  ) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <>
        <a href={href} onClick={onClick} ref={ref}>
          <VStack
            bg="twitter.400"
            p={5}
            w={[275, 400]}
            h={[175, 200]}
            justify="center"
            spacing={5}
            borderRadius="md"
            bgGradient={`linear(${gradientType}, ${gradientStart}, ${gradientEnd})`}
            cursor="pointer"
            _hover={{
              opacity: 0.7,
              transform: 'scale(1.05)',
              transition: 'all 0.5s ease',
            }}
            onClick={() => (isClickable ? setModalOpen(true) : null)}
          >
            <Heading fontSize="lg">{headingText}</Heading>
            <Text textAlign="center">{description}</Text>
            <Icon as={icon} boxSize="30px" />
          </VStack>

          <CreationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </a>
      </>
    );
  }
);

const MenuCard = () => {
  return (
    <>
      <Heading fontSize="md">Welcome, Admin Dzulfiqar!</Heading>
      <VStack spacing={5} mt={10}>
        <Stack direction={['column', 'column', 'row']} spacing={5}>
          <NextLink href={webRoutes.adminOrders} passHref>
            <SingleMenuCard
              headingText="All Orders"
              description="See all orders here!"
              icon={FaDatabase}
              gradientStart="#a5dd72"
              gradientEnd="#83c77c"
              gradientType="to-br"
            />
          </NextLink>
          <SingleMenuCard
            headingText="Accept Visitors"
            description="Check in a visitor here!"
            icon={RiDoorOpenFill}
            gradientStart="#ff4b2b"
            gradientEnd="#ff416c"
            gradientType="to-bl"
          />
        </Stack>
        <Stack direction={['column', 'column', 'row']} spacing={5}>
          <SingleMenuCard
            headingText="Entity Information"
            description="Check the data of a floor, room, or an employee!"
            icon={SiFormstack}
            gradientStart="#f5c042"
            gradientEnd="#f8cc47"
            gradientType="to-tr"
            isClickable
          />
          <SingleMenuCard
            headingText="See Earnings"
            description="Check all earnings and see profits!"
            icon={RiMoneyDollarBoxFill}
            gradientStart="#8f94fb"
            gradientEnd="#4e54c8"
            gradientType="to-tl"
          />
        </Stack>
      </VStack>
    </>
  );
};

SingleMenuCard.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  headingText: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.instanceOf(Object).isRequired,
  gradientStart: PropTypes.string.isRequired,
  gradientEnd: PropTypes.string.isRequired,
  gradientType: PropTypes.string.isRequired,
  isClickable: PropTypes.bool,
};

SingleMenuCard.defaultProps = {
  isClickable: false,
};

export default MenuCard;
