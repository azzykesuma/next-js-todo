import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Link from "next/link"
import Box from '@mui/material/Box';
import { Avatar, Paper } from '@mui/material/';
import Button from '@mui/material/Button';
// icons
import DeleteIcon from '@mui/icons-material/Delete';
// html
import Head from 'next/head';


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:8000/acts')
  const data = await res.json()

  return {
    props : {todos : data}
  }
}


export default function Home({todos}) {

  const HandleDelete = async (id) => {
    window.location.reload();

    await fetch('http://localhost:8000/acts/' + id , {
      method : 'DELETE'
    })

    const newTodo = todos.filter(todo => todo.id !== id);
    return {
      props : {todos : newTodo}
    }
  }

  return (
    <>
      <Head>
        <title>Ninjas | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>
      <Container>
        <div className="margin"></div>
        <Typography
        variant="h3"
        color="primary"
        >To-Do list</Typography>

        <Typography
        variant="h6"
        color="secondary"
        marginTop='10px'
        >
          Add new notes <Link href="/NewTodo"><a>here</a></Link>
        </Typography>

        {/* outputing data */}

        {
          todos.map(item => (
            <div key={item.id}>
              <Box
              sx = {{
                padding : '10px',
                marginBottom : '10px',
                marginTop : '10px',
                borderRadius : '5px',
                border : '1px solid #e0e0e0',
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'space-between',
                padding : '10px;',
              }}
              className={item.tags}
              >
                <Box
                sx = {{
                  display : 'flex',
                  flexDirection : 'column',
                  gap : '10px'
                }}
                >
                  <Avatar>
                    {item.tags[0].toUpperCase()}
                  </Avatar>
                  <Typography
                  variant="body"
                  className={item.tags}
                  fontFamily={'Roboto'}
                  >
                    {item.act}
                  </Typography>
                </Box>
                <Box
                sx = {{
                  display : 'flex',
                  gap : '5px'
                }}
                >
                  <Paper
                  className = 'paperTags'
                  id = {item.tags}
                  >{item.tags}</Paper>
                  <Paper
                  className = 'paperTags'
                  id = {item.priority}
                  >{item.priority}</Paper>
                </Box>

                  <Button
                  onClick={() => HandleDelete(item.id)}
                  className="deleteBtn"
                  cursor="pointer"
                  >
                    <DeleteIcon/>
                  </Button>

              </Box>
            </div>
          ))
        }
      </Container>
    </>
  )
}
