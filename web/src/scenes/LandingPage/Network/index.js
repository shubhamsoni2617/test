import React from 'react';

const Network = ({ networkData }) => {
  return (
    <section>
      <div className="network-wrapper">
        <div className="container">
          {networkData && (
            <div>
              <h2 className="text-center section-title">Network</h2>

              <div
                className="text-center sub-text"
                dangerouslySetInnerHTML={{
                  __html: networkData.description
                }}
              />
              <div className="network-inner-wrapper">
                <ul>
                  {networkData.data.map(network => {
                    return (
                      <li>
                        <a href={network.url} target="_blank">
                          <img src={network.logo} alt="logo" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Network;
