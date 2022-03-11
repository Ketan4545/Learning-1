import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';

export default function Chart({ height }) {
  const [data, setData] = useState([]);

  let type = 'column';

  useEffect(async () => {
    const res = await axios.get(
      `https://learning1717.pythonanywhere.com/api/aapl`
    );
    setData(res.data.data.splice(1200));
  }, []);

  console.log(data);
  let len = [];

  if (data[2]) {
    len = Object.keys(data[2]);
  }

  let arr = [];

  if (len.length > 2) {
    arr = [
      {
        data: data.map((a) => a[len[3]]),
        type: type === 'mixed' ? 'column' : type,
        name: len[3],
      },
      {
        data: data.map((a) => a[len[4]]),
        type: type === 'mixed' ? 'line' : type,
        name: len[4],
      },
    ];
  } else {
    arr = [
      {
        data: data.map((a) => a[len[1]]),
        type: type === 'mixed' ? 'column' : type,
        name: len[1],
      },
    ];
  }
  console.log(arr);
  const options = {
    title: {
      text: 'Chart',
    },
    chart: {
      height: height,
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      categories: data.map((a) => a[len[2]]),
      labels: {
        //autoRotationLimit: 10,
        rotation: -3,
      },
    },

    series: arr,
  };

  return (
    <div height={height}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        // height={height}
      />
    </div>
  );
}
