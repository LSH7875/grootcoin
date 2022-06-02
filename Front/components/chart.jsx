import { useState, useEffect,useReducer,useRef, useContext } from "react"
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import dayjs from 'dayjs'
import Store from '../store/context'

const chart = () => {
  const ws = useRef(null);
  const {state,dispatch} = useContext(Store)
  const [socket, setSocket] = useState(false);


  useEffect(() => {
    ws.current= new WebSocket('ws://localhost:8080');
    ws.current.onopen=()=>{
        setSocket(true)
    }

    return () => {
        ws.current.close();
    };
  }, []);


  useEffect(()=>{
    ws.current.onmessage=e=>{
      state.graph = JSON.parse(e.data).graph
      //console.log(state.graph)
      
    }},[socket])
    
    let result = []
    for (let i = 0; i < state.graph.length; i++) {
      const x = new Date(state.graph[i].time * 1000)
      const y = [state.graph[i].half_start, state.graph[i].half_max, state.graph[i].half_min, state.graph[i].half_last]
      let obj = { x, y }
      result.push(obj)
    }


  const series = [{
    name: 'candle',
    data: result
  }]

  const options = {
    title: {
      text: 'grootcoin_Chart',
      align: 'left'
    },
    annotations: {
      xaxis: [
        {
          x: 'Oct 06 14:00',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396'
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: 'Annotation Test'
          }
        }
      ]
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MMM DD HH:mm')
        }
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }
  return (
    <div id="chartBox" >
      <div id="chart">
        <ReactApexChart
          series={series}
          options={options}
          type="candlestick"
          height={600}
        />
      </div>
    </div>

  )
  
}



export default chart