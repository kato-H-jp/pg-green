import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import dig from 'object-dig';
import { signInWithGoogle, logOut } from '../service/firebase';

const Dashboard = () => {
  const currentUser = useContext(AuthContext);
  const FormRender = () => {
    let dom;
    if (dig(currentUser, 'currentUser', 'uid')) {
      dom = (
        <form>
          <input placeholder='ToDoName' />
          <button> 追加 </button>
        </form>
      );
      // もしログインしていたら、ＴＯＤＯの入力フォームを出力します
    } else {
      // ログインしていない場合は、ログインボタンを表示する
      dom = <button onClick={signInWithGoogle}>ログイン</button>;
    }
    return dom;
  };
  return <div>{FormRender()}</div>;
};

export default Dashboard;
