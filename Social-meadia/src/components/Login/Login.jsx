import styles from './Login.module.css';
const Login = () => {

  return (
    <>
      <h3 className={`${styles.h1} container`}>Login Page</h3>
      <div className='row-12'>
        <div className='col-6'>
        <form className='container bg-info rounded'>
      <label htmlFor='number' >Phone Number</label>
        <input type='text' placeholder='Phone Number ...' className='form-control form-control-dark w-50' autoFocus/>
        <label htmlFor='manualId' >Enter Your Id</label>
        <input type='text' placeholder='Enter Created User Id ...' className='form-control form-control-dark w-50' />
        <span className='btn btn-info'>Do You Want To Login </span>
        <input type='checkbox' autoComplete='off' className={`${styles.custom} justify-content-around mt-3 ms-3`} />
        <button  className="btn btn-outline-info mt-3 d-flex">Submit</button>
      </form>
        </div>
        <div className='col-6'>Tex Box 2</div>
      </div>
    </>
  )
};
export default Login;