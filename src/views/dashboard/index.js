import React from 'react';

function Dashboard(props) {

  return (
    <div>
      <main >
        {props.children} 
      </main>
    </div>
  );
}


export default Dashboard;