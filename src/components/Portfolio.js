import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import Footer from './Footer';

const TD = {
  'Meta Data': {
    '1. Information': 'Daily Prices (open, high, low, close) and Volumes',
    '2. Symbol': 'TD.TRT',
    '3. Last Refreshed': '2021-08-26',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2021-08-26': {
      '1. open': '85.8400',
      '2. high': '86.0000',
      '3. low': '83.6900',
      '4. close': '83.7000',
      '5. volume': '4730234',
    },
    '2021-08-25': {
      '1. open': '85.7800',
      '2. high': '86.4700',
      '3. low': '85.7100',
      '4. close': '85.7500',
      '5. volume': '6491100',
    },
  },
};
const AC = {
  'Meta Data': {
    '1. Information': 'Daily Prices (open, high, low, close) and Volumes',
    '2. Symbol': 'AC.TRT',
    '3. Last Refreshed': '2021-08-26',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2021-08-26': {
      '1. open': '24.6700',
      '2. high': '25.0500',
      '3. low': '24.5700',
      '4. close': '24.7600',
      '5. volume': '1149001',
    },
    '2021-08-25': {
      '1. open': '25.0000',
      '2. high': '25.2800',
      '3. low': '24.6200',
      '4. close': '24.8100',
      '5. volume': '1955300',
    },
  },
};

const CGX = {
  'Meta Data': {
    '1. Information': 'Daily Prices (open, high, low, close) and Volumes',
    '2. Symbol': 'CGX.TRT',
    '3. Last Refreshed': '2021-08-26',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2021-08-26': {
      '1. open': '13.1000',
      '2. high': '13.3400',
      '3. low': '13.0100',
      '4. close': '13.1100',
      '5. volume': '267541',
    },
    '2021-08-25': {
      '1. open': '13.3700',
      '2. high': '13.5000',
      '3. low': '13.0900',
      '4. close': '13.1500',
      '5. volume': '341300',
    },
  },
};

const WSP = {
  'Meta Data': {
    '1. Information': 'Daily Prices (open, high, low, close) and Volumes',
    '2. Symbol': 'WSP.TRT',
    '3. Last Refreshed': '2021-08-26',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2021-08-26': {
      '1. open': '163.4000',
      '2. high': '164.4100',
      '3. low': '163.1700',
      '4. close': '163.7400',
      '5. volume': '56540',
    },
    '2021-08-25': {
      '1. open': '164.4600',
      '2. high': '165.4500',
      '3. low': '163.8200',
      '4. close': '164.1600',
      '5. volume': '91700',
    },
  },
};

const Portfolio = () => {
  let todaysDate = new Date();

  function convertDate(date) {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();

    var mmChars = mm.split('');
    var ddChars = dd.split('');

    return (
      yyyy +
      '-' +
      (mmChars[1] ? mm : '0' + mmChars[0]) +
      '-' +
      (ddChars[1] ? dd - 2 : '0' + ddChars[0])
    );
  }

  // const API_KEY = 'XTT1NO29OSZW4NNL';
  // const TD_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TD.TRT&outputsize=compact&apikey=${API_KEY}`;
  // const AC_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AC.TRT&outputsize=compact&apikey=${API_KEY}`;
  // const CGX_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=CGX.TRT&outputsize=compact&apikey=${API_KEY}`;
  // const WSP_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=WSP.TRT&outputsize=compact&apikey=${API_KEY}`;
  // const [TD, setTD] = useState(0);
  // const [AC, setAC] = useState(1);
  // const [CGX, setCGX] = useState(2);
  // const [WSP, setWSP] = useState(3);

  // useEffect(() => {
  //   axios.get(TD_URL).then((response) => {
  //     setTD(response.data);
  //   });
  //   // axios.get(AC_URL).then((response) => {
  //   //   setAC(response.data);
  //   // });
  //   // axios.get(CGX_URL).then((response) => {
  //   //   setCGX(response.data);
  //   // });
  //   // axios.get(WSP_URL).then((response) => {
  //   //   setWSP(response.data);
  //   // });
  // }, [TD_URL, AC_URL, CGX_URL, WSP_URL]);

  // console.log(TD);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      type: 'number',
      width: 10,
      editable: false,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 110,
      editable: false,
    },
    {
      field: 'company',
      headerName: 'Company',
      width: 200,
      editable: false,
    },
    {
      field: 'industry',
      headerName: 'Industry',
      width: 140,
      editable: false,
    },
    {
      field: 'numberOfShares',
      headerName: 'Shares',
      type: 'number',
      width: 120,
      editable: false,
    },
    {
      field: 'sharePrice',
      headerName: 'Share Price',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'purchasePrice',
      headerName: 'Purchase Price',
      type: 'number',
      width: 170,
      editable: false,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'totalPrice',
      headerName: 'Total Price',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'change',
      headerName: 'Change',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'change%',
      headerName: 'Change(%)',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'growthSincePurchase',
      headerName: 'Growth Since Purchase(%)',
      type: 'number',
      width: 260,
      editable: false,
    },
    {
      field: 'changePrice',
      headerName: 'Change Price',
      type: 'number',
      width: 160,
      editable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      date: 'June 28, 2021',
      company: 'THE TORONTO-DOMINION BANK (XTSE:TD)',
      industry: 'Financial Services',
      numberOfShares: 3,
      sharePrice: 87.04,
      purchasePrice: 261.12,
      price: TD['Time Series (Daily)'][convertDate(todaysDate)]['4. close'],
      totalPrice:
        TD['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 3,
      growthSincePurchase:
        ((TD['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 3 -
          261.12) /
          261.12) *
        100,
      changePrice:
        TD['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 3 -
        261.12,
    },
    {
      id: 2,
      date: 'July 5, 2021',
      company: 'AIR CANADA (XTSE:AC)',
      industry: 'Industrials',
      numberOfShares: 15,
      sharePrice: 26.48,
      purchasePrice: 397.2,
      price: AC['Time Series (Daily)'][convertDate(todaysDate)]['4. close'],
      totalPrice:
        AC['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 15,
      growthSincePurchase:
        ((AC['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 15 -
          397.2) /
          397.2) *
        100,
      changePrice:
        AC['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 15 -
        397.2,
    },
    {
      id: 3,
      date: 'July 12, 2021',
      company: 'Cineplex Inc. (XTSE:CGX)',
      industry: 'Consumer Discretionary',
      numberOfShares: 32,
      sharePrice: 16.06,
      purchasePrice: 513.92,
      price: CGX['Time Series (Daily)'][convertDate(todaysDate)]['4. close'],
      totalPrice:
        CGX['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 32,
      growthSincePurchase:
        ((CGX['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 32 -
          513.92) /
          513.92) *
        100,
      changePrice:
        CGX['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 32 -
        513.92,
    },
    {
      id: 4,
      date: 'July 12, 2021',
      company: 'WSP GLOBAL INC. (XTSE:WSP)',
      industry: 'Industrials',
      numberOfShares: 2,
      sharePrice: 151.25,
      purchasePrice: 302.5,
      price: WSP['Time Series (Daily)'][convertDate(todaysDate)]['4. close'],
      totalPrice:
        WSP['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 2,
      growthSincePurchase:
        ((WSP['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 2 -
          302.5) /
          302.5) *
        100,
      changePrice:
        WSP['Time Series (Daily)'][convertDate(todaysDate)]['4. close'] * 2 -
        302.5,
    },
  ];
  return (
    <div className='background'>
      <div className='portfolio'>
        <h2>Portfolio</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
