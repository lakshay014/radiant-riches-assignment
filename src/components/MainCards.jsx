import "../styles/MainCard.scss";
const MainCards = () => {
    const img =
        "https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__";
    return (
        // <div className="card">
        //   <img src={img} alt="img1"/>
        //   <p> Builder</p>

        //   <div className="middle">
        //     <p>
        //     <b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
        //     </p>
        //     <h2>Main highlights</h2>
        //     <p>
        //     [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
        //     </p>

        //     <p>Show more</p>
        //   </div>

        //   <div className="end">
        //     <h1>9.8 <sup>ℹ️</sup></h1>
        //     <p>Exceptional</p>
        //     <p>⭐⭐⭐⭐</p>

        //     <button>View</button>
        //   </div>
        // </div>
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <h3>1</h3>
                                    <img className="" src={img} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <b>WixPro 72-Inch Responsive Website Builder-</b>{" "}
                                        Comprehensive Digital Platform Creation Tool, Streamlined
                                        Design Interface for Professional Websites and Online Stores
                                        (Black/Blue)
                                    </p>
                                    <h2>Main highlights</h2>
                                    <p className="card-text">
                                        [What You Get]: Receive the WixPro website builder suite,
                                        access to premium design templates, an extensive library of
                                        widgets and apps, and detailed step-by-step guides.
                                    </p>
                                    <p className="card-text">Show more</p>
                                </div>
                                <div className="card-body1">
                                    <div className="rating">
                                    <h1>
                                        9.8 <sup>ℹ️</sup>
                                    </h1>
                                    <p>Exceptional</p>
                                    <p>⭐⭐⭐⭐</p>
                                    </div>
                                    <button>View</button>
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <h3>1</h3>
                                    <img className="" src={img} alt="Card image cap" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">
                                        <b>WixPro 72-Inch Responsive Website Builder-</b>{" "}
                                        Comprehensive Digital Platform Creation Tool, Streamlined
                                        Design Interface for Professional Websites and Online Stores
                                        (Black/Blue)
                                    </p>
                                    <h2>Main highlights</h2>
                                    <p className="card-text">
                                        [What You Get]: Receive the WixPro website builder suite,
                                        access to premium design templates, an extensive library of
                                        widgets and apps, and detailed step-by-step guides.
                                    </p>
                                    <p className="card-text">Show more</p>
                                </div>
                                <div className="card-body1">
                                    <div className="rating">
                                    <h1>
                                        9.8 <sup>ℹ️</sup>
                                    </h1>
                                    <p>Exceptional</p>
                                    <p>⭐⭐⭐⭐</p>
                                    </div>
                                    <button>View</button>
                                   
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainCards;
