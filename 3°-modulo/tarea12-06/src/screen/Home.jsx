import EmpleadoList from '../components/EmpleadoList'
import Footer from '../components/Footer'
import MenuNav from '../components/menuNav'

function Home() {
    return (
        <>
            <div className="grid-layout">
                <div className="caja c1">
                    <MenuNav/>
                </div>
                <div className="caja c2">
                    <EmpleadoList/>
                </div>
                {/* <div className="caja c3">
                    
                </div>
                <div className="caja c4">
                    
                </div> */}
                <div className="caja c5 sticky-bottom">
                    <Footer />
                </div>

            </div>





            {/* <MenuNav/>
        <Footer/> */}
        </>
    )
}

export default Home