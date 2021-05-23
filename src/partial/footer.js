import React from "react"

const Footer = () => {

    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        href="https://www.facebook.com/prasetyoeko15/"
                        target="blank"
                        role="button"
                    ><i class="fa fa-facebook"></i
                    ></a>
                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        // style="background-color: #ac2bac;"
                        href="https://www.instagram.com/abushanum/"
                        target="blank"
                        role="button"
                    ><i class="fa fa-instagram"></i
                    ></a>
                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        href="https://www.linkedin.com/in/ekoprasetyopermadi/"
                        target="blank"
                        role="button"
                    ><i class="fa fa-linkedin"></i
                    ></a>
                    <a
                        class="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        // style="background-color: #333333;"
                        href="https://github.com/Eko-prasetyo15"
                        target="blank"
                        role="button"
                    ><i class="fa fa-github"></i
                    ></a>
                </section>
            </div>
            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    )
}

export default Footer

