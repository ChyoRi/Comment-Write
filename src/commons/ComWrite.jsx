import React, { useState } from "react";

// 댓글 작성 컴포넌트
const ComWrite = (props) => {
  // Props로 받아온 App 컴포넌트의 myData배열의 마지막 객체 가져오기
  let lastComment = props.myData[props.myData.length - 1];

  // Props로 받아온 App 컴포넌트의 myData배열 마지막 객체의 no값 가져오기
  const [ number, setNumber] = useState(lastComment.no);
  // 댓글 작성자 Input Value State
  const [ writer, setWriter ] = useState('');
  // 댓글 내용 TextArea Value State
  const [ comment, setComment] = useState('');
  
  // App 컴포넌트로 전달할 오늘 날짜 함수
  const schedule = () => {
    let date = new Date();
    let Y = date.getFullYear();
    let M = String(date.getMonth() + 1).padStart(2, '0');
    let D = String(date.getDate()).padStart(2, '0');
    let today = `${Y}-${M}-${D}`;
    
    return today;
  }

  // 사용자가 댓글 작성 버튼을 누를시 작성한 댓글 From을 객체로 만들어 Props로 App 컴포넌트에 전달
  const submitFn = (e) => {
    e.preventDefault();
    let newNumber = number + 1;
    setNumber(newNumber);
    let commentData = {no: newNumber, comment: comment, writer: writer, date: schedule()};
    props.modeChange('WRITE', commentData);
  }

  return (
    <>
      <form onSubmit={submitFn}>
        <table id="boardTable">
          <tr>
            <td id="writer">Writer : <input type="text" name="writer" value={writer} onChange={(e) => {setWriter(e.target.value)}} /></td>
            <td rowSpan="2"><input type="submit" value="댓글작성" id="btn"/></td>
          </tr>
          <tr>
            <td><textarea name="comment" value={comment} onChange={(e) => {setComment(e.target.value)}}></textarea></td>
          </tr>
        </table>        
      </form>
    </>
  );
}

export default ComWrite;  
