import React from 'react'
import {Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 grayFooter">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <figure>
                            <blockquote className="blockquote">
                                <p className="mb-0">Bir ağaç kesmek, bir adam öldürmeye bedelmiş.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer" >
                                Hikmet Birand
                            </figcaption>
                        </figure>

                        <figure className="mt-3">
                            <blockquote className="blockquote">
                                <p className="mb-0">Çevreni temiz tut ki geleceğin kirlenmesin.</p>
                            </blockquote>
                            <figcaption className="blockquote-footer" >
                                Anonim
                            </figcaption>
                        </figure>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0"/>

                    <div className="col-md-3 mb-md-0 mb-3" style={{ marginLeft: 50}}>
                        <h5 className="text-uppercase">Bağlantılar</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.ankara.edu.tr/">Ankara Üniversitesi</a></li>
                            <li><a href="http://comp.eng.ankara.edu.tr/">A.Ü. Bilgisayar Mühendisliği</a></li>
                            <li><a href="https://www.yok.gov.tr/">Yükseköğretim Kurulu</a></li>
                            <li><a href="https://www.tccb.gov.tr/">T.C. Cumhurbaşkanlığı</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="http://comp.eng.ankara.edu.tr/"> Ankara Üniversitesi</a>
            </div>

        </footer>
    )
}

export default Footer;

