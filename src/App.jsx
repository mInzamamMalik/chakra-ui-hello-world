import { Box } from "@chakra-ui/react"
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

import { Button, ButtonGroup } from '@chakra-ui/react'

import { useState } from "react";

function App() {

  const [alert, setAlert] = useState(false);



  return (
    <Box margin={10}>

      <Button onClick={() => {
        setAlert(true);
        setTimeout(() => { setAlert(false) }, 3000)
      }}>Show Alert</Button>

      <div style={{
        border: "1px solid green", position: "fixed",
        bottom: "1px",
        right: "1px"
      }}>

        {(alert) ?
          <Alert status='error' >
            <AlertIcon />
            <AlertTitle>This is Alert Title!</AlertTitle>
            <AlertDescription>This is Alert subtitle.</AlertDescription>
          </Alert>
          : null}

      </div>





    </Box>
  );
}

export default App;
