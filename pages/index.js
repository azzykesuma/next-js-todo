import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Link from "next/link"
import Box from '@mui/material/Box';
import { Avatar, Paper } from '@mui/material/';
// icons
import DeleteIcon from '@mui/icons-material/Delete';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/acts')
  const data = await res.json()

  return {
    props : {todos : data},
    revalidate : 1
  }
}


export default function Home({todos}) {

  const HandleDelete = async (id) => {
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
                  >{item.tags}</Paper>
                  <Paper
                  className = 'paperTags'
                  >{item.priority}</Paper>
                </Box>
                <Box
                sx = {{
                  backgroundColor : '#B20600',
                  borderRadius : '50%',
                  padding : '5px',
                  display : 'flex',
                  alignItems : 'center',
                  justifyContent : 'center'
                }}
                >
                  <DeleteIcon
                  className="deleteBtn"
                  cursor="pointer"
                  onClick={() => HandleDelete(item.id)}
                  />

                </Box>
              </Box>
            </div>
          ))
        }
      </Container>
    </>
  )
}
