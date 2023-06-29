import React from 'react'
import {Typography} from '@material-ui/core'
import {Button} from '@material-ui/core'
import {ButtonGroup}from '@material-ui/core'
import {Container} from '@material-ui/core'


export default function Create() {
  return (
    <Container>      
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
      {/* <Button type='submit' color='default' >Submit</Button>
      <Button type='submit' color='secondary' variant='outlined'>Submit</Button>

      <ButtonGroup color='secondary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      <Button
      onClick={() => console.log('You clicked me')}
        type='submit'
        color='secondary'
        variant='contained'
      >
        Submit
      </Button>
    </Container>
  )
}