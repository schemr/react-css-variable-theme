import React from 'react';
import styled from 'styled-components';
function App() {
  return (
    <AppEl>
      <h1>Header Text</h1>
      <h3>Sub Text</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="callout">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain..."
      </div>
      <p className="primary">Ticker Color</p>
      <p className="primary-10">Ticker Color</p>
      <p className="primary-20">Ticker Color</p>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button type="button">저장</button>
      <img src="https://www.tickercorp.com/images/index/hero.png" />
    </AppEl>
  );
}

const AppEl = styled.div`
  margin: 20px;
  width: 50%;
  .callout {
    width: 70%;
    color: var(--bg-color);
    background: var(--text-color);
    border: 2px solid var(--bg-color);
  }
  .primary {
    color: var(--palette-primary-default);
  }
  .primary-10 {
    color: var(--palette-primary-10);
  }
  .primary-20 {
    color: var(--palette-primary-20);
  }
  input {
    display: block;
    width: 50%;
    border-color: var(--text-color);
    background-color: var(--bg-color);
    margin-bottom: 10px;
  }
  button {
    appearance: none;
    border: 2px solid var(--text-color);
    padding: 20px;
  }
`;

export default App;
