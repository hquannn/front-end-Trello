import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'


const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'white',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems:'center', gap: 2 }}>
        <Chip
          sx ={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Hquan board"
          clickable
        />
        <Chip
          sx ={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          clickable
        />
        <Chip
          sx ={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to drive"
          clickable
        />
        <Chip
          sx ={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx ={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />

      </Box>
      <Box sx={{ display: 'flex', alignItems:'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx ={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }

          }}
        >Invite</Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='hquan'>
            <Avatar alt="hquan"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5PrYGkUX7Zz_c_ikDAJvJlFcxkfSNFQwfw&usqp=CAU" />
          </Tooltip>
          <Tooltip title='hquan'>
            <Avatar alt="hquan"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5PrYGkUX7Zz_c_ikDAJvJlFcxkfSNFQwfw&usqp=CAU" />
          </Tooltip>
          <Tooltip title='hquan'>
            <Avatar alt="hquan"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5PrYGkUX7Zz_c_ikDAJvJlFcxkfSNFQwfw&usqp=CAU" />
          </Tooltip>
          <Tooltip title='hquan'>
            <Avatar alt="hquan"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5PrYGkUX7Zz_c_ikDAJvJlFcxkfSNFQwfw&usqp=CAU" />
          </Tooltip>
          <Tooltip title='hquan'>
            <Avatar alt="hquan"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5PrYGkUX7Zz_c_ikDAJvJlFcxkfSNFQwfw&usqp=CAU" />
          </Tooltip>
          <Tooltip title='hquan'>
            <Avatar alt="hquan"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH5PrYGkUX7Zz_c_ikDAJvJlFcxkfSNFQwfw&usqp=CAU" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar