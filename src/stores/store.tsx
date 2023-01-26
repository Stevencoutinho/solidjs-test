import { createSignal, createRoot } from "solid-js";

const createUsers = () => {
  const [users, setUsers] = createSignal<
    { date: string; nickname: string; weight: number }[]
  >([
    { date: "2022/10/10", nickname: "サンプル男1", weight: 10 },
    { date: "2022/11/11", nickname: "サンプル男2", weight: 2 },
    { date: "2022/12/12", nickname: "サンプル男3", weight: 5 },
  ]);

  const addUser = (nickname: string, weight: number) => {
    const date = new Date();
    setUsers([
      {
        date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
        nickname: nickname,
        weight: weight,
      },
      ...users(),
    ]);
    return;
  };

  return { users, addUser };
};

export default createRoot(createUsers);
