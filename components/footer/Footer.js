//import variables from "../styles/variables.module.scss";

function Footer() {
    return (
        <footer className="footer is-framed-top-burgundy">
            <div className="content has-text-centered">
                <div className="mb-3">
                    <p className="level-item"><strong className="has-text-white">Este é um projeto meramente ilustrativo e não tem por finalidade representar ou aludir a nenhuma pessoa física ou jurídica.</strong></p>
                    <p className="level-item"><strong className="has-text-white">Quaisquer serviços oferecidos dentro deste domínio são de natureza fictícia.</strong></p>
                </div>
                <div className="columns level-item is-mobile">
                    <div className="column is-narrow">
                        <a href="https://github.com/Conatto" className="fa fa-github fa-3x"></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;