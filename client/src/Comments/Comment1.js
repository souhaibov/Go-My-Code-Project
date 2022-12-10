import React from 'react'
import './comment1.css'

const Comment1 = () => {
  return (
    <div className='commentary'>
  <div>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <section className="content-item" id="comments">
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <form>
            <h3 className="pull-left">New Comment</h3>
            <button type="submit" className="btn btn-normal pull-right">
              Submit
            </button>
            <fieldset>
              <div className="row">
                <div className="col-sm-3 col-lg-2 hidden-xs">
                  <img
                    className="img-responsive"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt='h'
                  />
                </div>
                <div className="form-group col-xs-12 col-sm-9 col-lg-10">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your message"
                    required
                    defaultValue={""}
                  />
                </div>
              </div>
            </fieldset>
          </form>
          <h3>4 Comments</h3>
          {/* COMMENT 1 - START */}
          <div className="media">
            <a className="pull-left" href="g">
              <img
                className="media-object"
                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                alt='h'
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">John Doe</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul className="list-unstyled list-inline media-detail pull-left">
                <li>
                  <i className="fa fa-calendar" />
                  27/02/2014
                </li>
                <li>
                  <i className="fa fa-thumbs-up" />
                  13
                </li>
              </ul>
              <ul className="list-unstyled list-inline media-detail pull-right">
                <li className>
                  <a href>Like</a>
                </li>
                <li className>
                  <a href>Reply</a>
                </li>
              </ul>
            </div>
          </div>
          {/* COMMENT 1 - END */}
          {/* COMMENT 2 - START */}
          <div className="media">
            <a className="pull-left" href="h">
              <img
                className="media-object"
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt='h'
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">John Doe</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul className="list-unstyled list-inline media-detail pull-left">
                <li>
                  <i className="fa fa-calendar" />
                  27/02/2014
                </li>
                <li>
                  <i className="fa fa-thumbs-up" />
                  13
                </li>
              </ul>
              <ul className="list-unstyled list-inline media-detail pull-right">
                <li className>
                  <a href>Like</a>
                </li>
                <li className>
                  <a href>Reply</a>
                </li>
              </ul>
            </div>
          </div>
          {/* COMMENT 2 - END */}
          {/* COMMENT 3 - START */}
          <div className="media">
            <a className="pull-left" href="g">
              <img
                className="media-object"
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt='h'
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">John Doe</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul className="list-unstyled list-inline media-detail pull-left">
                <li>
                  <i className="fa fa-calendar" />
                  27/02/2014
                </li>
                <li>
                  <i className="fa fa-thumbs-up" />
                  13
                </li>
              </ul>
              <ul className="list-unstyled list-inline media-detail pull-right">
                <li className>
                  <a href>Like</a>
                </li>
                <li className>
                  <a href>Reply</a>
                </li>
              </ul>
            </div>
          </div>
          {/* COMMENT 3 - END */}
          {/* COMMENT 4 - START */}
          <div className="media">
            <a className="pull-left" href="www">
              <img
                className="media-object"
                src="https://bootdey.com/img/Content/avatar/avatar4.png"
                alt='h'
              />
            </a>
            <div className="media-body">
              <h4 className="media-heading">John Doe</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <ul className="list-unstyled list-inline media-detail pull-left">
                <li>
                  <i className="fa fa-calendar" />
                  27/02/2014
                </li>
                <li>
                  <i className="fa fa-thumbs-up" />
                  13
                </li>
              </ul>
              <ul className="list-unstyled list-inline media-detail pull-right">
                <li className>
                  <a href>Like</a>
                </li>
                <li className>
                  <a href>Reply</a>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
</div>

</div>

  )
}

export default Comment1