import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Grow, Grid } from '@material-ui/core'

// Actions
import { getPosts } from '../../actions/posts'

// Components
import Posts from '../Posts/Posts'
import Form from '../Form/Form'

// Styles
import useStyles from './styles'

const Home = () => {
  const [currentId, serCurrentId] = useState(0)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid className={ classes.mainContainer } container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={ serCurrentId }/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={ currentId } setCurrentId={ serCurrentId }/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home
