import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'

const DashboardLayout = ({ title, children }) => {
  return (
    <Flex>
        <Sidenav />
        <Box flexGrow={1}>
          <TopNav title={title}/>
          <Box px="4">{children}</Box>
        </Box>
      </Flex>
  )
}

export default DashboardLayout