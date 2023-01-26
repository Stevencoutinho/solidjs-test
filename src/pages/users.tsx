import { Component, For, onMount } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import createUsers from "./../stores/store";

const Users: Component = () => {
  const location = useLocation();

  const { users, addUser } = createUsers;

  onMount(() => {
    const params = Object.fromEntries(
      new URLSearchParams(location.search).entries()
    );
    if (!params.nickname || !params.weight || isNaN(Number(params.weight))) {
      return;
    }
    addUser(params.nickname, Number(params.weight));
    return;
  });

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>ニックネーム</th>
            <th>重量</th>
          </tr>
        </thead>
        <tbody>
          <For each={users()}>
            {(user) => (
              <tr>
                <td>{user.date}</td>
                <td>{user.nickname}</td>
                <td>{user.weight}</td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
      <A href="/">TOPへ戻る</A>
    </main>
  );
};

export default Users;
