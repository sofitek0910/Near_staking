import React, { FunctionComponent } from 'react';
import { VStack, Stack, Text, Divider, HStack, Image, Flex, Button, Tooltip, Link } from '@chakra-ui/react'
import {BigNumber} from 'bignumber.js';

import { StableCoins } from '../../../constants';
import Warning from "./../../../assets/Warning.svg"
import { 
  OpenDepositModal, 
  OpenWithdrawModal, 
  useStore, 
  usePrice
} from '../../../store';
import AnimationNumber from '../../Components/AnimationNumber';

const Total: FunctionComponent = (props) => {
  const {state, dispatch} = useStore();

  let coins = StableCoins.filter((coin) => coin.upcoming == false);
  let total = new BigNumber(0);

  for (let i = 0; i < coins.length; i++) {
    let amount = new BigNumber(state.userInfos[i].amount + state.userInfos[i].reward_amount);
    amount = amount.multipliedBy(state.price[i]).dividedBy(10 ** coins[i].decimals);

    total = total.plus(amount);
  }

  return (
    <VStack 
      w={'100%'}
      rounded={'25px'} 
      background={'#212121'} 
      align={'center'}
      spacing={'56px'}
      h='288px'
      px={{sm:'10px', md:'20px', lg:'50px'}}
      py={{sm:'10px', md:'20px', lg:'56px'}}
      mt='53px'
    >
      <VStack w={'100%'} align={'baseline'} spacing='5px'>
        <HStack spacing={'10px'}>
          <Text
            fontSize={'20px'}
            fontWeight={'860'}
            lineHeight={'20px'}
          >
            TOTAL BALANCE
          </Text>
          <Tooltip 
            label="The total value of all your deposits and accumulated interest - calculated in USD" 
            background={'#C4C4C4'} hasArrow 
            placement='top-start' 
            color={'black'}
          > 
            <Image src={Warning} w={'13px'}/>
          </Tooltip>
        </HStack>
        <HStack align={'baseline'}>
          <Text
            fontSize={'35px'}
            fontWeight={'860'}
            lineHeight={'35px'}
          >
            <AnimationNumber value={total.toNumber()} />
          </Text>
          <Text
            fontSize={'20px'}
            fontWeight={'860'}
            lineHeight={'36px'}
          >
            USD
          </Text>
        </HStack>
      </VStack>
      <HStack
        w={'100%'}
        spacing={'24px'}
        justify={'end'}
      >
        <Link href="#earn_deposit">
        <Button w={'200px'} h={'45px'} background={'#493C3C'} rounded={'25px'}>
          <Text
            fontSize={'13px'}
            fontWeight={'860'}
            lineHeight={'15px'}
            // onClick={() => {
            //   if(state.connected)
            //     OpenDepositModal(state, dispatch, 'USDC')
            //   else if(state.openConnectWalletModal != undefined)
            //     state.openConnectWalletModal();
            // }}    
          >
            Save More
            {/* {state.connected &&
              "Deposit"
            }
            {!state.connected &&
              "Connect Wallet"
            } */}
          </Text>
        </Button>
        </Link>
        {/* <Button 
          w={'200px'} 
          h={'45px'} 
          background={'#212121'} 
          border={'solid 1px'}
          borderColor={'#CEBFBF'} 
          rounded={'25px'}
          onClick={() => {
            if(state.connected)
              OpenWithdrawModal(state, dispatch, 'USDC')
            else if(state.openConnectWalletModal != undefined)
              state.openConnectWalletModal();
          }}
        >
          <Text
            fontSize={'13px'}
            fontWeight={'860'}
            lineHeight={'15px'}              
          >
            {state.connected &&
              "Withdraw"
            }
            {!state.connected &&
              "Connect Wallet"
            }
          </Text>
        </Button> */}
      </HStack>
    </VStack>

  );
}
export default Total;