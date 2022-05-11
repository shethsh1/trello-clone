
import React, { useEffect, useState } from 'react'
import {
  Typography,
  Box,
  Button
} from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import CreateModalForm from '../projecttable/CreateModalForm'
import { getProjects } from '../../redux/slices/projectSlice'
import CircularProgress from '@mui/material/CircularProgress';
import ProjectTable from '../projecttable/ProjectTable'

export default function Home() {
  const [open, setOpen] = useState(false);
  const user = useAppSelector(state => state.auth.user) as user
  const projects = useAppSelector(state => state.project.projects)
  const projectFetching = useAppSelector(state => state.project.projectFetching)
  const dispatch = useAppDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchAll = async () => {
      await dispatch(getProjects())
    }
    fetchAll()
  }, [])

  return (
    <>

      <CreateModalForm open={open} handleClose={handleClose} />

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="h4">
          Welcome back {user.username}
        </Typography>

        <Button variant="outlined" onClick={handleClickOpen}>Create new project</Button>
      </Box>

      {projectFetching ?

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100%'
        }}>
          <CircularProgress />

        </Box>
        :

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 5
        }}>

          <Typography variant="caption" sx={{ opacity: 0.7 }}>
            {projects.length} projects, 3 completed, 0 in progress, 1 not active
          </Typography>

          <ProjectTable projects={projects} />


        </Box>
      }

    </>
  )
}

