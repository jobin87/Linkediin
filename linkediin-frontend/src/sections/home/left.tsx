import { Box, Typography, Button, Divider } from '@mui/material';

export function DashboardLeft() {
  return (
    <Box sx={{ width: 280, p: 1 ,ml:3}}>
      {/* Profile Card */}
      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden', mb: 2, boxShadow: 1 }}>
        <Box
          sx={{
            height: 80,
            backgroundImage: 'url(/images/cover.jpg)', // Optional: Background Cover
            backgroundSize: 'cover',
          }}
        />
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <Box sx={{ width: 64, height: 64, borderRadius: '50%', mx: 'auto', bgcolor: 'grey.300', mb: 1 }} />
          <Typography variant="subtitle1" fontWeight="bold">Your Name</Typography>
          <Typography variant="body2" color="text.secondary">Your Role</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Button fullWidth variant="outlined" size="small">+ Experience</Button>
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, overflow: 'hidden', boxShadow: 1, p: 2 }}>
        <Typography variant="body2">Profile viewers: <strong>83</strong></Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>Post impressions: <strong>624</strong></Typography>
      </Box>
    </Box>
  );
}
