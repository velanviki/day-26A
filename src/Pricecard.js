import './Pricecard.css';


export default function Pricecard(props) {
    return <div className="col-lg-3 col-md-6">
        <div className="card text-center card-shadow on-hover border-0 mb-4">
            <div className="card-body font-14">
                <h5 className="mt-3 mb-1 font-weight-medium">{props.data.plan}</h5>
                <h6 className="subtitle font-weight-normal">{props.data.user}</h6>



                {props.data.ispopular ? <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span> : ""}




                <div className="pricing my-3">
                    <sup>$</sup>
                    <span className="monthly display-5">{props.data.rate}</span>
                    <span className="yearly display-5"></span>
                    <small className="monthly">/mo</small>
                    <small className="yearly"></small>
                    <span className="d-block">Save <span className="font-weight-medium">{props.data.benefit}</span> a Year</span>
                </div>
                <ul className="list-inline">


                    {
                        props.data.features.map(obj => {
                            if (obj.enable) {
                                return <li className="d-block py-2">{obj.name}</li>
                            } else {
                                return <li className="d-block py-2">{obj.enable}</li>
                            }
                        }
                        )}
                    {/* <li className="d-block py-2">Perfect of Small Team</li>
          <li className="d-block py-2">Unlimited Invoices</li>
          <li className="d-block py-2">Project Management</li>
          <li className="d-block py-2">&nbsp;</li>
          <li className="d-block py-2">&nbsp;</li> */}
                </ul>
                <div className="bottom-btn">

                    {props.data.btn ? <a class="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a> : <a className="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>}
                </div>
            </div>
        </div>
    </div>



}