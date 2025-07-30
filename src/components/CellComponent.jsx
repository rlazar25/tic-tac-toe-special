const CellComponent = (props) => {

    const {id, cell, handleClick} = props

  return (
    <div className='sqare' id={id} onClick={() => handleClick(id)}>
      <div className={cell}></div>
    </div>
  )
}

export default CellComponent
