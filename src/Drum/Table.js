import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './Table.css';

export default Table = ({ height }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(async () => {
    const res = await axios.get(
      `https://learning1717.pythonanywhere.com/api/aapl`
    );
    setData(res.data.data);
  }, []);

  console.log(data);
  var column = {};
  // get table column
  console.log(data[0]);
  if (data[0] != undefined) {
    column = { ...data[0] };
  }
  console.log(height);

  return (
    <div className="tableFixHead-1" style={{ height: height }}>
      <table id="customers-1">
        <thead>
          <tr>
            {Object.keys(column).map((row2) => (
              <th>{row2}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row1) => (
            <tr key={row1[0]}>
              {Object.values(row1).map((row2) => (
                <td>{row2}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
