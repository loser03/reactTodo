import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
              {/* Regarding 40th row, onClick function is called every time roading only if onClick={onClickDelete}Regarding the 40th row, the onClick function is unintendedly called every time roading if only onClick={onClickDelete}  */}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
