import React from 'react'
import MediaQuery from 'react-responsive'

const IndexPage = () => (
  <div>
    <h1 style={{ 
          textAlign: 'center',
          color: 'white',
          paddingTop: '100px'
        }}
    >
      AJ CATARINA
    </h1>

    <MediaQuery maxDeviceWidth={480}>
      {(matches) => {
        if (!matches) {
          return <div>
                    <div style={{ maxWidth: '400px',
                                  padding: '10px 25px',
                                  border: '2px solid white',
                                  color: 'white',
                                  textAlign: 'right',
                                  fontFamily: 'Oswald',
                                  fontSize: '80px',
                                  float: 'left',
                                }} >
                                DESIGNER
                    </div>
                    <div style={{ maxWidth: '400px',
                                  padding: '10px 25px',
                                  border: '2px solid #f93b8e',
                                  color: '#f93b8e',
                                  textAlign: 'right',
                                  fontFamily: 'Oswald',
                                  fontSize: '80px',
                                  float: 'right',
                                }} >
                                DEVELOPER
                    </div>
                  </div>
        } else {
          return <div>
                    <div style={{ maxWidth: '400px',
                                  padding: '10px 25px',
                                  border: '2px solid white',
                                  color: 'white',
                                  textAlign: 'center',
                                  fontFamily: 'Oswald',
                                  fontSize: '55px',
                                }} >
                                DESIGNER
                    </div>
                    <div style={{ maxWidth: '400px',
                                  padding: '10px 25px',
                                  border: '2px solid #f93b8e',
                                  color: '#f93b8e',
                                  textAlign: 'center',
                                  fontFamily: 'Oswald',
                                  fontSize: '55px',
                                }} >
                                DEVELOPER
                    </div>
                  </div>
        }
      }}
    </MediaQuery>

  </div>
)

export default IndexPage
