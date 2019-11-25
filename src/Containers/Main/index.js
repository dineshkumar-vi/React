import React, { Component , Fragment}from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Main extends Component {

  render(){
    return(
      <Fragment>
        <main id="main" role="main" className="main-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Sample component title</h1>
                <p className="lead">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. 
                            Ut magnam harum non autem possimus
                            odio, a, repudiandae voluptates dolores, 
                            architecto dolore! Ratione, facere doloribus
                            cupiditate a veritatis ex veniam. Aliquid?
                </p>

                <p className="lead">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Ut magnam harum non 
                             autem possimus
                            odio, a, repudiandae voluptates dolores, 
                            architecto dolore! Ratione, facere doloribus
                            cupiditate a veritatis ex veniam. Aliquid?
                </p>
                <p className="lead">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit.
                             Ut magnam harum non autem possimus
                            odio, a, repudiandae voluptates dolores, 
                            architecto dolore! Ratione, facere doloribus
                            cupiditate a veritatis ex veniam. Aliquid?
                </p>
                <p className="lead">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ut magnam harum non 
                            autem possimus
                            odio, a, repudiandae voluptates dolores,
                             architecto dolore! Ratione, facere doloribus
                            cupiditate a veritatis ex veniam. Aliquid?
                </p>
                <p className="lead">
                            Lorem ipsum dolor sit amet consectetur
                             adipisicing elit. Ut magnam harum 
                            non autem possimus
                            odio, a, repudiandae voluptates dolores,
                             architecto dolore! Ratione, facere doloribus
                            cupiditate a veritatis ex veniam. Aliquid?
                </p>

              </div>
            </div>
          </div>
        </main>
      </Fragment>

    );
  }
}

export const mapStateToProps = () => {
  return {
  };
};

export const mapDispatchToProps = () => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

