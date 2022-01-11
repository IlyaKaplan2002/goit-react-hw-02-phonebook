import React from 'react';

const App = () => {
  return (
    <>
      Склонируйте пустой репозиторий и переместите в него все файлы сборке, кроме папки .git <br />
      Для того, чтобы подготовить сборку нужно запустить:
      <ul>
        <li>npm i</li>
        <li>npm run prepare</li>
      </ul>
      и поменять в файле package.json, пункте &ldquo;homepage&ldquo; ilyakaplan2002 на свой
      username, a react-webpack на свое название репозитория
      <br />
      Также главная ветка должна называться main
    </>
  );
};

export default App;
