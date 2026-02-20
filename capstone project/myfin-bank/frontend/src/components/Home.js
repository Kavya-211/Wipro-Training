function Home() {
  return (
    <div>
      <div id="bankCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/banner1.png" className="d-block w-100" height="500" alt="banner1"/>
          </div>


        </div>
      </div>
      <div className="container mt-5">
        <h3 className="text-center mb-4">Our Services</h3>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>Savings Account</h5>
              <p>Secure savings with competitive interest rates.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>Personal Loans</h5>
              <p>Quick approval and flexible repayment options.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              <h5>Fixed Deposits</h5>
              <p>Grow your money with Fixed deposit.High returns with guaranteed safety.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-light mt-5 py-5">
        <div className="container text-center">
          <h3>Why Choose MyFin Bank?</h3>
          <div className="row mt-4">

            <div className="col-md-4">
              <h5> Secure Banking</h5>
              <p>Advanced security and encrypted transactions.</p>
            </div>

            <div className="col-md-4">
              <h5> Fast Transfers</h5>
              <p>Instant fund transfers anytime.</p>
            </div>

            <div className="col-md-4">
              <h5> 24/7 Support</h5>
              <p>Customer support available round the clock.</p>
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        © 2026 MyFin Bank | All Rights Reserved
      </footer>

    </div>
  );
}

export default Home;