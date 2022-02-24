import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { IconButton,Stack } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete'






const Reportone = () => {
    const params = useParams();
    const navigate = useNavigate();

    function editReport(){
      navigate("update")
    }

    return (
        <div>
            <h4>Ketan</h4>
            <Stack direction="row" spacing={2}>
             <IconButton
                    edge="end"
                    color="primary"
                    aria-label="delete"
                    size="small"
                    onClick={editReport}
                  >
                    <EditIcon />
                  </IconButton>
                     <IconButton
                    color="secondary"
                    edge="end"
                    aria-label="delete"
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton> 
                  </Stack>
        </div>
    );
}

export default Reportone;
