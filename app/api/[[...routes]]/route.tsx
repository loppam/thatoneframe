/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import { colors } from 'frog/ui'
// import { z } from 'zod'

const app = new Frog({
  assetsPath: "/",
  basePath: "/api",
  hub: neynar({ apiKey: 'NEYNAR_FROG_FM' }),
  title: 'Frog Frame',
})

const apiUrl = "https://neynar.com";
// const reactionScheme = z.object


// Uncomment to use Edge Runtime
// export const runtime = 'edge'



app.frame('/', (c) => {
  // const { frameData } = c;
  // const { buttonIndex, fid, castId } = frameData;
  // console.log(c.res);

  return c.res({
    action:"/second",
    image: (
      <div style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem" 
      }}>
        Get FID
      </div>
    ),
    intents: [
      <Button  >Get FID</Button>,
      
    ],
  })
})


app.frame('/second', (c) => {


  return c.res({
    action:"/",
    image: (
      <div style={{
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "2rem" 
      }}>
        FID here
      </div>
    ),
    intents: [
 
      <Button>back</Button>,
      
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
