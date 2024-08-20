import './App.css';
import { useState } from 'react';

import Board from './commons/Board';
import ComList from './commons/ComList';
import ComWrite from './commons/ComWrite';
  
const App = () => {
  // 댓글 LIST State
  const [myData, setMyData] = useState([
    {no:1, comment:'오늘은 React공부하는날', writer:'낙짜쌤', date:'2023-01-01'},
    {no:2, comment:'어제는 Javascript공부해씸', writer:'유겸이', date:'2023-03-03'},
    {no:3, comment:'내일은 Project해야징', writer:'개똥이', date:'2023-05-05'},
  ]);

  // ComWrite 컴포넌트에서 받아오는 data ( CREATE )
  const writeComment = data => {
    setMyData([...myData, data]);
  }

  // ComList 컴포넌트에서 받아오는 data ( DELETE )
  const receiveDeleteProps = data => {
    setMyData(data)
  }

  // ComList 컴포넌트에서 받아오는 data ( EDIT )
  const receiveEditProps = data => {
    const editData = myData.map(item => item.no === data.no ? data : item);
    setMyData(editData);
  }

  return (
    <div className="App">
      <Board />
      <ComList myData={myData} receiveDeleteProps={receiveDeleteProps} receiveEditProps={receiveEditProps}/>
      <ComWrite myData={myData} writeComment={writeComment} />
    </div>
  );
}

export default App;
