import './css/Table.scss'

const Table = ({header,column1,column2,column3,column4,column5,column6,column7,column8,column9}) => {
  return (
    <div class="Table">
      <div class="Heading">
        {header}
      </div>
      <div class="TableHead">
        <div class="Column1">
          {column1}
        </div>
        <div class="Column2">
          {column2}
        </div>
        <div class="Column3">
          {column3}
        </div>
        <div class="Column4">
          {column4}
        </div>
        <div class="Column5">
          {column5}
        </div>
        <div class="Column6">
          {column6}
        </div>
        <div class="Column7">
          {column7}
        </div>
        <div class="Column8">
          {column8}
        </div>
        <div class="Column9">
          {column9}
        </div>
      </div>
    </div>
  )
}

export default Table;