import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* first row */}

      <div className="home_card">
        <Link to="/saudi">
          <Card className="card">
            <CardBody>
              <CardTitle className="title">Saudi Visa Registration</CardTitle>
            </CardBody>
          </Card>
        </Link>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Saudi Visa Candidate</CardTitle>
          </CardBody>
        </Card>
      </div>

      {/* Second Row */}

      <div className="home_card">
        <Card className="card">
          <CardBody>
            <CardTitle className="title"> Visa Work Receipt</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">
              Attestation & other Work Reciept
            </CardTitle>
          </CardBody>
        </Card>
      </div>

      {/* Third Row */}

      <div className="home_card">
        <Card className="card">
          <CardBody>
            <CardTitle className="title"> Mark Work Completion</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Dispatch Register</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Fee & Charges</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Invoice Register </CardTitle>
          </CardBody>
        </Card>
      </div>

      {/* Fourth Row */}

      <div className="home_card">
        <Card className="card">
          <CardBody>
            <CardTitle className="title"> SubWork Outgoing</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Subwork Return</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Subwork Despatch Register</CardTitle>
          </CardBody>
        </Card>

        <Card className="card">
          <CardBody>
            <CardTitle className="title">Manager SW(Agency Wise) </CardTitle>
          </CardBody>
        </Card>
      </div>

      {/* Fifth Row */}

      <div className="home_card">
        <Card className="card">
          <CardBody>
            <CardTitle className="title">
              Manager SW(Sub Agency Wise){" "}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
