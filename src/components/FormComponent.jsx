import React, { useState } from "react";
import "./FormComponent.css";
import {
	Button,
	Col,
	Container,
	Form,
	FormFeedback,
	Input,
	Row,
} from "reactstrap";
import { ResultsContainer } from "./ResultsContainer";

const isValidInput = (name) => {
	const maximumInputLength = 12;

	if (name.length > maximumInputLength) {
		setError(true);
	}
};

const FormComponent = () => {
	const [title, setTitle] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [department, setDepartment] = useState("");
	const [company, setCompany] = useState("");
	const [businessArea, setBusinessArea] = useState("");
	const [employee, setEmployee] = useState("");

	const [street, setStreet] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [place, setPlace] = useState("");
	const [country, setCountry] = useState("");
	const [code, setCode] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [terms, setTerms] = useState(false);

	const [isSubmited, setIsSubmited] = useState(false);

	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isValidInput) {
			setError(true);
		} else {
			setError([]);
		}

		setIsSubmited(true);
	};

	return (
		<div>
			<h1>Registration Form</h1>
			<Container className="rounded whiteContainer">
				<Form onSubmit={handleSubmit}>
					<Row>
						<Col xs="12" md="6" className="bg-white border">
							<br />
							<h3>General Information</h3>
							<br />
							<Row>
								<Col xs="12">
									<Input
										type="select"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
										id="selectTitle"
									>
										<option hidden>Title</option>
										<option value="Ms.">Ms.</option>
										<option value="Mr.">Mr.</option>
									</Input>
									<br />
								</Col>
								<Col xs="6">
									<Input
										type="text"
										id="name"
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="First Name"
									/>
									<FormFeedback>{error ? "Invalid input" : null}</FormFeedback>
								</Col>

								<Col xs="6">
									<Input
										type="text"
										id="lastName"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										placeholder="Last Name"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="6">
									<br />
									<Input
										type="password"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Password"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="6">
									<br />
									<Input
										type="password"
										id="confirmPassword"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										placeholder="Confirm Password"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="12">
									<br />
									<Input
										type="select"
										value={department}
										onChange={(e) => setDepartment(e.target.value)}
										id="selectDepartment"
									>
										<option hidden>Department</option>
										<option value="Sales Department">Sales Department</option>
										<option value="Procurement Department">
											Procurement Department
										</option>
										<option value="Marketing Department">
											Marketing Department
										</option>
										<option value="Sport Department">Sport Department</option>{" "}
										<option value="IT Department">IT Department</option>
									</Input>
									<br />
								</Col>
								<Col xs="12">
									<Input
										type="text"
										value={company}
										onChange={(e) => setCompany(e.target.value)}
										placeholder="Company"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="7">
									<br />
									<Input
										type="text"
										value={businessArea}
										onChange={(e) => setBusinessArea(e.target.value)}
										placeholder="Business Area"
									/>
									<FormFeedback>
										Oh noes! that name is already taken
									</FormFeedback>
								</Col>

								<Col xs="5" style={{ marginBottom: "20px" }}>
									<br />
									<Input
										type="select"
										value={employee}
										onChange={(e) => setEmployee(e.target.value)}
										id="employee"
									>
										<option hidden>Empoyees</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
									</Input>
								</Col>
							</Row>
						</Col>

						<Col xs="12" md="6" className="bg-info border blueContainer">
							<br />
							<Row>
								<Col xs="12">
									<h3>Contact Details</h3>
									<br />
									<Input
										type="text"
										id="street"
										value={street}
										onChange={(e) => setStreet(e.target.value)}
										placeholder="Street + Nr"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="12">
									<br />
									<Input
										type="text"
										id="additionalInfo"
										value={additionalInfo}
										onChange={(e) => setAdditionalInfo(e.target.value)}
										placeholder="Additional Information"
									/>
								</Col>

								<Col xs="4">
									<br />
									<Input
										type="text"
										id="zip"
										value={zipCode}
										onChange={(e) => setZipCode(e.target.value)}
										placeholder="Zip Code"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="8">
									<br />
									<Input
										type="select"
										id="selectPlace"
										value={place}
										onChange={(e) => setPlace(e.target.value)}
									>
										<option hidden>Place</option>
										<option value="1">1</option>
										<option value="2">2</option>
									</Input>
								</Col>

								<Col xs="12">
									<br />
									<Input
										type="select"
										id="country"
										value={country}
										onChange={(e) => setCountry(e.target.value)}
									>
										<option hidden>Country</option>
										<option value="Georgia">Georgia</option>
										<option value="Italy">Italy</option>
										<option value="France">France</option>
										<option value="Austria">Austria</option>
										<option value="Germany">Germany</option>
									</Input>
								</Col>

								<Col xs="4">
									<br />
									<Input
										type="text"
										placeholder="Code +"
										id="code"
										value={code}
										onChange={(e) => setCode(e.target.value)}
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>

								<Col xs="8">
									<br />
									<Input
										type="text"
										placeholder="Phone Number"
										id="phoneNumber"
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
									/>
								</Col>
								<Col xs="12">
									<br />
									<Input
										type="email"
										id="email"
										value={email}
										name="email"
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Your Email"
									/>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>
								<Col xs="12">
									<br />
									<Input
										type="checkbox"
										id="checkbox"
										onChange={() => setTerms(!terms)}
									/>

									<span style={{ marginLeft: "6px" }}>
										I Do accept the Terms and Conditions of your site
									</span>
									<FormFeedback>{error ? "Invalid Input" : null}</FormFeedback>
								</Col>
							</Row>
							<br />
							<Button
								type="submit"
								name="submit"
								id="submit"
								style={{ marginBottom: "20px" }}
								color="success"
							>
								Register Now
							</Button>
						</Col>
					</Row>
				</Form>
			</Container>

			<br />

			{isSubmited && (
				<ResultsContainer
					title={title}
					name={name}
					lastName={lastName}
					department={department}
					company={company}
					businessArea={businessArea}
					employee={employee}
					street={street}
					additionalInfo={additionalInfo}
					zipCode={zipCode}
					place={place}
					country={country}
					code={code}
					phoneNumber={phoneNumber}
					email={email}
					terms={terms}
				/>
			)}
		</div>
	);
};

export default FormComponent;
