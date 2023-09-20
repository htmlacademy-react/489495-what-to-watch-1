import { Link } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';

export default function Page404() {
  return (
    <>
      <h1>Ошибка 404. Страница не существует.</h1>
      <Link to={<MainPage title={''} genre={''} issueDate={''} />}>
        Перейти на главную страницу
      </Link>
    </>
  );
}
