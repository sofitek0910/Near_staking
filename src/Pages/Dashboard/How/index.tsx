import React, { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { HStack, Stack, VStack, Flex, Text, Image, Link, Center, Divider } from '@chakra-ui/react'
import {
  COINTYPE,
  usePrice, useStore
} from '../../../store';
import { StableCoins } from '../../../constants';
import { floor, getCoinId } from '../../../Util';
import EarnChart from './EarnChart';
import Earn from './Earn';
import Value from './Value';

const How: FunctionComponent = (props) => {
  const [denom, setDenom] = useState('USDC');
  const [year, setYear] = useState(10);
  const [amount, setAmount] = useState('125,000');

  const { state, dispatch } = useStore();
  const coinId = getCoinId(denom as COINTYPE);

  const re = /,/g;
  let value = re[Symbol.replace](amount, '');
  const _amount = parseFloat(value);// * state.price[coinId];
  const apr = StableCoins[coinId].apr;
  const apy = StableCoins[coinId].apy;

  let total = _amount * Math.pow(1 + apr / 365 / 100, year * 365);
  const interest = total - _amount;

  const otherApy = apy * 0.7;
  const data: any = [];
  let prev = _amount;
  let otherPrev = _amount;
  for (let i = 1; i <= 10; i++) {
    // const otherVal = floor(otherPrev * (1 + otherApy / 100)) * (1 + (Math.random() - 0.5) / 10);
    const val = floor(prev * (1 + apy / 100));
    const otherVal = floor(otherPrev * (1 + otherApy / 100));
    data[i - 1] = {
      time: i.toString(),
      value1: val,
      value2: otherVal
    }
    prev = val;
    otherPrev = otherVal;
  }

  return (
    <VStack
      pt={'52px'}
      w={'100%'}
      h={'100%'}
      rounded={'25px'}
      background={'#212121'}
      p={{ sm: '10px', md: '20px', lg: '59px' }}
      align={'baseline'}
    >

      <Text
        fontSize={'20px'}
        fontWeight={'860'}
        lineHeight={'24px'}
      >
        HOW MUCH CAN I EARN?
      </Text>
      <Stack
        direction={{ sm: 'column', md: 'row', lg: 'row' }}
        align={{ sm: 'baseline', md: 'center', lg: 'center' }}
        spacing={'51px'}
        w={'100%'}
      >
        <Earn
          denom={denom}
          setDenom={setDenom}
          amount={amount}
          setAmount={setAmount}
          year={year}
          setYear={setYear}
        />
        <Center
          height={'304px'}
          display={{ sm: 'none', md: 'block', lg: 'block' }}
        >
          <Divider orientation={'vertical'} />
        </Center>
        <Center
          width={'100%'}
          display={{ sm: 'block', md: 'none', lg: 'none' }}
        >
          <Divider orientation={'horizontal'} />
        </Center>
        <Value total={total} interest={interest} />
        <EarnChart data={data} />
      </Stack>
    </VStack>
  );
}
export default How;