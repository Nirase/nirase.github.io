import AdbIcon from "@mui/icons-material/Adb"
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'blue',
            textDecoration: 'none',
          }}
        >
          Mattias Smedman
        </Typography>
      </div>

    </Link>
  )
}

export default Logo;