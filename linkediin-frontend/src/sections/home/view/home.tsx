import { Box } from "@mui/material"
import { DashboardLeft } from "../left"
import { DashboardMiddle } from "../middle"
import { DashboardRight } from "../right"


export const  Home =()=>{

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'grey.100', minHeight: '100vh' }}>
      <DashboardLeft />
      <DashboardMiddle />
      <DashboardRight />
    </Box>
    )

}