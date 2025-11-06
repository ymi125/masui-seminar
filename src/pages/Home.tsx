import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { 
  CssBaseline, 
  Card, 
  CardActionArea, 
  CardContent, 
  CardMedia,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider 
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

// --- GroupCard Component ---
interface GroupCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

function GroupCard({ title, description, imageUrl, link }: GroupCardProps) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}>
      <CardActionArea component={RouterLink} to={link} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="160"
          image={imageUrl}
          alt={title}
          onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/600x400/EEE/CCC?text=${title.replace(/\s/g, '+')}`; }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// --- Home Component ---
export default function Home() {
  const groups = [
    { title: "グループ①", description: "地域の魅力発信やPR活動を担当", imageUrl: "/images/group1.jpg", link: "/group1" },
    { title: "グループ②", description: "データやIT技術を活かした地域課題の分析", imageUrl: "/images/group2.jpg", link: "/group2" },
    { title: "グループ③", description: "地域イベントやワークショップの企画・運営", imageUrl: "/images/group3.jpg", link: "/group3" },
    { title: "グループ④", description: "企業や自治体と協力し、新しいサービスを考案", imageUrl: "/images/group4.jpg", link: "/group4" },
  ];

  // 活動記録のダミーデータ
  const newsItems = [
    { date: '2025/10/15', title: '地域連携プロジェクトAの最終報告会を実施しました。' },
    { date: '2025/09/28', title: '〇〇株式会社との共同ワークショップを開催しました。' },
    { date: '2025/09/10', title: '夏季ハッカソンで見事チームαが優勝しました！' },
    { date: '2025/08/22', title: '新メンバー向けにGit/GitHub勉強会を行いました。' },
  ];

 return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        pt: { 
            xs: '72px',
            sm: '80px',
            md: '80px',  
            lg: '80px'   
        },
        pb: 4,
        backgroundColor: '#f7f7f7'
      }}
    >
      <CssBaseline />
      <Container 
          maxWidth={false}
          sx={{
            // width: '100%' を明示的に指定して、コンテナが全幅に広がるようにします
            width: '100%',
            px: { xs: 2, sm: 3 }
          }}
      > 
        <Typography variant="h3" gutterBottom sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        舛井ゼミへようこそ✨
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          私たちのゼミでは、企業や行政と連携しながら地域に新しい価値を生み出す活動を行っています。
          学生は4つのグループに分かれ、それぞれ実践的なプロジェクトに取り組んでいます。
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            maxWidth: '1200px',
            mx: 'auto',
          }}
        >
          {groups.map((group, idx) => (
            <GroupCard key={idx} {...group} />
          ))}
        </Box>

        {/* --- News & Activities Section --- */}
        <Box sx={{ mt: 8, mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            お知らせ・活動記録
          </Typography>
          <Card sx={{ maxWidth: '800px', mx: 'auto', mt: 3, borderRadius: 2 }}>
            <List sx={{ padding: 0 }}>
              {newsItems.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                      <ListItemText
                        primary={item.title}
                        secondary={item.date}
                      />
                    </ListItemButton>
                  </ListItem>
                  {index < newsItems.length - 1 && <Divider component="li" />}
                </React.Fragment>
              ))}
            </List>
          </Card>
        </Box>

      </Container>
    </Box>
  );
}

