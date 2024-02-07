import React, { useEffect } from 'react';
import Nav from '../components/Nav';

    
const Qrcodepage = () => {  
    return (        
        <div>
            <div className="container-fluid bg-custom-gradient">
                <div className="container p-5">
                    <Nav/>
                    <div className="row mb-3">
                        <div className="col-12 text-center qr-title">
                            <h4 style={{ fontWeight: "700" }}>Scan this QR Code (এই QR কোডটি স্ক্যান করুন )</h4>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div id="qrcode"></div>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 qr-secnnd-title">
                            <p><i style={{ fontSize: "28px" }} className="fa-regular fa-hand-point-right"></i> Please login to your
                                NexusPay app account with your mobile and get ready to scan QR Code</p>
                            <p><i style={{ fontSize: "28px" }} className="fa-regular fa-hand-point-right"></i> অনুগ্রহ পূর্বক আপনার
                                মোবাইল থেকে নেক্সাস পে অ্যাপ এ লগ ইন করেন এবং কিউ আর কোড স্ক্যান এর জন্য প্রস্তুত হন ।</p>
                        </div>
                    </div>
                    <h1>figjaljkgn</h1>
                </div>
            </div>
        </div>
    );
}

export default Qrcodepage;
