import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import axios from './axios';


const Tabla = ({ fetchURL }) => {

  const [data_m, setData_m] = useState([])

  const data_columns = [
    { title: 'Código', field: 'code'},
    { title: 'Categoria', field: 'category'},
    { title: 'Nombre', field: 'name'}
  ]

  useEffect(() => {

    async function fetchData() {

      try {
        const monograph_req = await axios.get(fetchURL)
        setData_m(monograph_req.data)
        return monograph_req
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [fetchURL])
 
    return (
      <div>
        <MaterialTable 
          columns={data_columns}
          data={data_m}
          title=""
          onChangePage={()=>{console.log(data_m)}}
        />
      </div>
    )
  }

  export default Tabla;