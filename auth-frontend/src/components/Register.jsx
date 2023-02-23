import React, { Component } from "react";

export class Register extends Component {
  render() {
    return (
      <div className="container w-50 my-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <h3 className="card-header">Registre-se</h3>
            <div className="card-body">
              <form onSubmit={this.handlesubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Nome:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Digite seu nome"
                    name="name"
                    onChange={this.handlechange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">E-mail</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Digite seu e-mail"
                    name="email"
                    onChange={this.handlechange}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Senha:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="*******"
                    name="password"
                    onChange={this.handlechange}
                  />
                </div>

                <div className="card-footer">
                  <button className="btn btn-block btn-success ">
                    Efetuar registro
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Register;
