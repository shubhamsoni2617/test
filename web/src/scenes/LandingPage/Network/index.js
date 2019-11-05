import React from 'react';

const Network = ({ networkData }) => {
  return (
    <section>
      <div className="methodology">
        <div className="container-fluid">
          {networkData && (
            <div>
              <h2 className="text-center section-title">Network</h2>

              <div
                className="text-center sub-text"
                dangerouslySetInnerHTML={{
                  __html: networkData.description
                }}
              />
              <div className="methodology-inner-wrapper">
                <ul>
                  {networkData.data.map(network => {
                    return (
                      <a href={network.url} target="_blank">
                        <img src={network.logo} alt="logo" />
                      </a>
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
