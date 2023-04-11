import {Box, Button } from "@mui/material"
import { Link } from "react-router-dom";
const HeaderItemList = () =>
{

    const pages = [
      {
        page: 'Contact',
        url: '/contact'
      }
    ]
    return ( 
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Link to={`${page.url}`} style={{textDecoration: "none"}}>
          <Button
            key={page.page}
            sx={{ my: 2, color: 'blue', display: 'block' }}
          >
            {page.page}
          </Button>
          
          </Link>
          
        ))}
      </Box>
    )
}

export default HeaderItemList;