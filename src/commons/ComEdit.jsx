import React from "react";
import {useState} from 'react';

function ComEdit(props){

  const [ writer, setWriter ] = useState('');
  const [ comment, setComment] = useState('');

  const editCansle = () => {
    const cansle = false;
    props.editCansleFn(cansle);
  }

  return (
    <>
      <form>
        <table id="boardTable">
          <tr>
            <td id="writer">
              Writer : 
              <input type="text" name="writer" value={writer} onChange={(e) => setWriter(e.target.value)} />
              <button type="button" onClick={editCansle}>수정취소</button>
            </td>
            <td rowspan="2"><input type="submit" value="댓글수정" id="btn"/></td>
          </tr>
          <tr>
            <td><textarea name="comment" value="블라블라"></textarea></td>
          </tr>
        </table>        
      </form>
    </>
  );
}

export default ComEdit;  
