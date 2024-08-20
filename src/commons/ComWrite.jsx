import React, { useState } from "react";

// 댓글 작성 컴포넌트
const ComWrite = (props) => {
  // Props로 받아온 App 컴포넌트의 myData배열의 마지막 객체 가져오기 ( 작성할 때 댓글에 다음순번을 매기기 위해 )
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

    if( writer == '' || comment == '') return;
    
    // App 컴포넌트의 마지막 data 번호에 + 1을 해서 commentData의 no value로 설정
    let newNumber = number + 1;
    setNumber(newNumber);
    let commentData = {no: newNumber, comment: comment, writer: writer, date: schedule()};

    // App 컴포넌트로 보내줄 Props Data
    props.writeComment(commentData);

    // 작성후 작성자와 댓글을 비게 만듬
    setWriter('');
    setComment('');
  }

  return (
    <>
      <form onSubmit={submitFn}>
        <table id="boardTable">
          <tbody>
            <tr>
              <td id="writer">Writer : <input type="text" name="writer" value={writer} onChange={(e) => {setWriter(e.target.value)}} /></td>
              <td rowSpan="2"><input type="submit" value="댓글작성" id="btn"/></td>
            </tr>
            <tr>
              <td><textarea name="comment" value={comment} onChange={(e) => {setComment(e.target.value)}}></textarea></td>
            </tr>
          </tbody>
        </table>        
      </form>
    </>
  );
}

export default ComWrite;  
