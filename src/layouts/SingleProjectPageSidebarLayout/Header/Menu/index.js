import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
                color: white;
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                          color: white;
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: white;
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;

                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 0;
                                visibility: visible;
                                bottom: 0px;
                                
                            }
                        }
                    }
                }
            }
        }
`
);

function HeaderMenu() {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListWrapper
        sx={{
          display: {
            xs: 'none',
            md: 'block'
          }
        }}
      >
        <List disablePadding component={Box} display="flex">
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemText
              primaryTypographyProps={{
                noWrap: true,
                fontSize: '20px',
                marginRight: '8em'
              }}
              primary="C-Object"
            />
          </ListItem>
          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Getting Started"
            />
          </ListItem>

          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Tutorials"
            />
          </ListItem>

          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Public Datasets"
            />
          </ListItem>

          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Model Library"
            />
          </ListItem>

          <ListItem
            classes={{ root: 'MuiListItem-indicators' }}
            button
            component={NavLink}
            to="/dashboard"
          >
            <ListItemText
              primaryTypographyProps={{ noWrap: true }}
              primary="Help & Support"
            />
          </ListItem>
        </List>
      </ListWrapper>
    </>
  );
}

export default HeaderMenu;
