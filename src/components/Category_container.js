import style from './Category_container.module.css';

function Category_container({ children }) {
  return (
    <div className={`${style.container} ${style.additionalClass}`}>
      <div className={style.container__line}>
        <div className={style.container__line__text}>
                {children}
        </div>
      </div>
    </div>
  );
}


export default Category_container;
