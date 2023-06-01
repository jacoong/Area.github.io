import main from './Main_hello.module.css';

const Main_hello = ({ isTextFalse, istextChanged }) => (
  <div className={main.main}>
    <div className={main.Lcontainer}>
      {isTextFalse ? (
        <div className={main.Lcontainer__logo}>
          <h1 className={main.Lcontainer__logo__h}>Click Anyware</h1>
          <h1 className={main.Lcontainer__logo__h}>to listen the Sound</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    <div className={main.Rcontainer}>
      {isTextFalse ? (
        <div className={main.Rcontainer__logo}>
          <h1 className={main.Rcontainer__logo__h}>You Are in Area</h1>
          <h3 className={main.Rcontainer__logo__h3}>There is no Sound in Space.</h3>
        </div>
      ) : (
        <div className={`${istextChanged ? main.blackText : main.whiteText}`}>
          <h1 className={main.Rcontainer__logo__h}>You Are in Area</h1>
          <h3 className={main.Rcontainer__logo__h3}>But You can hear the Sound</h3>
        </div>
      )}
    </div>
  </div>
);

export default Main_hello;
