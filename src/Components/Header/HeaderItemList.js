import {Box, Button } from "@mui/material"
const HeaderItemList = () =>
{
    const pages = ['Products', 'Pricing', 'Blog'];

    return ( 
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            sx={{ my: 2, color: 'blue', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    )
}

export default HeaderItemList;