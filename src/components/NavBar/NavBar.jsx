import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button } from "@mui/material";
import { Logo } from "../Icon/Logo";
import { useState } from "react";
import {} from '../../styles/navbar.scss';
import { NavLink } from "react-router-dom";
import Modal from 'react-modal';
import { FormularioAlta } from '../Formulario/Formulario';

const pages = ['Categorias', 'Nosotros', 'Publicar'];
const settings = [ 'Perfil', 'Cuenta', 'Dashboard', 'Cerrar Sesión' ];


export const NavBar = (props) => {


  const { color } = props;
  const [ anchorNav, setAnchorNav ] = useState(null);
  const [ anchorUser , setAnchorUser ] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  // const handleOpenUserMenu = (event) => {
  //   setAnchorUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  const [categories, about, blog, edit] = pages;

  return (
    <AppBar position="static"  className={color}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
         
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{ display: { xs: 'none', md: 'flex' }} }
          >
             <Logo href="/" width={200} height={60} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo href="/" width={200} height={60}/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end'}}>
            {/* {pages.map((page) => (
              
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  width: '10%', 
                }}
              >
                {x}
              </Button>
            ))} */}
           
            <NavLink to="/categories/1" className="links-decoration">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  width: '100%',
                }}
              >
                {categories}
              </Button>
              </NavLink>

              
              <Button
                onClick={openModal}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  width: '10%', 
                }}
              >
                {blog}
              </Button>
              <Modal  className='modal' isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <FormularioAlta cerrar={closeModal}/>
              </Modal>
              
              <NavLink to="/nosotros" className="links-decoration">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  width: '100%', 
                }}
              >
                {about}
              </Button>
              </NavLink>
          </Box>

          <Box sx={{ flexGrow: 0, width: '5%' }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Victor" src="../../static/images/Avatar.png" />
              </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>      
    </AppBar>

    
  )
}