import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

const Home: Component = () => {
  const navigate = useNavigate();

  const [nickname, setNickname] = createSignal("");
  const [weight, setWeight] = createSignal("2");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const params = new URLSearchParams({
      weight: weight(),
      nickname: nickname(),
    });
    navigate(`/complete?${params}`);
    return;
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <p>購入するグラム数を選択</p>
          <ul>
            <li>
              2kg
              <label>
                <input
                  type="radio"
                  name="weight"
                  value="2"
                  checked={weight() === "2"}
                  onInput={(e) => setWeight(e.currentTarget.value)}
                />
                ¥1,000
              </label>
            </li>
            <li>
              5kg
              <label>
                <input
                  type="radio"
                  name="weight"
                  value="5"
                  checked={weight() === "5"}
                  onInput={(e) => setWeight(e.currentTarget.value)}
                />
                ¥2,000
              </label>
            </li>
            <li>
              10kg
              <label>
                <input
                  type="radio"
                  name="weight"
                  value="10"
                  checked={weight() === "10"}
                  onInput={(e) => setWeight(e.currentTarget.value)}
                />
                ¥3,500
              </label>
            </li>
          </ul>
        </div>
        <div>
          <span>ニックネームを入力: </span>
          <input
            type="text"
            onInput={(e) => setNickname(e.currentTarget.value)}
          />
        </div>
        <p>
          <button>購入する</button>
        </p>
      </form>
    </main>
  );
};

export default Home;
