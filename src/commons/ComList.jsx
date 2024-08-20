import React, { useState } from "react";
import ComEdit from "./ComEdit";

// 댓글 목록 컴포넌트
const ComList = (props) => {

  // 수정모드인지 아닌지 판별해주는 State
  const [ editActive, setActive ] = useState(false);

  // ComList에서 가져온 CommentNo State 그리고 ComEdit 컴포넌트에 넘거주는 Props
  const [ commentNo, setCommentNo ] = useState(null);

  // ComList에서 가져온 CommentNo와 맞는 myData를 찾아서 ComEdit으로 전달할 State
  const [ editData, setEditData ] = useState(null);

  // Comlist 컴포넌트에서 가져온 매개변수에 따라 수정과 삭제로 처리하는 함수
  const editAndDelete = (mode, data) => {
    /* 수정 버튼을 클릭할시 editActive를 활성화 몇 번째 댓글을 수정하는건지 
      commentNo로 해당 댓글 번호 상태 할당 App의 myData를 find로 돌면서
      myData와 일치하는 번호의 객체를 editData State에 할당하고 ComEdit 컴포넌트에 Props로 전달
    */
    if(mode === 'EDIT') {
      setActive(true);
      setCommentNo(data);
      let commentEdit = props.myData.find(item => item.no == data);
      setEditData(commentEdit);
    } else {
      const confirm = window.confirm('정말 해당 댓글을 삭제하시겠습니까?');
      if (!confirm) return;
      let commentDelete = props.myData.filter(item => item.no !== data);
      props.receiveDeleteProps(commentDelete);
    }
  }

  // ComEdit 컴포넌트에서 수정취소 버튼이 눌리면 오는 Props
  const cansleEdit = () =>  {
    setActive(false);
    setCommentNo(null);
    setEditData(null);
  }

  // ComEdit 컴포넌트에서 받는 수정 Data
  const receiveEditData = data => {
    setEditData(data);
    setActive(false);
    props.receiveEditProps(data);
  }

  return (
    <>
      <table id="boardTable">
        <tbody>
          {props.myData.map(item => (
            <React.Fragment key={item.no}>
              {editActive && commentNo == item.no ? (
                <tr>
                  <td colSpan="3">
                    <ComEdit 
                      cansleEdit={cansleEdit} 
                      commentNo={commentNo} 
                      editData={editData} 
                      receiveEditData={receiveEditData} 
                    />
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td>{item.no}</td>
                    <td>{item.writer}</td>
                    <td>
                      {item.date}
                      <button type="button" onClick={() => editAndDelete('EDIT', item.no)}>수정</button>							
                      <button type="button" onClick={() => editAndDelete('DELETE', item.no)}>삭제</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="subject">{item.comment}</td>
                  </tr>
                </>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ComList;  
