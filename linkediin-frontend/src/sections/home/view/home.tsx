import { Box } from "@mui/material"
import { DashboardLeft } from "../left"
import { DashboardMiddle } from "../middle"
import { DashboardRight } from "../right"


export const  Home =()=>{

    return (
      <Box sx={{ display: 'flex',bgcolor: '#fcf8f4', minHeight: '100vh',p:"0px 0px 0px 130px"}}>
      <DashboardLeft />
      <DashboardMiddle />
      <DashboardRight />
    </Box>
    )

}