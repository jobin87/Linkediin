import { Box, Card, CardContent, Typography } from '@mui/material';

export function DashboardRight() {
  return (
    <Box sx={{ width: 280, p: 2 }}>
      {/* Trending */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Trending Now</Typography>
          <Typography variant="body2">• International tourists shun the US</Typography>
          <Typography variant="body2">• GCC hiring zooms ahead of IT</Typography>
          <Typography variant="body2">• CEO exits on the rise</Typography>
          {/* More trending topics */}
        </CardContent>
      </Card>

      {/* Today's puzzles */}
      <Card>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>Today's puzzles</Typography>
          <Typography variant="body2">• Zip #41</Typography>
          <Typography variant="body2">• Tango #202</Typography>
          <Typography variant="body2">• Queens #362</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
