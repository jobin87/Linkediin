import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';

export function DashboardMiddle() {
  return (
    <Box sx={{ flex: 1, p: 2, maxWidth: 500 }}>
      

      {/* Posts List */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">Post Title</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Here will be the post content shown.
          </Typography>
        </CardContent>
      </Card>
      {/* More Posts */}
    </Box>
  );
}
