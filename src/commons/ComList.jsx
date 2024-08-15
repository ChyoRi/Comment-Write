import React from "react";

function ComList(props){

  const sendEdit = () => {
    const edit = true;
    props.editActiveFn(edit);
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
                  <button type="button" onClick={sendEdit}>수정</button>							
                  <button type="button" onclick="">삭제</button>
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
