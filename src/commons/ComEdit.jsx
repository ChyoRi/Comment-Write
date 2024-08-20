import React, { useEffect, useState } from "react";

// 댓글 수정 컴포넌트
const ComEdit = (props) => {
  // 댓글 작성자 Input Value State
  const [ writer, setWriter ] = useState('');
  // 댓글 내용 TextArea Value State
  const [ comment, setComment] = useState('');

  // ComList 컴포넌트로 전달할 오늘 날짜 함수
  const schedule = () => {
    let date = new Date();
    let Y = date.getFullYear();
    let M = String(date.getMonth() + 1).padStart(2, '0');
    let D = String(date.getDate()).padStart(2, '0');
    let today = `${Y}-${M}-${D}`;
    
    return today;
  }

  // 수정버튼 취소 누를시 ComList 컴포넌트로 Props 전달하는 함수
  const editCansle = data => {
    props.cansleEdit(data);
  }

  // 사용자가 댓글 수정 버튼을 누를시 작성한 댓글 From을 객체로 만들어 Props로 ComList 컴포넌트에 전달
  const editFn = e => {
    e.preventDefault();
    const editData = {
      ...props.editData, writer: writer, comment: comment, date: schedule()
    }
    props.receiveEditData(editData);
  }

  // 수정 버튼 클릭시 초기에 보여질 이전 댓글 Data
  useEffect(() => {
    setWriter(props.editData.writer);
    setComment(props.editData.comment);
  }, []);

  return (
    <>
      <form onSubmit={editFn}>
        <table id="boardTable">
          <tbody>
            <tr>
              <td id="writer">
                Writer : 
                <input type="text" name="writer" value={writer} onChange={(e) => setWriter(e.target.value)} />
                <button type="button" onClick={editCansle}>수정취소</button>
              </td>
              <td rowSpan="2"><input type="submit" value="댓글수정" id="btn"/></td>
            </tr>
            <tr>
              <td><textarea name="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea></td>
            </tr>
          </tbody>
        </table>        
      </form>
    </>
  );
}

export default ComEdit;  
