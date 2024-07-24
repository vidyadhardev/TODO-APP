let ClockTime = () => {
  let time = new Date();
  return (
    <>
      <p>   In Bharat at all Current time &nbsp; : 
        <b>
          &nbsp;  {time.toLocaleDateString()}-
          {time.toLocaleTimeString()}- {time.toDateString()}
        </b>
      </p>
    </>
  );
};
export default ClockTime;
