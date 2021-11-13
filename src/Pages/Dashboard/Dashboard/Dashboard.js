import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  useRouteMatch,
  Link
} from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import ManageOrder from '../ManageOrder/ManageOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import Review from '../Review/Review';
import ManageUser from '../ManageUser/ManageUser';
import { Spinner, Button } from 'react-bootstrap';

// material icon are here
import HomeIcon from '@mui/icons-material/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import ReviewsIcon from '@mui/icons-material/Reviews';




const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {user, admin, loading, logOut} = useAuth();

  if(loading) {
    return <Spinner animation='border' />
}

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
    
      <Link className='d-block text-start text-decoration-none m-2' to='/home'>
        <HomeIcon /> Home</Link>

      

      {admin ?
        <>
          <Link className='d-block text-start text-decoration-none m-2' to={`${url}`}> <ShoppingCartIcon /> Manage Order</Link>
          <Link className='d-block text-start text-decoration-none m-2' to={`${url}/manageUser`}><ManageAccountsIcon /> Manage Users</Link>
          <Link className='d-block text-start text-decoration-none m-2' to={`${url}/admin`}><AdminPanelSettingsRoundedIcon /> Make Admin</Link>
          <Link className='d-block text-start text-decoration-none  m-2' to='/addproduct'><AddCircleOutlineIcon /> Add Product</Link>           
        </>
                                                                           
        :
        
        <>
          <Link className='d-block text-start text-decoration-none m-2' to={`${url}`}>
          <ShoppingCartIcon /> My Order</Link>
          <Link className='d-block text-start text-decoration-none m-2' to={`${url}/review`}>
          <ReviewsIcon /> Review </Link>
          
        </>
      }
      

      <Button onClick={logOut} className='ms-3 bg-danger' size='sm'>Logout</Button>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {user.displayName} Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>

            <Route exact path={path}>
               {admin ?
                  <ManageOrder />
                  :
                  <MyOrder />
              }
            </Route>

            <Route path={`${path}/manageUser`}>
               <ManageUser></ManageUser>
            </Route>

            <Route path={`${path}/admin`}>
               <MakeAdmin></MakeAdmin>
            </Route>

            <Route path={`${path}/review`}>
               <Review></Review>
            </Route>

      </Switch>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
