import React, { Component } from "react";
import "../assetss/css/login.css";
//servicios
import { ApiUrl } from "../services/apirest";
//librerias
import axios from "axios";

class Login extends React.Component {
  state = {
    form: {
      username: "",
      password: "",
    },
    error: false,
    errorMsg: "",
  };
  manejadorSubmit(e) {
    e.preventDefault();
  }

  manejadorChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  manejadorBoton = () => {
    axios({
      method: "post",
      url: "/auth-token",
      data: {
        username: "admin",
        password: "AX7!aWTuE@gHJRqXV8ag",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <section className="login-block">
          <div className="container">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">Login Now</h2>
                <form onSubmit={this.manejadorSubmit} className="login-form">
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="text-uppercase"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="username"
                      onChange={this.manejadorChange}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="text-uppercase"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder=""
                      name="password"
                      onChange={this.manejadorChange}
                    />
                  </div>

                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      <small>Remember Me</small>
                    </label>
                    <button
                      type="submit"
                      className="btn btn-login float-right"
                      onClick={this.manejadorBoton}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-8 banner-sec">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <img
                        className="d-block img-fluid"
                        src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          <h2>This is Heaven</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          <h2>This is Heaven</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block img-fluid"
                        src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                        alt="First slide"
                      />
                      <div className="carousel-caption d-none d-md-block">
                        <div className="banner-text">
                          <h2>This is Heaven</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Login;
