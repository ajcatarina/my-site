import React from 'react'

const WorkPage = ({data}) => (
  <div style={{color: 'white'}}>
    {data.allPrismicRepeatable.edges.map(({node}) => (
      <div key={node.id}>
        <div>{node.data.title.text}</div>
        {node.data.image.url ? ( 
          <img src={node.data.image.url} />
        ) : (
          <p></p>
        )}
      </div>
        ))
      }
  </div>
)

export default WorkPage

export const query = graphql`
 query MyWork{
    allPrismicRepeatable {
      edges {
        node {
          id
          data {
            title {
              html
              text
            }
            image {
              url
            }
          }
        }
      }
    }
  }
`