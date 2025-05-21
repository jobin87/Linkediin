import { Box } from "@mui/material"
import { DashboardLeft } from "src/sections/home/left"
import { DashboardMiddle } from "../post/middle"
import { DashboardRight } from "../post/right"


export const  PostView =()=>{

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'grey.100', minHeight: '100vh' }}>
      <DashboardLeft />
      <DashboardMiddle />
      <DashboardRight />
    </Box> 
    )

}