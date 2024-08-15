import React, { useState } from "react";

function ComWrite(props){

  const [ writer, setWriter ] = useState('');
  const [ comment, setComment] = useState('');
  
  console.log(writer);
  console.log(comment);

  return (<>
    <form>
      <table id="boardTable">
        <tr>
          <td id="writer">Writer : <input type="text" name="writer" value={writer} onChange={(e) => {setWriter(e.target.value)}} /></td>
          <td rowspan="2"><input type="submit" value="댓글작성" id="btn"/></td>
        </tr>
        <tr>
          <td><textarea name="comment" value={comment} onChange={(e) => {setComment(e.target.value)}}></textarea></td>
        </tr>
      </table>        
    </form>
  </>);
}

export default ComWrite;  
