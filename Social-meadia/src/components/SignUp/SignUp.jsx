import styles from "./SignUp.module.css";
const SignUp = () => {
  return (
    <>
      <h3 className={`${styles.h1} container`}>Sign Up</h3>
      <div className="row-12">
        <div className="col-6">
          <form className='container rounded bg-info'>
            <label htmlFor='name'>Name :</label>
            <input type='name' placeholder='User Name ...' className='form-control form-control-dark w-50' autoFocus />
            <label htmlFor='email' >Email</label>
            <input type='email' placeholder='User E-Mail ...' className='form-control form-control-dark w-50' />
            <label htmlFor='number' >Phone Number</label>
            <input type='text' placeholder='Phone Number ...' className='form-control form-control-dark w-50' />
            <label htmlFor='district' >District</label>
            <input type='text' placeholder='Enter Your District ...' className='form-control form-control-dark w-50' />
            <label htmlFor='manualId' >Create Id</label>
            <input type='text' placeholder='Enter A Manual User Id ...' className='form-control form-control-dark w-50' />
            <button className="btn btn-outline-info custom-button mt-3">Register</button>
          </form>
        </div>
        <div className="col-6"> 
        <h1>Tex Box 2</h1>
        </div>
      </div>
    </>
  )
};
export default SignUp;