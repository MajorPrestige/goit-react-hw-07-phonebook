import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <div className={s.modal}>
        <span className={s.smile}>💩</span>
        <p>Sorry, it's free backend</p>
      </div>
    </div>
  );
};

export default Loader;
