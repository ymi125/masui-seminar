import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(rgba(238, 174, 175, 0.85), rgba(214, 151, 161, 0.85)), url(/images/header-bg.jpg) center/cover no-repeat',
        backdropFilter: 'blur(6px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
      }}
    >
     <Toolbar 
  sx={{ 
    // PCサイズ(md, lg)の高さを、画像で最も近いと思われる 64px に変更します
    height: { 
      xs: 56,  // スマホ
      sm: 64,  // タブレット
      md: 64,  // 小型PC (90px/100pxから64pxに調整)
      lg: 64   // 大型PC (100pxから64pxに調整)
    }, 
    px: 4 
  }}
>

        <Typography
          variant="h5"
          sx={{ flexGrow: 1, color: '#fff', fontWeight: 600, letterSpacing: 0.5 }}
        >
          Zemi Site
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          {pages.map((page) => (
            <Button
              key={page.label}
              component={RouterLink}
              to={page.path}
              sx={{
                color: '#fff',
                fontWeight: 500,
                position: 'relative',
                transition: 'all 0.3s ease',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: 0,
                  left: 0,
                  backgroundColor: '#fff',
                  transition: '0.3s',
                },
                '&:hover::after': {
                  width: '100%',
                },
                '&:hover': {
                  color: '#d197a1',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {page.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
