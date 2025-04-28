import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';

export function DashboardMiddle() {
  return (
    <Box sx={{ flex: 1, p: 2, maxWidth: 600 }}>
      {/* Start a Post */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder="Start a post"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="text" size="small">Media</Button>
            <Button variant="text" size="small">Event</Button>
            <Button variant="text" size="small">Write Article</Button>
          </Box>
        </CardContent>
      </Card>

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
