import './App.css';
import { useState } from 'react';

import Board from './commons/Board';
import ComList from './commons/ComList';
import ComWrite from './commons/ComWrite';
import ComEdit from './commons/ComEdit';
  
const App = () => {
  // 댓글 LIST State
  const [myData, setMyData] = useState([
    {no:1, comment:'오늘은 React공부하는날', writer:'낙짜쌤', date:'2023-01-01'},
    {no:2, comment:'어제는 Javascript공부해씸', writer:'유겸이', date:'2023-03-03'},
    {no:3, comment:'내일은 Project해야징', writer:'개똥이', date:'2023-05-05'},
  ]);

  // 수정모드인지 아닌지 판별해주는 State
  const [ editActive, setActive ] = useState(false);

  // ComList에서 가져온 CommentNo State 그리고 ComEdit 컴포넌트에 넘거주는 Props
  const [ commentNo, setCommentNo ] = useState(null);

  // ComList에서 가져온 CommentNo와 맞는 myData를 찾아서 ComEdit으로 전달할 State
  const [ editData, setEditData ] = useState(null);

  // Comlist 컴포넌트에서 가져온 매개변수에 따라 수정과 삭제로 처리하는 함수
  const editAndDelete = (mode, data) => {
    if(mode === 'EDIT') {
      setActive(true);
      setCommentNo(data);
      let commentEdit = myData.find(item => item.no == data);
      setEditData(commentEdit);
    } else {
      let commentDelete = myData.filter(item => item.no !== data);
      setMyData(commentDelete);
    }
  }

  // ComWrite 컴포넌트에서 받아오는 data
  const writeComment = data => {
    setMyData([...myData, data]);
  }

  // ComEdit 컴포넌트에서 받아오는 edit data
  const editCansle = () => {
    setActive(false);
  }

  return (
    <div className="App">
      <Board />
      <ComList myData={myData} editAndDelete={editAndDelete}/>
      { editActive && (
        <ComEdit editCansle={editCansle} commentNo={commentNo} myData={myData} editData={editData} />
      )}

      <ComWrite myData={myData} writeComment={writeComment} />
    </div>
  );
}

export default App;
