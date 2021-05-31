import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { useTranslation } from 'react-i18next';
import { getData } from '../../../api/data';
import { useEffect, useState } from "react";

export default function Chart() {
  const theme = useTheme();
  //language
  const { t } = useTranslation('common');
  const [ data, setData ] = useState(undefined);

  //fetch
  useEffect(() => getData(t).then(res => {
    res.data.data["09162"].history.forEach(date => {
      date["date"] = date["date"].toString().slice(0, -14)
    });
    setData(res.data.data["09162"].history)
    ;
    return () => {
      setData(undefined) 
    };
  }).catch(e => {
    setData([])
  }), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <React.Fragment>
      <Title>{t('dashboard.chart.title')}</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Covid-19
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="cases"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
