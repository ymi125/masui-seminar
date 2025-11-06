import { Container, Typography } from "@mui/material";

export default function Group1() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>東松島班</Typography>
      <Typography variant="body1" paragraph>
      東松島班では主に地域の方々に食育などの健康促進を目的とした活動を行っています。
        活動テーマやメンバー、地域・企業との連携内容を紹介します。
      </Typography>
      <Typography variant="body1" paragraph>
        写真や成果物もここに掲載可能です。
      </Typography>
    </Container>
  );
}
