import "./Comment.css"


var createReactClass = require('create-react-class');
var NewComponent = createReactClass({
    render: function() {
      return (
        <div>
          
         
          <section>
            <div className="container">
              <div className="row">
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                  <h2>Comments</h2>
                  <div className="comment mt-4 text-justify float-left">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width={40} height={40} />
                    <h4>Jhon Doe</h4>
                    <span>- 20 October, 2018</span>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                  </div>
                  <div className="text-justify darker mt-4 float-right">
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width={40} height={40} />
                    <h4>Rob Simpson</h4>
                    <span>- 20 October, 2018</span>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                  </div>
                  <div className="comment mt-4 text-justify">
                    <img src="https://i.imgur.com/yTFUilP.jpg" alt="" className="rounded-circle" width={40} height={40} />
                    <h4>Jhon Doe</h4>
                    <span>- 20 October, 2018</span>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                  </div>
                  <div className="darker mt-4 text-justify">
                    <img src="https://i.imgur.com/CFpa3nK.jpg" alt="" className="rounded-circle" width={40} height={40} />
                    <h4>Rob Simpson</h4>
                    <span>- 20 October, 2018</span>
                    <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                  <form id="algin-form">
                    <div className="form-group">
                      <h4>Leave a comment</h4>
                      <label htmlFor="message">Message</label>
                      <textarea name="msg" id msg cols={30} rows={5} className="form-control" style={{backgroundColor: 'black'}} defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="fullname" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <p className="text-secondary">If you have a <a href="www" className="alert-link">gravatar account</a> your address will be used to display your profile picture.</p>
                    </div>
                    <div className="form-inline">
                      <input type="checkbox" name="check" id="checkbx" className="mr-1" />
                      <label htmlFor="subscribe">Subscribe me to the newlettter</label>
                    </div>
                    <div className="form-group">
                      <button type="button" id="post" className="btn">Post Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  });

  export default NewComponent