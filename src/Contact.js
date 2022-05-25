
const logoPath="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg";
const url ="#";
function Contact(){
    return (
        <div className="contactForm">
            <div className='container '>
                <div className='row mx-auto test'>
                    <div className='col-lg-7'>
                       <div className="row left">
                            <div className="col-lg-12 text-left">
                                <img src={logoPath} alt="Facebook Logo" className="logo mb-2"/><br/>
                            </div>
                            <div className="col-lg-12 message">
                                <h2 className="text">Avec Facebook, partagez et restez en contact avec votre entourage.</h2>
                            </div>
                       </div>
                    </div>
                    <div className='col-lg-5 left'>
                        <div className="formColor shadow">
                            <form className="loginForm">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input  type="email" className="form-control p-2" name="email" placeholder="Adresse Email ou numéro de téléphone"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input  type="password" className="form-control p-2" name="password" placeholder="Mot de passe"/>
                                    </div>
                                </div>
                                <div class="d-grid gap-2">
                                    <button className="btn btn-primary font-weight-bold" type="button">Se Connecter</button>
                                    <a href={url} className="text-primary text-decoration-none">Mot de passe oublié ?</a>
                                </div>
                                <hr/>
                                <div class="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-success font-weight-bold p-3 border bg-green" type="button">Créer un nouveau Compte</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Contact;