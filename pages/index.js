import { Container } from "@mui/material"
import { Typography } from "@mui/material"
import Link from "next/link"
import Box from '@mui/material/Box';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/acts')
  const data = await res.json()

  return {
    props : {todos : data}
  }
}


export default function Home({todos}) {

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
                backgroundColor: '#efebe9',
                padding : '10px',
                marginBottom : '10px',
                marginTop : '10px',
                borderRadius : '5px'
              }}
              >
                <Typography
                variant="body"
                color="secondary"
                >
                  {item.act}
                </Typography>
              </Box>
            </div>
          ))
        }
      </Container>
    </>
  )
}
