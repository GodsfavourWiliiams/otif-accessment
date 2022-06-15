import React from 'react';
import {ReactComponent as FooterLogo} from "../Assets/FooterLogo.svg";

const Footer = () => {
  return (
    <div>
		<footer className="bg-light-100">
			<div className=" pt-5">
				<div className="container mx-auto row">
					<div className="mb-5">
						<FooterLogo/>
					</div>
						<div className="row ">
							<div className= "col-sm-6 col-md-4 col-xl-2 mb-md-0 mb-4">
								<h6 className="fw-bold text-primary-100 ">Products</h6>
								<ul className="list-unstyled text-light-100">
									<li className="py-1">Terms and Conditions</li>
									<li className="py-1">Quoting</li>
									<li className="py-1">Security</li>
									<li className="py-1">Why OTIF?</li>
									<li className="py-1 ">Companies</li>
		           				 </ul>
							</div>
							<div className="col-xl-2 col-sm-6 col-md-4 mb-md-0 mb-4">
								<h6 className="text-primary-100">Shipping</h6>
								<ul className="list-unstyled text-light-100">
									<li className="py-1">Shipping</li>
									<li className="py-1">Shipping to</li>
									<li className="py-1">Deliveries to Mexico</li>
									<li className="py-1">Cheap shipping</li>
									<li className="py-1">Package shipments</li>
									<li className="py-1">Economic shipment</li>
									<li className="py-1">National shipments</li>
									<li className="py-1">Secure shipments</li>
									<li className="py-1">Prepaid guides</li>
									<li className="py-1">Express courier</li>
									<li className="py-1">Economic package</li>
								</ul>
							</div>
							<div className="col-xl-2 col-sm-6 col-md-4 mb-md-0 mb-4">
								<h6 className="text-primary-100">International Shipping</h6>
									<ul className="list-unstyled text-light-100">
										<li className="py-1">International Deliveries</li>
										<li className="py-1">Shipping Monterrey</li>
										<li className="py-1">Secure shipments</li>
									</ul>
							</div>
							<div className="col-xl-2 col-sm-6 col-md-4 mb-md-0 mb-4">
									<h6 className="text-primary-100">Parcels</h6>
									<ul className="list-unstyled text-light-100">
										<li className="py-1">Mails from Mexico</li>
										<li className="py-1">Carssa</li>
										<li className="py-1">Express Package</li>
										<li className="py-1">Post Office</li>
										<li className="py-1">Redpack</li>
										<li className="py-1">Sendex</li>
										<li className="py-1">UPS</li>
										<li className="py-1">DHL</li>
									</ul>
							</div>
						<div className="col-md col-xl-3">
							<div className="row justify-content-end">
								<div className=" mb-md-0 mb-4">
									<h6 className=" text-primary-100 ">Subscribe to our newsleter</h6>
									<form className="">
										<div className="form-group d-flex">
										<input type="email" className="bg-white rounded-3 border-0 outline-0 px-3" placeholder="enter your email"/>
										<button className='text-white rounded border-0 py-3 px-4 bg-primary-100'>Subscribe</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						</div>
					</div>
				<hr className='mt-5' />
				<div className="row container mx-auto text-primary-200 ">
					<div className= "col-md-4">
						<p className="">Copyright © 2022. All rights reserved. </p>
					</div>
					<div className="col-lg-2">
						<p className="">Privacy & policy</p>
					</div>
					<div className='col-lg-2'>
						<p className="">Terms & Conditions</p>
					</div>
				</div>
			</div>
		</footer>
    </div>
  )
}

export default Footer;