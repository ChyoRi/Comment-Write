import React from "react";

// 댓글 목록 컴포넌트
const ComList = (props) => {

  // 버튼을 클릭하면 mode를 Props로 App컴포넌트에 전달
  const modeSend = (mode) => {
    props.modeChange(mode);
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
                  <button type="button" onClick={() => modeSend('EDIT')}>수정</button>							
                  <button type="button" onClick={() => modeSend('DELETE')}>삭제</button>
                </td>
              </tr>
              <tr>
                <td colspan="3" className="subject">{item.comment}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ComList;  
