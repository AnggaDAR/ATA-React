import React, { Component } from 'react';
import foto from '../images/foto.png';
import icon_location from '../images/ico/ico-location.png';
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/home.css'

class Home extends Component {
  render() {
    return (
        <div>
            <Header/>
            <section class="home">
                <div className="header-profile">
                    <img id="foto" src={foto} />
                    <div>
                        <h2 className="nama">Hian Oliviera</h2>
                        <span className="nama">
                            <img id="icon" src={icon_location} />
                            <span>Malang, East Java, Indonesia</span>
                        </span>
                        <h4 className="nama">Frontend Dev, UI/UX and Design</h4>
                        <div className="button">
                            <button type="button" className="btn btn-primary">Download CV</button>
                        </div>
                    </div>
                </div>
                <div>
                    <article className="container my-5">
                        <div className="row py-3">
                            <div className="col-md-6">
                                <div className="spasi">
                                    <div>
                                        <h3 className="aboutme">About Me</h3>
                                        <p>
                                            Hi! I am Hian Oliviera, I work as a <i>Front-end Developer</i> at <span className="orange">Alterra
                                                group</span>
                                        </p>
                                        <p>
                                            Front-end Deloper are constructive work use HTML,CSS, and JavaScript.
                                        </p>
                                        <p>
                                            Front-end Developer are the people who make it design and develop the design until
                                            become a website that can run
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="spasi">
                                    <div>
                                        <h3 className="information">Information</h3>
                                        <table className="information">
                                            <tr>
                                                <td>Age</td>
                                                <td>: 22th</td>
                                            </tr>
                                            <tr>
                                                <td>Email</td>
                                                <td>: HianOliviera@altera.id</td>
                                            </tr>
                                            <tr>
                                                <td>Address</td>
                                                <td>: Jl.Simpang Tambora I No.9 Karang Besuki,Sukun,Malang,65146</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <Footer/>
        </div>
    );
  }
}

export default Home;
