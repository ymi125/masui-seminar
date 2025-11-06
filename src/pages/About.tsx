import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ mt: 12, px: { xs: 2, sm: 4, md: 6 } }}>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" gutterBottom>
        このゼミではITを活用して地域活性化を目指し、学生は実践的なプロジェクトに取り組んでいます。
        地域の企業や自治体と連携しながら、イベント企画やデータ分析など幅広い活動を行っています。
      </Typography>
    </Box>
  );
}
