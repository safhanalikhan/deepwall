import {useState} from 'react';
import styled from 'styled-components';
function SweetAlert({message}){
    const [display , setDisplay] = useState(false)
    const Alert = styled.div`
        position:fixed;
        bottom:20px;
        right:20px;
        // height:20px;
        color:#d9121f;
        background-color:#fff;
        border-radius:5px;
        display:${display ? "flex" : "none"};
        align-items:center ;
        gap:15px;
        z-index:1000;
        box-shadow:2px 5px 20px #00000020;
        .close-btn{
            background-color:#e3e3f599;
            height: 30px;
            width: 30px;
            display: grid;
            border-radius: 50%;
            place-items: center;
            cursor:pointer
        }
    }
    `;


  return (
    <Alert className='px-3 py-2 ' >
        <i class="bi bi-hand-thumbs-up"></i>
        <div className='me-5' > {message} </div>
        <div className='close-btn ' onClick={()=>setDisplay(false)} >
            <i class="bi bi-x fs-5"></i>
        </div>
    </Alert>
  )
}

export default SweetAlert