import React from 'react'

const Profile = () => {
    console.log("Hello");
    return (
        <>
        <div>
        <h1>List of employees</h1>
    </div>
  <div>
    <table className="table table-striped table-dark">
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
          <td>khushali patel</td>
          <td>Developer</td>
          <td>abc@gmail.com</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Arwa Guriwala</td>
          <td>Developer</td>
          <td>abc@gmail.com</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Divyaraj Rana</td>
          <td>Developer</td>
          <td>abc@gmail.com</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Avani Talati</td>
          <td>Developer</td>
          <td>abc@gmail.com</td>
        </tr>
      </tbody>
    </table>
  </div>
        </>
            
           
    )
}

export default Profile
