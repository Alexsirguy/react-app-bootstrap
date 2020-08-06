import React, { useState } from 'react';
import './index.css';

import Navbar from '../../components/navbar';
function Index() {
  


  return (
    <div>
      <Navbar/> 
   <section className="bg">
   
    <section style={{top:0, left: 0, position:"absolute", width: "100%", paddingTop: "15vh"}}>
        <div className="container">
            <div className="row">
             <div className="col-md-12">
             <h1 className="text-center" style={{color:"#fff"}}>WELCOME TO REACT APP</h1>
             </div>
            </div>
        </div>
    </section>
</section>
     
    </div>
  );
}

export default Index;
