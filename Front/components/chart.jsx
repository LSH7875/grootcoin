import { useState, useEffect,useReducer,useRef } from "react"
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import dayjs from 'dayjs'

const chart = () => {

  const ws = useRef(null);
  const [graph, setGraph] = useState([])
  const [socket, setSocket] = useState(false);


  useEffect(() => {
    ws.current= new WebSocket('ws://127.0.0.1:8080');
    ws.current.onopen=()=>{
        setSocket(true)
    }

    return () => {
        ws.current.close();
    };
  }, []);

  useEffect(()=>{
    ws.current.onmessage=e=>{

      setGraph(JSON.parse(e.data).graph)
      console.log(graph)
    }},[socket])

    console.log(graph)

    let result = []

    for (let i = 0; i < graph.length; i++) {
      const x = new Date(graph[i].time * 1000)
      const y = [graph[i].half_start, graph[i].half_max, graph[i].half_min, graph[i].half_last]

      let obj = { x, y }
      result.push(obj)
    }


    console.log(result)

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