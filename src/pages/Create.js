import React from 'react'
import { Typography } from '@material-ui/core'



export default function Create() {
  return (
    <div>      
      {/* <Typography 
      variant='h1' 
      color='primary'
      align='center'
      >
        Create a new note
      </Typography> */}
      {/* <Typography 
      variant='h1' 
      color='secondary'
      noWrap
      gutterBottom -- botom margin
      >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

      </Typography> */}
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom

      >
        Create a New Note
      </Typography>
    </div>
  )
}