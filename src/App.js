import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TextField } from "@mui/material";

function App() {
  return (
    <>
      <header className="formHeader">
        <p>
          <b>Patient Referral Form</b> <br />
          Hayes Valley Health San Francisco
        </p>
      </header>
      <Form className="form">
        <div className="formDiv">
          <p>Referral Patient</p>
          <p>You can add up to five patients at a time</p>
        </div>
        <Container>
          <p>New Referral</p>
          <Row className="formRow">
            <Col>
              <TextField
                variant="standard"
                label="First Name"
                className="textField"
              />
              <TextField
                variant="standard"
                label="Date of Birth"
                className="textField"
              />
              <TextField
                variant="standard"
                label="Phone"
                className="textField"
              />
            </Col>
            <Col>
              <TextField
                variant="standard"
                label="Last Name"
                className="textField"
              />
              <TextField
                variant="standard"
                label="Contact Language"
                className="textField"
              />
              <TextField
                variant="standard"
                label="Email"
                className="textField"
              />
            </Col>
            <TextField variant="standard" label="Address" />
            <TextField variant="standard" label="Notes/Reason" />
          </Row>
        <Button variant="primary" type="submit" className="btn">
          Click here to submit form
        </Button>
        </Container>
      </Form>
    </>
  );
}

export default App;
