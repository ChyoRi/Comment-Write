import React, { useEffect, useState } from "react";

const ComEdit = (props) => {
  console.log(props);
  // 댓글 작성자 Input Value State
  const [ writer, setWriter ] = useState('');
  // 댓글 내용 TextArea Value State
  const [ comment, setComment] = useState('');

  // 수정버튼 취소 누를시 App 컴포넌트로 Props 전달하는 함수
  const editCansle = data => {
    props.editCansle(data);
  }

  const editFn = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    setWriter(props.editData.writer);
    setComment(props.editData.comment);
  }, []);

  return (
    <>
      <form onSubmit={editFn}>
        <table id="boardTable">
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
        </table>        
      </form>
    </>
  );
}

export default ComEdit;  
