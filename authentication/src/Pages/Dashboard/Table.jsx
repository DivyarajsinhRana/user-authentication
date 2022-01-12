import './table.css'

const Table = () => {
  return (
    <>
      <div >
        <h1 className='Text'>List of employees</h1>
      </div>
      <div className='Table mt-sm-3'>
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Name</th>
              <th scope="col">Designation</th>
              <th scope="col">Email id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Divyaraj Rana</td>
              <td>Developer</td>
              <td>dc@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Arwa Guriwala</td>
              <td>Developer</td>
              <td>ag@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>khushali patel</td>
              <td>Developer</td>
              <td>kp@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Avani Talati</td>
              <td>Developer</td>
              <td>at@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
