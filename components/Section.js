import AsideMenu from "../components/AsideMenu";

const Section = ({aside, children}) => {
    return (
        <>
            <section className="section mt-7 mb-5 is-translucid-grey is-framed-top-burgundy is-framed-bottom-burgundy">
                <div className="level is-flex is-justify-content-center">
                    <div className="columns home-content">
                        { aside === "true" ? <AsideMenu /> : null }
                        <div className="column is-narrow pt-0">
                            <div className="box">
                               {children} 
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Section;