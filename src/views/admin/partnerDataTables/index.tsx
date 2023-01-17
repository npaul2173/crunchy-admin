import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import {PartnerList} from './List-view/index'

export interface PartnerTable {
  id: number
  first_name: string
  last_name: string
  email: string
  gender: string
  ip_address: string
}

const Partners = () => {
  const [data, setdata] = useState<PartnerTable[]>([])
  useEffect(() => {
    fetch('https://my.api.mockaroo.com/people.json?key=766e7cd0')
      .then( async (response) => await response.json())
      .then((dataReceive) => {
        setdata(dataReceive)
        // console.log('response from server',data)
      })
      .catch((err) => console.log('error', err))
  }, []);
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <PartnerList data={data}/>
    </Box>
  );
};

export {Partners}