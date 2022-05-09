import './WTable.css'


// WIP 
const WTable = () => {
  
  const data = [
    { day: 'Monday', temp: '35F', img: 'icon'},
    { day: 'Tues', temp: '35F', img: 'icon' },
    { day: 'Wed', temp: '35F', img: 'icon' },
    { day: 'Thur', temp: '35F', img: 'icon' },
    { day: 'Fri', temp: '35F', img: 'icon' },
  ]
  
  
  
  return (
    <div className='tableCont'>
      <div>
        <table className='weaTb'>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.day}</td>
              <td>{val.temp}</td>
              <td>{val.img}</td>
            </tr>
          )
        })}
       
      </table>
      </div>
      
    </div>
  )
}

export default WTable