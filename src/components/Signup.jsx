import React from "react";
import "./Login.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
} from "mdb-react-ui-kit";

function Signup() {
    return (     
        <MDBContainer fluid className="p-4">
            <MDBRow>
                <MDBCol
                    md="6"
                    className="text-center text-md-start d-flex flex-column justify-content-center"
                >
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                        The best offer <br />
                        <span className="text-primary">for your business</span>
                    </h1>

                    <p
                        className="px-3"
                        style={{ color: "hsl(217, 10%, 50.8%)" }}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti
                        aliquam quibusdam tempora at cupiditate quis eum maiores
                        libero veritatis? Dicta facilis sint aliquid ipsum
                        atque?
                    </p>
                </MDBCol>

                <MDBCol md="6">
                    <MDBCard className="my-5">
                        <MDBCardBody className="p-5">
                            <MDBRow>
                                <MDBCol col="6">
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Name"
                                        id="form1"
                                        type="text"
                                    />
                                </MDBCol>

                                <MDBCol col="6">
                                    <MDBInput
                                        wrapperClass="mb-4"
                                        label="Birth Year"
                                        id="form1"
                                        type="text"
                                    />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput
                                wrapperClass="mb-4"
                                label="Email"
                                id="form1"
                                type="email"
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Disability"
                                id="form1"
                                type="text"
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Password"
                                id="form1"
                                type="password"
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Confirm Password"
                                id="form1"
                                type="password"
                            />
                            <MDBInput
                                wrapperClass="mb-4"
                                id="form1"
                                type="file"
                                accept=".jpg, .jpeg"
                            />

                            <MDBBtn className="w-100 mb-4" size="md"data-bs-dismiss="toast">
                                sign up
                            </MDBBtn>
                            {/* <div class="toast-body">Verified</div> */}

                            <div className="text-center">
                                <p>or sign up with:</p>

                                <MDBBtn
                                    tag="a"
                                    color="none"
                                    className="mx-3"
                                    style={{ color: "#1266f1" }}
                                    
                                >
                                    <MDBIcon fab icon="facebook-f" size="sm" />
                                </MDBBtn>

                                <MDBBtn
                                    tag="a"
                                    color="none"
                                    className="mx-3"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="twitter" size="sm" />
                                </MDBBtn>

                                <MDBBtn
                                    tag="a"
                                    color="none"
                                    className="mx-3"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="google" size="sm" />
                                </MDBBtn>

                                <MDBBtn
                                    tag="a"
                                    color="none"
                                    className="mx-3"
                                    style={{ color: "#1266f1" }}
                                >
                                    <MDBIcon fab icon="github" size="sm" />
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Signup;
