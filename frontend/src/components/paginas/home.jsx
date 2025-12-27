import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';

function Home() {

  const navigate = useNavigate();
  
  const [numeroUno, setNumeroUno] = useState('');
  const [numeroDos, setNumeroDos] = useState('');

    
  function ejecutarSuma(event){
    event.preventDefault();

    const suma = Number(numeroUno) + Number(numeroDos);
    // ejecutar alerta 1
    // Swal.fire({
    //   title: 'Resultado',
    //   text: 'El resultado de la suma es: ' + suma,
    //   icon: 'success',
    //   confirmButtonText: 'Cool'
    // });

    // ejecutar alerta con botón
    // Swal.fire({
    //   title: 'Resultado',
    //   text: 'El resultado de la suma es: ' + suma,
    //   icon: 'success',
    //   confirmButtonText: 'Ir a cursos',
    // }).then( (result) => {
    //   if(result.isConfirmed){
    //     //navigate("/");
    //     window.location.href = "https://eduardoarias.co/";
    //   }
    // });

    // ejecutar toast
    toast.success("el resultado de la suma es: " + suma, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }


  return(
    <div className='container my-5'>
      
      <h1>ALERTAS</h1>

      {/* formulario */}
      <form className='mt-4'>

        {/* numero 1 */}
        <div className='mb-3'>
          <label className='form-label'>Número 1</label>
          <input type="number" className='form-control' value={numeroUno} onChange={ (e) => setNumeroUno(e.target.value)} required / >
        </div>

        {/* numero 2 */}
        <div className='mb-3'>
          <label className='form-label'>Número 2</label>
          <input type="number" className='form-control' value={numeroDos} onChange={ (e) => setNumeroDos(e.target.value)} required / >
        </div>

        {/* botón */}
        <button type='submit' className='btn btn-primary w-100' onClick={ejecutarSuma} >Sumar</button>
      </form>

      <ToastContainer />


    </div>
  )
}



export default Home;