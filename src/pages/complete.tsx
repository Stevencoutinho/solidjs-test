import { Component, createSignal, onMount } from "solid-js";
import { A, useLocation, useNavigate } from "@solidjs/router";

const Complete: Component = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [urlSearchParams] = createSignal(new URLSearchParams(location.search));
  const [nickname, setNickname] = createSignal("");
  const [weight, setWeight] = createSignal(0);

  onMount(() => {
    const params = Object.fromEntries(urlSearchParams().entries());
    if (
      !params.weight &&
      isNaN(Number(params.weight)) &&
      Number(params.weight)
    ) {
      navigate("/");
      return;
    }
    setNickname(params.nickname);
    setWeight(Number(params.weight));
  });

  return (
    <main>
      {nickname() && <p>{nickname()}様</p>}
      <p>購入が完了しました！</p>
      <p>{weight()}kg</p>
      <A href={`/users?${urlSearchParams()}`}>購入者リストを見る</A>
    </main>
  );
};

export default Complete;
