import React from 'react'
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    MoU: 4000,
    PKS: 2400,
  },
  {
    name: "Page B",
    MoU: 3000,
    PKS: 1398,
  },
  {
    name: "Page C",
    MoU: 2000,
    PKS: 9800,
  },
  {
    name: "Page D",
    MoU: 2780,
    PKS: 3908,
  },
  {
    name: "Page E",
    MoU: 1890,
    PKS: 4800,
  },
  {
    name: "Page F",
    MoU: 2390,
    PKS: 3800,
  },
  {
    name: "Page G",
    MoU: 3490,
    PKS: 4300,
  },
];

const Welcome = () => {

  const{user} = useSelector((state) => state.auth);
  return (
  <div className="hero is-fullheight">
    <div style={{ paddingLeft: "270px", paddingTop: "70px" }}>
      <h1 className='title'>Dashboard</h1>
      <h2 className='subtitle'>Welcome Back {user && user.name}</h2>
    </div>
    <div style={{ paddingLeft: "270px", paddingBottom:"50px"}}>
          <div class="message-body">
            <BarChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 0,
                right: 30,
                left: -5,
                bottom: -32,
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="MoU" fill="#8884d8" />
              <Bar dataKey="PKS" fill="#82ca9d" />
            </BarChart>{" "}
          </div>
    </div>
  </div>
  )
}

export default Welcome;
