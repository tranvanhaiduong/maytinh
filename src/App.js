import './App.css';


function App() {

  const dislay = value => {
    var gt = "";
    gt = document.getElementById("result").value;
    var ops = ['/', '*', '+', '%'];
    if(gt==="" 
      || ops.includes(gt.slice(-1)) 
    )
    { 
      if (value!=='/' &&value!=='*' &&value!=='%' &&value!=='+')
      {
        document.getElementById("result").value += value;
      }
    } 
    else  
    if(gt.slice(-1) === '.'
      )
    { 
      if (value!=='.'&&value!=='/' &&value!=='*' &&value!=='%' &&value!=='+'&&value!=='-')
      {
        document.getElementById("result").value += value;
      }
    }
    else 
    if(gt.slice(-1) === '-'
      )
    { 
      if (value!=='/' &&value!=='*' &&value!=='%' &&value!=='+'&&value!=='-'
      ){
        document.getElementById("result").value += value;
      }
    }
     else 
    // if(gt.slice(-1))
    //   {
    //   if (value!== "."){
    //     if(gt.slice(-2,-1)==="+" || gt.slice(-2,-1)==="-" || gt.slice(-2,-1)==="*" || gt.slice(-2,-1)==="/"){
    //       document.getElementById("result").value = document.getElementById("result").value.slice(0,-1)+value; 
    //     }
    //     else  document.getElementById("result").value += value;
    //   }
    // }
    // else
    if(gt.slice(1) === '0')
      {
      if (value!== "0"){
        if(value!=='.'&&value!=='/' &&value!=='*' &&value!=='%' &&value!=='+'&&value!=='-')
       document.getElementById("result").value = value;
       else  document.getElementById("result").value += value;
      }
    } 
    else 
    if(value === "."){
      var kq='';
      try {
        kq=eval(document.getElementById("result").value+value)
      } catch (error) {
        kq="Math Error"
      }
      if(kq!=="Math Error")
      document.getElementById("result").value += value;
     }
     else 
    if(gt.slice(-1) === '0')
      {
      if(gt.slice(-2,-1)==="+" || gt.slice(-2,-1)==="-" || gt.slice(-2,-1)==="*" || gt.slice(-2,-1)==="/"){
        if (value!== "0"){
          if(value!=='.')
          document.getElementById("result").value = document.getElementById("result").value.slice(0,-1)+value; 
         else  document.getElementById("result").value += value; 
        }
      }
      else document.getElementById("result").value += value; 
    }
    else document.getElementById("result").value += value; 
  } 
  
  const tinh = () => {
    var p = document.getElementById("result").value;
    var q = eval (p.replace(/%/g,'/100'));
    document.getElementById("result").value = q ;
  }
  
  const AC = () => {
    document.getElementById("result").value = " ";
  }

  const DEC = () => {
    var a = document.getElementById("result").value;
    var x = a.slice(0,-1);  
    document.getElementById("result").value = x;
  }


  return (
    <div className='form'>
      <div className='btn-form'>
      <input colspan="3" className='setText' type='text' id="result"  disabled></input>
      </div>
      <table>

        <tr>
            <input className='a' type = 'button' value = 'AC' onClick={AC}></input>
            <input className='a' type = 'button' value = '+/-' onClick={DEC}></input>
            <input className='a' type = 'button' value = '%' onClick={() =>dislay('%')}></input>
            <input className='b' type = 'button' value = '÷' onClick={() =>dislay('/')}></input>
          </tr>
          
          <tr>
            <input className='c' type = 'button' value = '7' onClick={() =>dislay('7')}></input>
            <input className='c' type = 'button' value = '8' onClick={() =>dislay('8')}></input>
            <input className='c' type = 'button' value = '9' onClick={() =>dislay('9')}></input>
            <input className='b' type = 'button' value = 'x' onClick={() =>dislay('*')}></input> 
          </tr>

          <tr>
            <input className='c' type = 'button' value = '4' onClick={() =>dislay('4')}></input>
            <input className='c' type = 'button' value = '5' onClick={() =>dislay('5')}></input>
            <input className='c' type = 'button' value = '6' onClick={() =>dislay('6')}></input>
            <input className='b' type = 'button' value = '-' onClick={() =>dislay('-')}></input>
          </tr>
          
          <tr>
            <input className='c' type = 'button' value = '1' onClick={() =>dislay('1')}></input>
            <input className='c' type = 'button' value = '2' onClick={() =>dislay('2')}></input>
            <input className='c' type = 'button' value = '3' onClick={() =>dislay('3')}></input>
            <input className='b' type = 'button' value = '+' onClick={() =>dislay('+')}></input>
          </tr>

          <tr>
            <input className='d' type = 'button' value = '0' onClick={() =>dislay('0')}></input>
            <input className='c' type = 'button' value = '.' onClick={() =>dislay('.')}></input>
            <input className='b' type = 'button' value = '=' onClick={tinh}></input>
          </tr>
            
        </table>
      </div>    
  );
}

export default App;