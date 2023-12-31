import { useState } from 'react';

const NFTCard2 = ({ image, name, type, quantity, setModalState, setModalImgProps }) => {
  const [portrait, setportrait] = useState(false);

  return (
    <div
      className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4 MuiGrid-grid-md-3"
      onClick={() => {
        setModalState(true);
        setModalImgProps({ img: image, portrait: portrait });
      }}
    >
      <div className="jss69">
        <div className="jss70">
          <div className="jss71"></div>

          <div id="html-block" className="jss72" alt="image"></div>
        </div>
        <div className="jss73">
          <h3 id="preview" className="jss74">
            MI-0
          </h3>
          <div className="jss75">
            <span id="preview2">MetaViewer</span>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard2;
