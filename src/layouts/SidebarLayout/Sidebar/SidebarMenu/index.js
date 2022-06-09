import { useContext, useEffect, useState } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import CheckBoxTwoToneIcon from '@mui/icons-material/CheckBoxTwoTone';
import ChromeReaderModeTwoToneIcon from '@mui/icons-material/ChromeReaderModeTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import CameraFrontTwoToneIcon from '@mui/icons-material/CameraFrontTwoTone';
import DisplaySettingsTwoToneIcon from '@mui/icons-material/DisplaySettingsTwoTone';
import { Drawer, Divider, useTheme, lighten, darken } from '@mui/material';

import axios from 'axios';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: gray;
        
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.trueWhite[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: gray;
            color: ${theme.colors.alpha.trueWhite[100]};

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  const [data1, setDatat1] = useState([]);

  const sidebar = () => {
    data1.map((data) => {
      console.log(data.Name);
    });
    return;
  };

  return (
    <>
      <div
        style={{
        
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px'

        }}
      >
        <img
          style={{
            height: '100px',
            width: '100px',
            borderRadius: '50%',
            backgroundColor: 'black',
            
          }}
          src="https://issm.ai/wp-content/uploads/2021/09/%D8%A7.png"
          alt="new"
        />
      </div>

     

      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div" style={{backgroundColor:'black',  borderRadius: '10px', }} >
                <Button
                style={{color: 'white'}}
                
                // disableRipple
                // component={RouterLink}
                // onClick={closeSidebar}
                // to="/login"
                // startIcon={<DesignServicesTwoToneIcon />}
                >
                                  Overview
                </Button>
                
              </ListItem>

              <ListItem component="div">
                <Button
                // disableRipple
                // component={RouterLink}
                // onClick={closeSidebar}
                // to="/login"
                // startIcon={<DesignServicesTwoToneIcon />}
                >
                  Upload
                </Button>
                
              </ListItem>

              <ListItem component="div">
                <Button
                // disableRipple
                // component={RouterLink}
                // onClick={closeSidebar}
                // to="/login"
                // startIcon={<DesignServicesTwoToneIcon />}
                >
                  Anotate
                </Button>
                
              </ListItem>

              <ListItem component="div">
                <Button
                // disableRipple
                // component={RouterLink}
                // onClick={closeSidebar}
                // to="/login"
                // startIcon={<DesignServicesTwoToneIcon />}
                >
                  Classes
                </Button>
                
              </ListItem>

              
              <ListItem component="div">
                <Button
                // disableRipple
                // component={RouterLink}
                // onClick={closeSidebar}
                // to="/login"
                // startIcon={<DesignServicesTwoToneIcon />}
                >
                  Documentation
                </Button>
                
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>
        <Divider
              sx={{
                mt: theme.spacing(0),
                mx: theme.spacing(2),
                background: theme.colors.alpha.trueWhite[10]
              }}
            />
       
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
