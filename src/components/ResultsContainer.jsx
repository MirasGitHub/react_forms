import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./ResultsContainer.css";

const ResultsContainer = ({
	title,
	name,
	lastName,
	department,
	company,
	businessArea,
	employee,
	street,
	additionalInfo,
	zipCode,
	place,
	country,
	code,
	phoneNumber,
	email,
	terms,
}) => {
	return (
		<div>
			<Container className="resultsContainer">
				<Row>
					<Col sm="12" md="6" className="bg-white rounded border">
						<br />
						<h3>General Information:</h3>
						<p>
							<b>Name:</b> {title} {name} {lastName}
						</p>
						<p>
							<b>Department:</b> {department}
						</p>
						<p>
							<b>Company:</b> {company}
						</p>
						<p>
							<b>Business Area:</b> {businessArea}
						</p>
						<p>
							<b>Employee:</b> {employee}
						</p>
					</Col>

					<Col sm="12" md="6" className="bg-white rounded border">
						<br />
						<h3>Contact Details:</h3>
						<p>
							<b>Street:</b> {street}
						</p>
						<p>
							<b>Additional Info:</b> {additionalInfo}
						</p>
						<p>
							<b>Zip Code:</b> {zipCode} <b>Place:</b> {place}
						</p>
						<p>
							<b>Country:</b> {country}
						</p>
						<p>
							<b>Phone number:</b> {code} {phoneNumber}
						</p>
						<p>
							<b>Email:</b> {email}
						</p>
						<p>
							<b>Terms:</b> {terms ? "Accepted" : "Not accepted"}
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export { ResultsContainer };
