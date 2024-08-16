import React from "react";
import {useState} from 'react';

const ComEdit = (props) => {

  const editCansle = () => {
    props.modeChange('EDITCANSLE');
  }

  return (
    <>
      <form>
        <table id="boardTable">
          <tr>
            <td id="writer">
              Writer : 
              <input type="text" name="writer" />
              <button type="button" onClick={editCansle}>수정취소</button>
            </td>
            <td rowSpan="2"><input type="submit" value="댓글수정" id="btn"/></td>
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
