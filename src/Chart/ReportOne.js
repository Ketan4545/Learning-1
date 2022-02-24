import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { IconButton,Stack } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios';







const Reportone = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [send, setSend] = useState(false)

    function editReport(){
      navigate("update")
    }

    function deleteChart(){
      const payload = {
        path : "Charts",
        name: params['name']
      };

      axios.post(`https://sql-dash-backend.herokuapp.com/Delete`, payload).then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/chart");
      }).catch((error) => {
        console.log(error);
    });
    }

  
      useEffect(() => {
        if (send === true){
        deleteChart()
          }
          setSend(false)
      }, [send]);


    return (
        <div>
            <h4>{params['name']}</h4>
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
                    onClick={()=>setSend(true)}
                  >
                    <DeleteIcon />
                  </IconButton> 
                  </Stack>
                 
        </div>
    );
}

export default Reportone;
