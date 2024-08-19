import React from "react";

// 댓글 목록 컴포넌트
const ComList = (props) => {

  // 클릭한 버튼의 상태와 commentNo를 Props로 App컴포넌트에 전달
  const sendNo = (state, data) => {
    if(state === 'EDIT') {
      props.editAndDelete(state, data);
    } else {
      const confirm = window.confirm('정말 해당 댓글을 삭제하시겠습니까?');
      if (!confirm) return;
      props.editAndDelete(state, data);
    }
  }

  return (
    <>
      <table id="boardTable">
        <tbody>
          {props.myData.map(item => (
            <React.Fragment key={item.no}>
              <tr>
                <td>{item.no}</td>
                <td>{item.writer}</td>
                <td>
                  {item.date}
                  <button type="button" onClick={() => sendNo('EDIT', item.no)}>수정</button>							
                  <button type="button" onClick={() => sendNo('DELETE', item.no)}>삭제</button>
                </td>
              </tr>
              <tr>
                <td colSpan="3" className="subject">{item.comment}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ComList;  
