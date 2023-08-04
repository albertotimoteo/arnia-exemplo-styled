/* eslint-disable react/prop-types */
function Commentary({ photo, commentary }) {
  return (
    <div>
      <img src={photo} />
      <p>{commentary}</p>
    </div>
  )
}

/**
 * Poderíamos fazer desta forma, pois a props é um objeto!
function Commentary(props) {
  return (
    <div>
      <img src={props.photo} />
      <p>{props.commentary}</p>
    </div>
  )
}
 */

export default Commentary
