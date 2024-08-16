import './App.css';
import { useState } from 'react';

import Board from './commons/Board';
import ComList from './commons/ComList';
import ComWrite from './commons/ComWrite';
import ComEdit from './commons/ComEdit';
  
const App = () => {
  const [myData, setMyData] = useState([
    {no:1, comment:'오늘은 React공부하는날', writer:'낙짜쌤', date:'2023-01-01'},
    {no:2, comment:'어제는 Javascript공부해씸', writer:'유겸이', date:'2023-03-03'},
    {no:3, comment:'내일은 Project해야징', writer:'개똥이', date:'2023-05-05'},
  ]);

  // 어떤 mode인지 판별해주는 State
  const [ mode, setMode ] = useState('LIST');

  // 각 컴포넌트에서 받은 매개변수 mode를 setMode에 넣어서 재할당
  const modeChange = mode => {
    setMode(mode);
  }

  // 랜더링할 컴포넌트를 담을 변수
  let render;

  switch(mode) {
    case 'LIST':
      render = <ComList myData={myData} modeChange={modeChange} />
      break;

    case 'WRITE':
      setMyData([...myData, data]);
      break;

    case 'EDIT':
      render = <ComEdit modeChange={modeChange} />
      break;

    case 'DELETE':
      render = <ComList myData={myData} modeChange={modeChange} />
      let commentDelete = myData.filter(item => item.no !== data.no);
      setMyData(commentDelete);
      break;

    case 'EDITCANSLE':
      render = <ComList myData={myData} modeChange={modeChange} />
      setMode('LIST');
      break;
  }
  
  return (
    <div className="App">
      <Board />
      {render}
      <ComWrite myData={myData} commnetProcess={commnetProcess} />
    </div>
  );
}

export default App;
