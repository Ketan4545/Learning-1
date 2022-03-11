import react, { useState, useEffect } from 'react';
import Chart from '../Drum/Chart';
import Table from '../Drum/Table';
import Box from '@mui/material/Box';
import {
  FormHelperText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from '@mui/material';
import axios from 'axios';

export default Text = ({ data, space, height }) => {
  const [layout, setLayout] = useState('');
  const [layout2, setLayout2] = useState('');
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);
  //const [widget, setWidget] = useState([]);
  const [a, setA] = useState({});
  // Fetch Reports
  useEffect(() => {
    const payload = {
      path: 'Reports',
    };

    axios
      .post(`https://sql-dash-backend.herokuapp.com/Listfetch`, payload)
      .then((res) => {
        const result = res.data;
        setArr1(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch Charts
  useEffect(() => {
    const payload = {
      path: 'Charts',
    };

    axios
      .post(`https://sql-dash-backend.herokuapp.com/Listfetch`, payload)
      .then((res) => {
        const result = res.data;
        setArr2(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch layout value
  useEffect(() => {
    const payload = {
      path: data['path'],
      name: data['name'],
    };

    axios
      .post('https://sql-dash-backend.herokuapp.com/Listdata', payload)
      .then((res) => {
        setLayout(res.data[space]);
        setA(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Updating function
  function updateLayout() {
    let payload;
    if (space === 'first') {
      // payload = {
      //   path: data["path"],
      //   name: data["name"],
      //   first: layout2,
      //   layout
      // };
      a['first'] = layout2;
      payload = a;
    } else {
      // payload = {
      //   path: data["path"],
      //   name: data["name"],
      //   second: layout2
      // };
      a['second'] = layout2;
      payload = a;
    }
    console.log('payload', payload);
    axios
      .post(`https://sql-dash-backend.herokuapp.com/Create`, payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Update value if it is changed
  useEffect(() => {
    if (layout2 != '' && layout2 != layout) {
      updateLayout();
    }
  }, [layout2]);

  if (layout != '') {
    //setWidget(layout.split("-"));
  }
  return (
    <div>
      <Box component="span">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-native-select">Layout</InputLabel>
          <Select
            native
            defaultValue=""
            id="grouped-native-select"
            label="Layout"
            value={layout}
            onChange={(e) => setLayout2(e.target.value)}
          >
            <option aria-label="None" value="" />
            <optgroup label="Report">
              {arr1.map((row) => (
                <option value={'Report-' + row}>{row}</option>
              ))}
            </optgroup>
            <optgroup label="Chart">
              {arr2.map((row) => (
                <option value={'Chart-' + row}>{row}</option>
              ))}
            </optgroup>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ p: 1 }}>
        {layout.split('-')[0] === 'table' ? (
          <Table height={height} />
        ) : (
          <Chart height={height} />
        )}
      </Box>
    </div>
  );
};
