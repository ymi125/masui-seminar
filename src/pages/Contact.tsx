import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box sx={{ mt: 12, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h3" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        ご質問やお問い合わせは以下のフォームから送信してください。
      </Typography>

      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
        <TextField label="お名前" variant="outlined" fullWidth />
        <TextField label="メールアドレス" variant="outlined" fullWidth />
        <TextField label="内容" variant="outlined" fullWidth multiline rows={4} />
        <Button variant="contained" color="primary">
          送信
        </Button>
      </Box>
    </Box>
  );
}
