import { Container, Typography } from "@mui/material";

export default function Group2() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>グループ①</Typography>
      <Typography variant="body1" paragraph>
        ここにグループ①の詳細説明を入れます。
        活動テーマやメンバー、地域・企業との連携内容を紹介します。
      </Typography>
      <Typography variant="body1" paragraph>
        写真や成果物もここに掲載可能です。
      </Typography>
    </Container>
  );
}
