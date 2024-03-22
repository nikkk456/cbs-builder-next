export default function Gallery() {
    return (
        <>
            <div className='container my-5' id='Gallery'>
                <div className='row mb-3'>
                    <h2 className='text-center'><span style={{ width: "10%", borderBottom: "2px double #3a5c5c" }}>Gallery</span></h2>
                </div>
                <div className="row" style={{overflowX:"auto", flexWrap:"nowrap"}}>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide7.jpg' alt='img1' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide8.jpg' alt='img2' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide9.jpg' alt='img3' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide1.jpg' alt='img1' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide2.jpg' alt='img2' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide3.jpg' alt='img3' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide4.jpg' alt='img1' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide5.jpg' alt='img2' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                    <div className='col-md-4 col-4'>
                        <img src='./sliding/Slide6.jpg' alt='img3' style={{ width: "100%", borderRadius: "20px", boxShadow: "2px 3px 3px 2px #a9a4a4" }}></img>
                    </div>
                </div>
            </div>
        </>
    )
}