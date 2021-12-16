// import logo from './logo.svg';
import './App.css';
import Pricecard from './Pricecard';
function App() {
  let details = [
    {
      plan: "BASIC",
      user: "For Team of 3-5 memnbers",
      
      rate: 28,
      ispopular : false,
      btn : false,
      benefit: " $20 ",
      features: [
        {
          name: "Perfect of small Team",
          enable : true,
        },
        {
          name: "Unlimited Invoices",
          enable : true,
        },
        {
          name: "Project Management",
          enable : true,
        },
        {
          name: "Team Management",
          enable : false,
        },
        {
          name: "Time Tracking",
          enable : false,
        }
      ]
    },
    {
      plan: "INTERMEDIATE",
      user: "For Team of 5-10 memnbers",
      
      rate: 39,
      ispopular : true,
      btn : true,
      benefit: " $30  ",
      features: [
        {
          name: "Perfect of small Team",
          enable : true,
        },
        {
          name: "Unlimited Invoices",
          enable : true,
        },
        {
          name: "Project Management",
          enable : true,
        },
        {
          name: "Team Management",
          enable : true,
        },
        {
          name: "Time Tracking",
          enable : false,
        }
      ]
    },
    {
      plan: "HIGH CLASS",
      user: "For Team of 10-25 memnbers",
      
      rate: 58,
      ispopular : false,
      btn : false,
      benefit: " $50 ",
      features: [
        {
          name: "Perfect of small Team",
          enable : true,
        },
        {
          name: "Unlimited Invoices",
          enable : true,
        },
        {
          name: "Project Management",
          enable : true,
        },
        {
          name: "Team Management",
          enable : true,
        },
        {
          name: "Time Tracking",
          enable : true,
        },
      ]
    },
    {
      plan: "SUPREME",
      user: "For Team of 25-100 memnbers",
      
      rate: 99,
      ispopular : false,
      btn : false,
      benefit: " $80 ",
      features: [
        {
          name: "Perfect of small Team",
          enable : true,
        },
        {
          name: "Unlimited Invoices",
          enable : true,
        },
        {
          name: "Project Management",
          enable : true,
        },
        {
          name: "Team Management",
          enable : true,
        },
        {
          name: "Time Tracking",
          enable : true,
        }

      ]
    }

  ]

  return (
    <div className="pricing1 py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h3 className="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
            <h6 className="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
            <div className="switcher-box mt-4 d-flex align-items-center justify-content-center">
              <span className="font-14 font-weight-medium">MONTHLY</span>
              <div className="onoffswitch position-relative mx-2">
                <input type="checkbox" name="onoffswitch1" className="onoffswitch-checkbox d-none" id="myonoffswitch1" />
                <label className="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
                  <span className="onoffswitch-inner d-block"></span>
                  <span className="onoffswitch-switch d-block bg-white position-absolute"></span>
                </label>
              </div>
              <span className="font-14 font-weight-medium">YEARLY</span>
            </div>
          </div>
        </div>

        <div className="row mt-5">
        {
          details.map((obj) => {
            return <Pricecard data={obj}></Pricecard>
          })
        }
      </div>
    </div>
    </div>

  );
}

export default App;
