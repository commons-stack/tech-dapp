import React from 'react';
import { connect } from 'react-redux';
import './Contribute.sass';
import DAI from 'cryptocurrency-icons/svg/color/dai.svg';
import arrow from '../../../assets/arrow.svg';
import CSTK from '../../../assets/cstk.svg';

const config = require('../../../config');

const Comp = () => {
  // const { accounts } = useContext(MetaMaskContext);

  const [amountDAI, setAmountDAI] = React.useState(0);
  const [amountCSTK, setAmountCSTK] = React.useState(0);

  const [DAIError, setDAIError] = React.useState();

  React.useEffect(() => {
    try {
      const DAI = parseFloat(amountDAI);
      if (isNaN(DAI)) {
        setDAIError('please enter a number');
        setAmountDAI(DAI);
        setAmountCSTK(0);
      } else {
        setAmountCSTK(config.ratio * DAI);
        setDAIError(null);
      }
    } catch (e) {
      console.error(e);
    }
  }, [amountDAI]);

  return (
    <div className="enable has-text-left">
      <div className="contribmain">
        <p className="subtitle mb-2">I WANT TO CONTRIBUTE</p>
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="field">
                <div className="control has-icons-left">
                  <span className="select">
                    <select>
                      <option>DAI</option>
                    </select>
                  </span>
                  <span className="icon is-small is-left">
                    <figure className="image is-16x16">
                      <img src={DAI} alt="DAI" />
                    </figure>
                  </span>
                </div>
                <p className="help is-danger">&nbsp;</p>
              </div>
            </div>
            <div className="level-item">
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    placeholder=""
                    onChange={(e) => {
                      setAmountDAI(e.target.value);
                    }}
                    value={amountDAI}
                  />
                </div>
                <p className="help is-danger">{DAIError || <>&nbsp;</>}</p>
              </div>
            </div>
          </div>
          <div className="level-item">
            <div className="field">
              <div className="control">
                &nbsp;
                <img alt="arrow right" src={arrow} />
                &nbsp;
                {/* <p class="help is-danger">&nbsp;</p> */}
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="level-item">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      disabled
                      type="text"
                      value={amountCSTK}
                      placeholder=""
                    />
                  </div>
                  <p className="help is-danger">&nbsp;</p>
                </div>
              </div>
              <div className="level-item">
                <div className="field">
                  <div className="control has-icons-left">
                    <span className="select">
                      <select disabled>
                        <option>CSTK</option>
                      </select>
                    </span>
                    <span className="icon is-small is-left">
                      <figure className="image is-16x16">
                        <img src={CSTK} alt="CSTK" />
                      </figure>
                    </span>
                  </div>
                  <p className="help is-danger">&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="button is-success is-fullwidth is-medium">Make Contribution</button>
      </div>
      {/* </article> */}
      {/* </div > */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    agreedtandc: state.agreedtandc,
    web3available: state.web3available,
    personalCap: state.personalCap,
    numerator: state.numerator,
    denominator: state.denominator,
    softCap: state.softCap,
    hardCap: state.hardCap,
    totalReceived: state.totalReceived,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    onSetAgreedtandc: (signature) => dispatch({ type: 'AGREE_TANDC', signature }),
    setShowTandC: (value) => dispatch({ type: 'SET_SHOW_TANDC', value }),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Comp);
