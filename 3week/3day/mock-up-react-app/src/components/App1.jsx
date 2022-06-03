import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import data from '../data';


const App1 = () => {
const { Header, Content, Footer } = Layout;
const [thisData, setThisData] = useState(data)
const [dataObj, setDataObj] = useState(0)



 return ( <Layout className="layout">
    <Header>
      <div className="logo" />
      
    </Header>
    <Content>
     <div>
       {/* {data.map(el => {
         return (
           <div>
             <h2>{el.id}</h2>
             <h1>From: {el.name.first} {el.name.last}</h1>
             <h4>{el.city}</h4>

           </div>
         )
       })} */}
       {/* <p>{data[dataObj].id}</p>
       <button onClick={() => {
         console.log(dataObj)
         setDataObj((prev) => {
           prev++
         })
       }}>next</button> */}
      
       {data.filter((obj) => {
         obj[0].id = dataObj
       }).map(el => {
         <h2>{el.id}</h2>

       })}
     </div>
    
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);}

export default App1;