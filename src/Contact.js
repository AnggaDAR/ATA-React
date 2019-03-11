import React, { Component } from 'react';
// import foto from './img/foto.png';
// import icon_location from './img/ico/ico-location.png';
// import icon_twitter from './img/ico/ico-twitter.png';
// import icon_instagram from './img/ico/ico-instagram.png';
// import './css/home.css';
// import './css/bootstrap.min.css';

class Gallery extends Component {
  render() {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-4 left-side">
                    <div class="alterra-contact">
                        <img src="assets/img/logo/logo-alterra-academy-plain@2x.png" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-8 right-side">
                    <div class="container contact">
                        <form>
                            <h3>
                                Contact US
                            </h3>
                            <p> Send us a message and we will get back to you as soon as possible</p>
                            <label for="username">Name<span class="red-star">*</span></label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="assets/img/ico/ico-user.png" />
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="username" placeholder="Name" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <label for="email"></label>Email<span class="red-star">*</span>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="assets/img/ico/ico-email.png" />
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="email" placeholder="Email" aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <label for="phone">Phone<span class="red-star">*</span></label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src="assets/img/ico/ico-phone.png" />
                                    </span>
                                </div>
                                <input type="text" class="form-control" name="phone" placeholder="081..." aria-label="Username"
                                    aria-describedby="basic-addon1"/>
                            </div>
                            <label for="inputGroupSelect04">National</label>
                            <div class="input-group">
                                <select class="custom-select" name="inputGroupSelect04" id="inputGroupSelect04">
                                    <option selected>Choose...</option>
                                    <option value="1">Indonesian</option>
                                    <option value="2">Malaysian</option>
                                    <option value="3">Thailand</option>
                                    <option value="3">Japan</option>
                                    <option value="3">Laos</option>
                                </select>
                            </div>
                            <label for="exampleFormControlTextarea1">Message</label>
                            <div class="input-group" id="form">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                            </div>
                            <button type="button" class="btn btn-orange">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default Gallery;
