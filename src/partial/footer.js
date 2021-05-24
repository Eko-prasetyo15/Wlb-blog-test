import React from "react"

const Footer = () => {

    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://www.facebook.com/prasetyoeko15/"
                        target="blank"
                        role="button"
                    ><i className="fa fa-facebook"></i
                    ></a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        href="https://www.instagram.com/abushanum/"
                        target="blank"
                        role="button"
                    ><i className="fa fa-instagram"></i
                    ></a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        href="https://www.linkedin.com/in/ekoprasetyopermadi/"
                        target="blank"
                        role="button"
                    ><i className="fa fa-linkedin"></i
                    ></a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        href="https://github.com/Eko-prasetyo15"
                        target="blank"
                        role="button"
                    ><i className="fa fa-github"></i
                    ></a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2021 Clik for detail code :
            <a className="text-white" href="https://github.com/Eko-prasetyo15/Wlb-blog-test" target="blank">@Abushanum</a>
            </div>
        </footer>
    )
}

export default Footer

