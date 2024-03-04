import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width:'100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '*::-webkit-scrollbar-track': { m: 2 }
      }}>
        {/* Box Colum */}
        <ListColumns />
      </Box>

    </Box>
  )
}

export default BoardContent