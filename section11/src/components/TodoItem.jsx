import "./TodoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date })=>{
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return(
    <div className="TodoItem">
      <input 
        onChange={onChangeCheckbox}
        readOnly 
        checked={isDone} 
        type="checkbox" 
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.id !== nextProps.id) return false;

//   return true; //위 값들이 다 바뀌지 않았을 때 
// });

export default memo(TodoItem);